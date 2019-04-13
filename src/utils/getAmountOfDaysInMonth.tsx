export const getAmountOfDaysInMonth = (date: Date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;

  if (month == 2) return leapYear ? 29 : 28;
  else return months30.includes(month) ? 30 : 31;
};
