import sleep from "../reuseables/sleep.js";

export default async function SelectionSort(
  array,
  setArrayToSort,
  setCurrIndices,
  speed,
  setIsRunning
) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let tempMinIndex = i;
    for (let j = i + 1; j < len; j++) {
      setCurrIndices([i, tempMinIndex, j]);
      if (array[j] < array[tempMinIndex]) {
        await sleep(5000 / speed);
        tempMinIndex = j;
      }
    }
    let swapElement = array[i];
    array[i] = array[tempMinIndex];
    array[tempMinIndex] = swapElement;
    setArrayToSort(array);
  }
  setIsRunning(false);
  return array;
}
