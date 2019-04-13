// Where 1 - Sunday, 7 - Sunday; Sorry American pals
export const getFirstDayInAMonth = (date: Date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  const zeroPad = (value, length) => `${value}`.padStart(length, "0");

  return +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
};
