import { readFileSync } from 'node:fs';

type Report = Record<string, { name: string; versions: string[] }[]>;

export const allowedLicenses: readonly string[] = [
  'MIT',
  'Apache-2.0',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'ISC',
  '0BSD',
  'OFL-1.1',
];

export function isAllowed(expression: string, allowed: readonly string[]): boolean {
  const hasAnd = /\sAND\s/i.test(expression);
  const hasOr = /\sOR\s/i.test(expression);
  // Mixed AND/OR with parentheses needs a real SPDX parser; fail closed and review it by hand.
  if (hasAnd && hasOr && /[()]/.test(expression)) return false;
  return expression
    .replace(/[()]/g, '')
    .split(/\s+OR\s+/i)
    .some((alternative) =>
      alternative.split(/\s+AND\s+/i).every((id) => allowed.includes(id.trim())),
    );
}

export function findDisallowed(report: Report, allowed: readonly string[]): string[] {
  return Object.entries(report)
    .filter(([license]) => !isAllowed(license, allowed))
    .flatMap(([license, packages]) =>
      packages.map((pkg) => `${pkg.name}@${pkg.versions.join(', ')}: ${license}`),
    );
}

if (import.meta.main) {
  const report = JSON.parse(readFileSync(process.stdin.fd, 'utf8')) as Report;
  const disallowed = findDisallowed(report, allowedLicenses);
  if (disallowed.length > 0) {
    console.error(`Licenses outside the allowed list:\n${disallowed.join('\n')}`);
    process.exit(1);
  }
  console.log('Every production dependency has an allowed license.');
}
