"use client";
import React, { useState } from "react";
import DateRangePicker from "./partials/DateRangePicker";
import RecurrenceSelector from "./partials/RecurrenceSelector";
import WeeklyOptions from "./partials/WeeklyOptions";
import MonthlyOptions from "./partials/MonthlyOptions";
import CalendarPreview from "./partials/CalendarPreview";

import { generateRecurringDates } from "@/utils/recurrence";

const RecurringDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">("daily");
  const [count, setCount] = useState<number>(5);

  const recurringDates = generateRecurringDates(startDate, frequency, count);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Recurring Date Picker</h2>

      <DateRangePicker startDate={startDate} setStartDate={setStartDate} />

      <RecurrenceSelector
        frequency={frequency}
        setFrequency={setFrequency}
        count={count}
        setCount={setCount}
      />

      {frequency === "weekly" && <WeeklyOptions />}
      {frequency === "monthly" && <MonthlyOptions />}

      <CalendarPreview dates={recurringDates} />
    </div>
  );
};

export default RecurringDatePicker;
