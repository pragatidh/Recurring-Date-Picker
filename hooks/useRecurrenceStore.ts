import { create } from "zustand";

interface RecurrenceState {
  recurrenceType: string;
  startDate: string;
  endDate: string;
  weeklyDays: number[];
  monthlyDay: number;

  setRecurrenceType: (type: string) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  toggleWeeklyDay: (dayIndex: number) => void;
  setMonthlyDay: (day: number) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: "daily",
  startDate: "",
  endDate: "",
  weeklyDays: [],
  monthlyDay: 1,

  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  toggleWeeklyDay: (dayIndex) =>
    set((state) => ({
      weeklyDays: state.weeklyDays.includes(dayIndex)
        ? state.weeklyDays.filter((d) => d !== dayIndex)
        : [...state.weeklyDays, dayIndex],
    })),
  setMonthlyDay: (day) => set({ monthlyDay: day }),
}));
