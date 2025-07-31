import React from "react";
import { useRecurrenceStore } from "@/hooks/useRecurrenceStore";

const MonthlyOptions = () => {
  const { monthlyDay, setMonthlyDay } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Day of Month</label>
      <input
        type="number"
        min={1}
        max={31}
        value={monthlyDay}
        onChange={(e) => setMonthlyDay(Number(e.target.value))}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>
  );
};

export default MonthlyOptions;
