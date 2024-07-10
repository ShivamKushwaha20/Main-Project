import React, { useState, useEffect } from "react";
import "./sorting.css";

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

  // bubble sort

  const bubbleSort = async () => {
    if (sorting) return;
    setSorting(true);
    let arr = array.slice();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray(arr.slice());
          await new Promise((resolve) => setTimeout(resolve, time));
        }
      }
    }
    setSorting(false);
    setSorted(true);
  };

  // swap method
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  // selection sort
  const SelectionSort = async () => {
    if (sorting) return;
    setSorting(true);
    var i, j, min_idx;
    const arr = array.slice();

    for (i = 0; i < arr.length - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      if (min_idx !== i) {
        swap(arr, min_idx, i);
        setArray(arr.slice());
        await new Promise((resolve) => setTimeout(resolve, time));
      }
    }
    setSorting(false);
    setSorted(true);
  };

  // insertion sort
  const insertionSort = async () => {
    if (sorting) return;
    let i;
    let arr = array.slice();
    for (i = 1; i < arr.length; i++) {
      let j=i;
      while(j>0 && arr[j] < arr[j-1]){
        swap(arr, j, j-1);
        setArray(arr.slice());
        await new Promise((resolve)=> setTimeout(resolve, time));
        j--;
      }
    }
    setSorted(false);
    setSorted(true);
  };

  return (
    <>
      <div className="sorting-container">
        <div className="upper-container">
          <button
            className="sorting-button"
            onClick={bubbleSort}
            disabled={sorting}
          >
            Bubble {sorted ? `Sorted` : `sort`}
          </button>
          <button
            className="sorting-button"
            onClick={SelectionSort}
            disabled={sorting}
          >
            Selection {sorted ? "sorted" : "sort"}
          </button>
          <button
            className="sorting-button"
            onClick={insertionSort}
            disabled={sorting}
          >
            Insertion {sorted ? "sorted" : "sort"}
          </button>
          <button
            className="sorting-button"
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
                  height: `${value}px`,
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
