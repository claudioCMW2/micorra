import { describe, expect, it } from 'vitest';
import { allowedLicenses, findDisallowed, isAllowed } from './check-licenses.ts';

describe('isAllowed', () => {
  it.each(['MIT', 'Apache-2.0', 'MIT OR GPL-3.0-only', '(MIT OR CC0-1.0)', 'MIT AND ISC'])(
    'accepts %s',
    (expression) => {
      expect(isAllowed(expression, allowedLicenses)).toBe(true);
    },
  );

  it.each([
    'GPL-3.0-only',
    'MIT AND GPL-3.0-only',
    'MPL-2.0',
    'Unknown',
    'MIT AND (ISC OR GPL-3.0-only)',
  ])('rejects %s', (expression) => {
    expect(isAllowed(expression, allowedLicenses)).toBe(false);
  });
});

describe('findDisallowed', () => {
  it('lists each package whose license is not allowed', () => {
    const report = {
      MIT: [{ name: 'ok', versions: ['1.0.0'] }],
      'GPL-3.0-only': [{ name: 'copyleft', versions: ['2.0.0', '2.1.0'] }],
    };
    expect(findDisallowed(report, allowedLicenses)).toEqual([
      'copyleft@2.0.0, 2.1.0: GPL-3.0-only',
    ]);
  });
});
