import React from "react";

type DateRangePickerProps = {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  setStartDate,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
        Start Date
      </label>
      <input
        id="startDate"
        type="date"
        value={startDate.toISOString().split("T")[0]}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DateRangePicker;
