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
