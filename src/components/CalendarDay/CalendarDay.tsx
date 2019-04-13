import React, { FunctionComponent } from "react";

import styles from "./CalendarDay.module.css";

interface Props {
  value: string | number;
  current?: number;
}

export const CalendarDay: FunctionComponent<Props> = ({ value }) => {
  const current = new Date().getDay();
  return (
    <div
      className={`${styles.calendarDay} ${current === value && styles.active}`}
    >
      {value}
    </div>
  );
};
