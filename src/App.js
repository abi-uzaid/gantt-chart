import React from "react";
import GanttChart from "./Gantt";
import MyCalendar from "./CalendarWithGantt";

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <div>
        <h2>Gantt Chart</h2>
        <GanttChart />
      </div>
    </div>
  );
}

export default App;
