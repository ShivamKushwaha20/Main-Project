// sortingAlgorithms.js
export const bubbleSort = async (array, setArray, setSorting, setSorted, time) => {
    if (!array || array.length < 2) return array;
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
  
  export const SelectionSort = async (array, setArray, setSorting, setSorted, time) => {
    if (!array || array.length < 2) return array;
    setSorting(true);
    let arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      if (min_idx !== i) {
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        setArray(arr.slice());
        await new Promise((resolve) => setTimeout(resolve, time));
      }
    }
    setSorting(false);
    setSorted(true);
  };
  
  export const insertionSort = async (array, setArray, setSorting, setSorted, time) => {
    if (!array || array.length < 2) return array;
    setSorting(true);
    let arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        setArray(arr.slice());
        await new Promise((resolve) => setTimeout(resolve, time));
        j--;
      }
    }
    setSorting(false);
    setSorted(true);
  };
  