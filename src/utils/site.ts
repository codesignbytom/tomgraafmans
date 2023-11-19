/**
 * Sets the color mode.
 *
 * @param colorMode - The color mode to set.
 * @returns The color mode.
 */
export function setColorMode(colorMode: string) {
  return colorMode;
}

export function thisMonthToLocale(locale: string) {
  return new Date().toLocaleString(locale, { month: "long", year: "numeric" });
}

/**
 * Exports the next month to a locale.
 *
 * @param locale - The locale to use.
 * @returns The next month in the specified locale.
 */
export function nextMonthToLocale(locale: string) {
  const currentDate = new Date();
  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  );
  const nextMonthString = nextMonth.toLocaleString(locale, {
    month: "long",
    year: "numeric",
  });
  return nextMonthString;
}
