import React from 'react';
import VerticalBarChart from './VerticalBarChart /VerticalBarChart';
import './App.css';

function App() {
  const data1 = [100, 150, 200, 120, 80];
  const data2 = [50, 75, 100, 50, 30];

  return (
    <div className="App">
      <h1>Vertical Bar Chart Example</h1>
      <VerticalBarChart data={data1} />
      <VerticalBarChart data={data2} />
    </div>
  );
}

export default App;
