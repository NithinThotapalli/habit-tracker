import React, { useState } from "react";
import { Habit } from "../types";

interface HabitRowProps {
  habit: Habit;
  days: { date: string; done: boolean | null }[];
  onToggle: (date: string) => void;
  onRemove: () => void; // <-- Add this line
}

export const HabitRow: React.FC<HabitRowProps> = ({ habit, days, onToggle, onRemove }) => {
  const [popped, setPopped] = useState<{ [date: string]: boolean }>({});

  const handleClick = (date: string) => {
    setPopped((prev) => ({ ...prev, [date]: true }));
    setTimeout(() => setPopped((prev) => ({ ...prev, [date]: false })), 250);
    onToggle(date);
  };

  return (
    <div
      style={{
        marginBottom: 24,
        background: "#f4f6fa",
        borderRadius: 12,
        padding: "12px 16px",
        boxShadow: "0 2px 8px rgba(44,62,80,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        transition: "box-shadow 0.2s",
        position: "relative"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 600, fontSize: 16, color: "#2e7d32" }}>
          {habit.name}
        </div>
        <button
          onClick={onRemove}
          title="Remove habit"
          style={{
            background: "none",
            border: "none",
            color: "#e57373",
            fontSize: 20,
            cursor: "pointer",
            marginLeft: 8,
            padding: 0,
            lineHeight: 1,
            borderRadius: 4,
            transition: "background 0.2s"
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#ffeaea")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}
        >
          ×
        </button>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {days.map((day, idx) => (
          <div
            key={day.date}
            onClick={() => handleClick(day.date)}
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: day.done === null ? "#e0e0e0" : day.done ? "#81c784" : "#e57373",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: day.done === null ? "1.5px solid #bdbdbd" : "2px solid #fff",
              boxShadow: day.done ? "0 2px 8px rgba(46,125,50,0.08)" : undefined,
              fontSize: 18,
              color: day.done === null ? "#aaa" : "#fff",
              transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
              transform: popped[day.date] ? "scale(1.18)" : "scale(1)",
              outline: "none",
              position: "relative",
            }}
            tabIndex={0}
            title={day.date}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") handleClick(day.date);
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(46,125,50,0.13)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = day.done ? "0 2px 8px rgba(46,125,50,0.08)" : "none")}
          >
            {day.done === null ? "" : day.done ? "✓" : "✗"}
            {popped[day.date] && (
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 8,
                  boxShadow: "0 0 0 6px rgba(129,199,132,0.18)",
                  pointerEvents: "none",
                  animation: "popFade 0.25s linear",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};