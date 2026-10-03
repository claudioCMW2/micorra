import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { compile } from '@inlang/paraglide-js';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

type Settings = { baseLocale: string; locales: string[] };
type Message = (inputs?: object, options?: { locale?: string }) => string;

const root = new URL('../', import.meta.url);
const readJson = (path: string): unknown => JSON.parse(readFileSync(new URL(path, root), 'utf8'));
const settings = readJson('project.inlang/settings.json') as Settings;

const source = (locale: string): Record<string, string> => {
  const { $schema: _, ...messages } = readJson(`messages/${locale}.json`) as Record<string, string>;
  return messages;
};

let outdir: string;
let compiled: Record<string, Message>;

beforeAll(async () => {
  outdir = mkdtempSync(join(tmpdir(), 'micorra-i18n-'));
  await compile({ project: fileURLToPath(new URL('project.inlang', root)), outdir });
  compiled = await import(pathToFileURL(join(outdir, 'messages.js')).href);
});

afterAll(() => rmSync(outdir, { recursive: true, force: true }));

describe('messages', () => {
  const others = settings.locales.filter((locale) => locale !== settings.baseLocale);

  it('configures at least one locale besides the base one', () => {
    expect(others.length).toBeGreaterThan(0);
  });

  it.each(others)('%s has exactly the keys of the base locale', (locale) => {
    expect(Object.keys(source(locale)).sort()).toEqual(
      Object.keys(source(settings.baseLocale)).sort(),
    );
  });

  it.each(settings.locales)('compiles every %s message', (locale) => {
    for (const [key, text] of Object.entries(source(locale))) {
      expect(compiled[key], key).toBeTypeOf('function');
      if (!text.includes('{')) expect(compiled[key]?.({}, { locale })).toBe(text);
    }
  });
});
