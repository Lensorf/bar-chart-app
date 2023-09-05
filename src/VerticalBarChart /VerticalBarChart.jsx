/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './VerticalBarChart.css';

function VerticalBarChart({ data }) {
  return (
    <div className="bar-chart">
      {data.map((value, index) => (
        <div key={index} className="bar" style={{ height: `${value}px` }} />
      ))}
    </div>
  );
}

export default VerticalBarChart;
