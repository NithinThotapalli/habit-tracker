import React, { useState } from "react";
import { Habit } from "../types";
import { HabitRow } from "./HabitRow";
import { WeekTabs } from "./WeekTabs";

// Replace this:
const initialHabits: Habit[] = [
  { id: 1, name: "Exercising", doneToday: false },
  { id: 2, name: "Meditating", doneToday: false },
  { id: 3, name: "No Alcohol", doneToday: false },
  { id: 4, name: "Reading", doneToday: false },
  { id: 5, name: "Journaling", doneToday: false },

];

export const HabitList: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const [selectedDay, setSelectedDay] = useState(
    new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
  );
  const [habitStates, setHabitStates] = useState<
    Record<number, Record<string, boolean | null>>
  >({});
  const [showAdd, setShowAdd] = useState(false);
  const [newHabit, setNewHabit] = useState("");

  const weekDates = getWeekDates();

  const handleToggle = (habitId: number, date: string) => {
    setHabitStates((prev) => ({
      ...prev,
      [habitId]: {
        ...prev[habitId],
        [date]: prev[habitId]?.[date] === true ? false : true,
      },
    }));
  };

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      setHabits((prev) => [
        ...prev,
        { id: Date.now(), name: newHabit.trim(), doneToday: false },
      ]);
      setNewHabit("");
      setShowAdd(false);
    }
  };

  return (
    <div>
      <WeekTabs selected={selectedDay} onSelect={setSelectedDay} />
      {habits.map((habit) => (
        <HabitRow
          key={habit.id}
          habit={habit}
          days={weekDates.map((date, idx) => ({
            date,
            done: habitStates[habit.id]?.[date] ?? null,
          }))}
          onToggle={(date) => handleToggle(habit.id, date)}
          onRemove={() => setHabits(habits.filter(h => h.id !== habit.id))} // <-- Add this line
        />
      ))}
      <button
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#388e3c",
          color: "#fff",
          fontSize: 32,
          border: "none",
          boxShadow: "0 4px 16px rgba(46,125,50,0.18)",
          cursor: "pointer",
          zIndex: 1000,
          transition: "background 0.2s, transform 0.2s",
        }}
        onClick={() => setShowAdd(true)}
        title="Add new habit"
      >
        +
      </button>

      {showAdd && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 8px 32px rgba(44,62,80,0.18)",
              minWidth: 280,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h3 style={{ margin: 0 }}>Add New Habit</h3>
            <input
              autoFocus
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              placeholder="Habit name"
              style={{
                padding: "10px 12px",
                borderRadius: 6,
                border: "1px solid #bdbdbd",
                fontSize: 16,
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddHabit();
              }}
            />
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setShowAdd(false)}
                style={{
                  background: "#eee",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAddHabit}
                style={{
                  background: "#388e3c",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getWeekDates = () => {
  const today = new Date();
  const week: string[] = [];
  const dayIdx = today.getDay() === 0 ? 6 : today.getDay() - 1;
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - dayIdx + i);
    week.push(d.toISOString().slice(0, 10));
  }
  return week;
};