import React from "react";
import { useRecurrenceStore } from "@/hooks/useRecurrenceStore";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeeklyOptions = () => {
  const { weeklyDays, toggleWeeklyDay } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Select Days</label>
      <div className="flex flex-wrap gap-2">
        {days.map((day, index) => (
          <button
            key={day}
            onClick={() => toggleWeeklyDay(index)}
            className={`px-3 py-1 rounded-full border ${
              weeklyDays.includes(index)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeeklyOptions;
