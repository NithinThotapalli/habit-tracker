import { Habit } from '../types';

let habits: Habit[] = [];

export function getHabits(): Habit[] {
  return habits;
}

export function addHabit(name: string): Habit {
  const newHabit: Habit = {
    id: Date.now(),
    name,
    doneToday: false,
  };
  habits.push(newHabit);
  return newHabit;
}

export function toggleHabit(id: number): void {
  habits = habits.map(habit =>
    habit.id === id ? { ...habit, doneToday: !habit.doneToday } : habit
  );
}