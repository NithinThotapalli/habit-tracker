export interface Habit {
  id: number;
  name: string;
  doneToday: boolean;
}

export interface HabitListProps {
    habits: Habit[];
    onAddHabit: (habit: Habit) => void;
    onUpdateHabit: (habit: Habit) => void;
    onDeleteHabit: (id: string) => void;
}