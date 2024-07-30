import React, { useState, useEffect } from "react";
import './sorting.css'
import {bubbleSort, SelectionSort, insertionSort} from './algo/Sorting-algo.js'

export const Sorting = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [numBars, setNumBars] = useState(50);
  const [time, setTime] = useState(10);

  useEffect(() => {
    resetArray();
  }, [numBars]); //Default number of bars 50

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setNumBars(newValue);
  };
  
  const handleTimeSliderChange = (e) =>{
    const newTime = parseInt(e.target.value) 
    setTime(newTime);
  }

  // reset function to array
  const resetArray = () => {
    if (sorting) return;
    const newArray = [];
    for (let i = 0; i < numBars; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
    setSorted(false);
  };
 
  return (
    <>
      <div className="sorting-container">
        <div className="upper-container">
          <button
            className="sorting-button stylish-button"
            onClick={()=>bubbleSort(array, setArray, setSorted, setSorted, time)}
            disabled={sorting}
          >
            Bubble {sorted ? `Sorted` : `sort`}
          </button>
          <button
            className="sorting-button stylish-button"
            onClick={()=>SelectionSort(array, setArray, setSorting, setSorted, time)}
            disabled={sorting}
          >
            Selection {sorted ? "sorted" : "sort"}
          </button>
          <button
            className="sorting-button stylish-button"
            onClick={()=>insertionSort(array, setArray, setSorting, setSorted, time)}
            disabled={sorting}
          >
            Insertion {sorted ? "sorted" : "sort"}
          </button>
          <button
            className="sorting-button stylish-button"
            onClick={resetArray}
            disabled={sorting}
          >
            Reset
          </button>
        </div>
        <div className="middle-container">
          <div className="slider-container">
            <label htmlFor="bar-slider slider_name"> Number of Bars: {numBars}</label>
            <input
            className="bar-slider"
              type="range"
              id="bar-slider"
              min="10"
              max="200"
              value={numBars}
              onChange={handleSliderChange}
              disabled={sorting}
            />
          </div>
          <div className="slider-container">
            <label htmlFor="time-slider slider_name">Time: {time}ms</label>
            <input 
            className="bar-slider"
            type="range"
            min="10" 
            max="200"
            value={time}
            onChange={handleTimeSliderChange}
            disabled={sorting}
            />
          </div>
        </div>
        <div className="lower-container">
          <div className="bars-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  height: `${value*.18}%`,
                  backgroundColor: sorted ? `green` : `black`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
