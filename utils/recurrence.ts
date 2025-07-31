// utils/recurrence.ts

export type RecurrenceType = "daily" | "weekly" | "monthly";

export function generateRecurringDates(
  startDate: Date,
  frequency: RecurrenceType,
  count: number
): Date[] {
  const dates: Date[] = [];
  const current = new Date(startDate);

  for (let i = 0; i < count; i++) {
    dates.push(new Date(current));
    if (frequency === "daily") current.setDate(current.getDate() + 1);
    else if (frequency === "weekly") current.setDate(current.getDate() + 7);
    else if (frequency === "monthly") current.setMonth(current.getMonth() + 1);
  }

  return dates;
}
