import React, { useEffect } from "react";
import "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import { gantt } from "dhtmlx-gantt";

const GanttChart = () => {
  useEffect(() => {
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.init("gantt_chart");

    const tasks = [
      {
        id: 1,
        text: "Task 1",
        start_date: "2023-07-20 08:00",
        duration: 4,
      },
      {
        id: 2,
        text: "Task 2",
        start_date: "2023-07-20 13:00",
        duration: 6,
      },
    ];

    const jsonData = {
      data: tasks, // Tempatkan data di dalam properti "data" dalam objek JSON
    };

    gantt.parse(jsonData); // Parsing data dari objek JSON
  }, []);

  return (
    <div id="gantt_chart" style={{ width: "100%", height: "500px" }}></div>
  );
};

export default GanttChart;
