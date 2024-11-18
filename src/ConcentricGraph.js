import React from 'react';

const ConcentricGraph = ({ percentages }) => {
  const radius = 40;
  const strokeWidth = 8;
  const viewBoxSize = 200;

  return (
    <svg width={viewBoxSize} height={viewBoxSize} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className="scale-150 mx-auto">
      {percentages.map((percentage, index) => {
        const circumference = 2 * Math.PI * (radius + index * strokeWidth);
        const offset = circumference - (percentage.percentages / 100) * circumference;

        return (
          <g key={index}>
            <title>{percentage.name}</title>
            <circle
              cx={viewBoxSize / 2}
              cy={viewBoxSize / 2}
              r={radius + index * strokeWidth}
              fill="transparent"
              stroke="#DCDCDC"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={viewBoxSize / 2}
              cy={viewBoxSize / 2}
              r={radius + index * strokeWidth}
              fill="transparent"
              stroke={percentage.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default ConcentricGraph;
