import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useState } from 'react';
import { useEffect } from 'react';

const HeatmapComponent = () => {
  // Generate sample data for demonstration
  const startDate = new Date(2023, 0, 1); // January 1, 2023
  const endDate = new Date(2023, 11, 31); // December 31, 2023

  // Generate random data for each day
  const generateRandomCount = () => Math.floor(Math.random()*3+1); // Adjust this as needed
  const dateRange = [];
  let currentDate = new Date(startDate);
  let current = new Date();

  while (currentDate <= current) {
    dateRange.push({
      date: currentDate.toISOString(),
      count: generateRandomCount(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const [hoveredCell, setHoveredCell] = useState(null);


  return (
    <div className='relative'>
        <div className='flex flex-row justify-between'>
      <h1 className='font-semibold text-xl'>Yearly Heatmap:</h1>
      <div className='flex flex-row space-x-5'>
        <h1 className=''>Total active days: <span className='font-semibold'>48</span></h1>
        <h1 className=''>Max streak: <span className='font-semibold'>20</span></h1>
      </div>
      </div>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={dateRange}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        onMouseOver={(event, value) => {
          if (value) {
            setHoveredCell(value);
          }
        }}
        onMouseLeave={() => {
          setHoveredCell(null);
        }}
      />
      {hoveredCell && (
        
        <div className="tooltip">
          Date: {hoveredCell.date} <br />
          Value: {hoveredCell.count}
        </div>
      )}
    </div>
  );
};

export default HeatmapComponent;