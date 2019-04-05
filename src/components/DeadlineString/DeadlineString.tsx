import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { parseMonthToName } from "../../utils";

import styles from "./DeadlineString.module.css";

export const DeadlineString: FunctionComponent<{ deadline: Date }> = ({
  deadline
}) => {
  const hours: number = deadline.getHours();
  const minutes: number = deadline.getMinutes();
  const day: number = deadline.getDay();
  const month: string = parseMonthToName(deadline.getMonth());
  const year = deadline.getFullYear();

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDay();

  let dayByWord: string;
  const classList: string[] = [styles.deadline];

  if (new Date() > deadline) classList.push(styles.outdated);

  if (currentMonth === deadline.getMonth() && currentYear === year) {
    switch (day) {
      case currentDay:
        dayByWord = "Today";
        classList.push(styles.today);
        break;
      case currentDay + 1:
        dayByWord = "Tomorrow";
        classList.push(styles.tomorrow);
        break;
      case currentDay - 1:
        dayByWord = "Yesterday";
        break;
      default:
        dayByWord = "none";
    }

    if (dayByWord !== "none")
      return (
        <span className={classNames(...classList)}>
          {dayByWord}, {hours}:{minutes}
        </span>
      );
  }
  return (
    <span className={classNames(...classList)}>
      {day} {month}, {hours}:{minutes}
    </span>
  );
};
