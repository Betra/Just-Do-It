import React, { FunctionComponent } from "react";

import styles from "./Calendar.module.css";

import { parseMonthToName, range, getAmountOfDaysInMonth } from "../../utils";
import { CalendarDay } from "../CalendarDay";
import { CalendarDayName } from "../CalendarDayName";

interface Props {
  today?: Date;
}

export const CalendarSmall: FunctionComponent<Props> = ({
  today = new Date()
}) => {
  const dayNames: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const daysAmount = getAmountOfDaysInMonth(today);
  const days: number[] = range(1, daysAmount);

  return (
    <article className={styles.calendarSmall}>
      <span className={styles.headingMonth}>
        {parseMonthToName(today.getMonth())}
      </span>

      <article className={styles.calendar}>
        <section className={styles.calendarHeader}>
          {dayNames.map((dayName, key) => (
            <CalendarDayName key={key} value={dayName} />
          ))}
        </section>

        <hr />

        <section className={styles.calendarWeek}>
          {days.map((day, key) => (
            <CalendarDay value={day} key={key} />
          ))}
        </section>
      </article>
    </article>
  );
};
