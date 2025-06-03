import React from "react";
import { HabitList } from "./components/HabitList";
import "./index.css";

const GITHUB_URL = "https://github.com/NithinThotapalli"; // <-- Replace with your GitHub profile or repo

const App: React.FC = () => (
  <div className="app-container" style={{
    animation: "fadeInApp 0.7s cubic-bezier(.68,-0.55,.27,1.55)"
  }}>
    <h1>Habit Tracker</h1>
    <HabitList />
    <div style={{
      marginTop: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      opacity: 0.7
    }}>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#222" }}
        title="View on GitHub"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#222"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: 6 }}
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
        <span style={{ fontSize: 16 }}>@NithinThotapalli</span>
      </a>
    </div>
  </div>
);

export default App;