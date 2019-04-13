import { shortify } from "./shortify";

export const parseMonthToName = (
  monthNumber: number,
  shorted: boolean = false
): string => {
  let month: string;

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  if (monthNumber <= 12 && monthNumber >= 0)
    return shorted ? shortify(months[monthNumber], 3) : months[monthNumber];
  else return "super-month!";
};
