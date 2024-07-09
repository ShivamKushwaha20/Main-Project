import React, { useState, useEffect } from "react";
import "./sorting.css";

export const Sorting = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    if (sorting) return;
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
    setSorted(false);
  };

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
          await new Promise((resolve) => setTimeout(resolve, 1));
        }
      }
    }
    setSorting(false);
    setSorted(true);
  };

  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  const SelectionSort = async () => {
    if (sorting) return;
    var i, j, min_idx;
    const arr = array.slice();

    for (i = 0; i < arr.length; i++) {
      min_idx = i;
      for (j = i + 1; j < arr.length; j++) {
        if(arr[j]<arr[min_idx]){
          min_idx = j;
        }
      }
      if(min_idx !== i ){
        swap(arr, min_idx, i);
        setArray(arr.slice());
        await new Promise((resolve)=> setTimeout(resolve, 100));
      }
    }
    setSorting(false);
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
          <button className="sorting-button">third sorting</button>
          <button
            className="sorting-button"
            onClick={resetArray}
            disabled={sorting}
          >
            Reset
          </button>
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
