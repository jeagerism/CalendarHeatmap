import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";
import "./App.css";
import "./index.css";

function App() {
  // วันที่ปัจจุบัน
  const today = new Date();
  const yearStart = new Date(today.getFullYear(), 0, 1); // วันแรกของปีปัจจุบัน
  const yearEnd = new Date(today.getFullYear(), 11, 31); // วันสุดท้ายของปีปัจจุบัน

  // ฟังก์ชันสร้างอาร์เรย์
  const getRange = (count) => {
    return Array.from({ length: count }, (_, i) => i);
  };

  // ฟังก์ชันสุ่มเลข
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // สร้างค่าสุ่มสำหรับแผนผังความร้อน
  const allYearValues = getRange(365).map((index) => {
    return {
      date: new Date(today.getFullYear(), 0, index + 1),
      count: getRandomInt(1, 3),
    };
  });

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className=" w-full h-full p-20">
        <div className="flex mb-20 justify-center items-center text-center">
          <div className="">
          <h1 className=" font-bold">React Calendar Heatmap</h1>
          <p>Random Values with Onclick and react-tooltip</p>
          </div>
        </div>
        <div>
          <CalendarHeatmap
            startDate={yearStart}
            endDate={yearEnd}
            values={allYearValues}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              return `color-github-${value.count}`;
            }}
            tooltipDataAttrs={(value) => {
              return {
                "data-tip": `${value.date
                  .toISOString()
                  .slice(0, 10)} has count: ${value.count}`,
              };
            }}
            showWeekdayLabels={true}
            onClick={(value) =>
              alert(
                `Clicked on value with count: ${
                  value ? value.count : "no count"
                }`
              )
            }
          />
          <Tooltip />
        </div>
      </div>
    </div>
  );
}

export default App;
