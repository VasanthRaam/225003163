import React, { useState } from 'react';
import './App.css';

const AvgCalculator = () => {
  const [number,setNumbers] = useState('');
  const [average,setAverage] = useState(null);

  const CalcAverage = () => {
    const numberArray = number.split(',').map(num => parseInt(num.trim(), 10));
    const sum = numberArray.reduce((acc, current) => acc + current, 0);
    const average = sum / numberArray.length;
    setAverage(average);
  }
  return (
    <div id="answer">
      <h3>Average Calculator HTTP Microservice</h3>
      <label>Enter , seperated numbers :</label>
      <input type="text" id="field" placeholder="Enter the values" value={number} onChange={(e) => setNumbers(e.target.value)} />
      <div id="button1"><button onClick={CalcAverage}>Calculate Average</button></div>      
      {average && <p>The Average is : {average}</p>}
    </div>
  );
}
export default AvgCalculator;
