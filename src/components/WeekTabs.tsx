import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface WeekTabsProps {
  selected: number;
  onSelect: (idx: number) => void;
}

export const WeekTabs: React.FC<WeekTabsProps> = ({ selected, onSelect }) => (
  <div
    style={{
      display: "flex",
      gap: 8,
      marginBottom: 24,
      justifyContent: "center",
      animation: "slideInTabs 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
    }}
  >
    {days.map((d, idx) => (
      <button
        key={d}
        onClick={() => onSelect(idx)}
        style={{
          padding: "7px 0",
          width: 38,
          borderRadius: 8,
          border: "none",
          background: selected === idx ? "#388e3c" : "#f0f0f0",
          color: selected === idx ? "#fff" : "#333",
          fontWeight: selected === idx ? 700 : 500,
          fontSize: 15,
          boxShadow: selected === idx ? "0 2px 8px rgba(46,125,50,0.10)" : undefined,
          cursor: "pointer",
          transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
          transform: selected === idx ? "scale(1.08)" : "scale(1)",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#c8e6c9")}
        onMouseLeave={e => (e.currentTarget.style.background = selected === idx ? "#388e3c" : "#f0f0f0")}
      >
        {d}
      </button>
    ))}
  </div>
);