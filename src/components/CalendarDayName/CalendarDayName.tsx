import React, { FunctionComponent } from "react";

import styles from "./CalendarDayName.module.css";

interface Props {
  value: string | number;
  current?: string;
}

export const CalendarDayName: FunctionComponent<Props> = ({ value }) => {
  const current = new Date().toString().split(" ")[0];

  const curr = current.substring(0, current.length - 1);

  return (
    <div
      className={`${styles.calendarDayName} ${curr === value && styles.active}`}
    >
      {value}
    </div>
  );
};
