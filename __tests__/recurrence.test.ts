// utils/recurrence.ts

export type RecurrenceType = "daily" | "weekly" | "monthly" | "yearly";

export interface RecurrenceOptions {
  type: RecurrenceType;
  interval: number;
  count: number;
  weekdays?: number[]; // For weekly recurrence (0=Sun to 6=Sat)
  nthWeekday?: {
    weekday: number; // 0=Sun to 6=Sat
    week: number;    // 1=first, 2=second, -1=last, etc.
  };
}

export function generateRecurringDates(
  startDate: Date,
  options: RecurrenceOptions
): Date[] {
  const dates: Date[] = [];
  const current = new Date(startDate);
  let occurrences = 0;

  while (occurrences < options.count) {
    const newDate = new Date(current);

    switch (options.type) {
      case "daily":
        dates.push(new Date(newDate));
        current.setDate(current.getDate() + options.interval);
        break;

      case "weekly":
        if (options.weekdays && options.weekdays.length > 0) {
          for (let i = 0; i < 7 && occurrences < options.count; i++) {
            const tempDate = new Date(current);
            tempDate.setDate(current.getDate() + i);
            if (options.weekdays.includes(tempDate.getDay())) {
              dates.push(new Date(tempDate));
              occurrences++;
            }
          }
          current.setDate(current.getDate() + 7 * options.interval);
          continue; // Skip the general occurrence increment below
        }
        break;

      case "monthly":
        if (options.nthWeekday) {
          const nthDate = nthWeekdayOfMonth(current, options.nthWeekday.weekday, options.nthWeekday.week);
          if (nthDate) dates.push(nthDate);
        } else {
          dates.push(new Date(newDate));
        }
        current.setMonth(current.getMonth() + options.interval);
        break;

      case "yearly":
        dates.push(new Date(newDate));
        current.setFullYear(current.getFullYear() + options.interval);
        break;
    }

    occurrences++;
  }

  return dates;
}

function nthWeekdayOfMonth(baseDate: Date, weekday: number, week: number): Date | null {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();

  if (week > 0) {
    // e.g., 1st or 2nd weekday of month
    let count = 0;
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getMonth() !== month) break;
      if (date.getDay() === weekday) {
        count++;
        if (count === week) return date;
      }
    }
  } else {
    // e.g., last (-1), second last (-2)
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let day = lastDay; day >= 1; day--) {
      const date = new Date(year, month, day);
      if (date.getDay() === weekday) {
        if (++week === 0) return date;
      }
    }
  }

  return null;
}
