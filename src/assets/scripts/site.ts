export function setColorMode(colorMode: string) {
  return colorMode;
}

export function thisMonthToLocale(locale: string) {
  return new Date().toLocaleString(locale, { month: "long", year: "numeric" });
}

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

export function delay(n: number) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done(true);
    }, n);
  });
}
