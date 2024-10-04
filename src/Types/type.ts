export type HabitValue = {
  title: string;
  longest_streak?: boolean;
  curr_streak?: boolean;
  total_entries: boolean;
  value: CalendarValue[];
  color: string;
  type: string;
  unit: string;
};

export type CalendarValue = {
  value: number;
  day: string;
};
