export function formatNumberWithLocale(num: number, locale: string = 'en-US'): string {
  return num.toLocaleString(locale);
}