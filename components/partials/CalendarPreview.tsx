import React from "react";
interface Props {
    dates: Date[];
  }
import { useRecurrenceStore } from "@/hooks/useRecurrenceStore";

const CalendarPreview: React.FC<Props> = ({ dates }) => {
    return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Preview</h3>
      <ul className="list-disc pl-5 text-sm">
        {dates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
