// components/partials/RecurrenceSelector.tsx
import React from "react";

type RecurrenceSelectorProps = {
  frequency: "daily" | "weekly" | "monthly";
  setFrequency: React.Dispatch<React.SetStateAction<"daily" | "weekly" | "monthly">>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const RecurrenceSelector: React.FC<RecurrenceSelectorProps> = ({
  frequency,
  setFrequency,
  count,
  setCount,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Frequency
        </label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as any)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Number of Occurrences
        </label>
        <input
          type="number"
          value={count}
          min={1}
          onChange={(e) => setCount(parseInt(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
    </div>
  );
};

export default RecurrenceSelector;
