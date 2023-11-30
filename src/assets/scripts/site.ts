/**
 * Sets the color mode of the application.
 *
 * @param {string} colorMode - The color mode to set.
 * @return {string} The color mode that was set.
 */
export function setColorMode(colorMode: string) {
  return colorMode;
}

/**
 * Returns the localized string representation of the next month.
 *
 * @param {string} locale - The locale used to format the date.
 * @return {string} The localized string representation of the next month.
 */
export function nextMonthToLocale(locale: string) {
  const currentDate = new Date();
  const options = {
    month: "long",
    year: "numeric",
    timeZone: "Europe/Amsterdam",
  };
  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  );
  const nextMonthString = nextMonth.toLocaleString(locale, options as any);
  return nextMonthString;
}

/**
 * Delays the execution of a code block by a specified amount of time.
 *
 * @param {number} n - The amount of time to delay in milliseconds. If not provided, the default value is 2000.
 * @return {Promise<boolean>} A promise that resolves to true after the specified delay.
 */
export function delay(n: number) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done(true);
    }, n);
  });
}
