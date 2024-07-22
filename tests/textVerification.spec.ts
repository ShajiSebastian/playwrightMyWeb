import { test, expect } from '@playwright/test';
// import { formatText } from '../src/utils/utils';



test.describe('UTILS', () => {
  test('verify formatText function with ignoreCase property', () => {
    const text = 'Hello';
    const expected = 'hello';
    const actual = formatText(text, { ignoreCase: true });

    expect(actual).toBe(expected);
  });

  test('verify formatText function with ignoreCase property negative', () => {
    const text = 'Hello';
    const expected = 'Hello';
    const actual = formatText(text, { ignoreCase: false });

    expect(actual).toBe(expected);
  });

  test('verify formatText function with trim property', () => {
    const text = ' Hello ';
    const expected = 'Hello';
    const actual = formatText(text, { trim: true });

    expect(actual).toBe(expected);
  });

  test('verify formatText function with trim property negative', () => {
    const text = ' Hello';
    const expected = ' Hello';
    const actual = formatText(text, { trim: false });

    expect(actual).toBe(expected);
  });
});

export function formatText(text: string, { ignoreCase = false, trim = false }: Options): string {
  if (trim) {
    return text.trim();
  }
  if (ignoreCase) {
    return text.toLowerCase();
  }

  return text;
}

export type Options = {
  textMethod?: 'textContent' | 'innerText';
  ignoreCase?: boolean;
  trim?: boolean;
  timeout?: number;
  state?: 'visible' | 'attached';
};