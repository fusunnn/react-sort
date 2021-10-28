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
    let tempArray = array.slice(i, len);
    let tempMin = Math.min(...tempArray);
    let minIndex = array.indexOf(tempMin, i);
    setCurrIndices([minIndex, i]);
    await sleep(10000 / speed);
    let swapElement = array[i];
    array[i] = array[minIndex];
    array[minIndex] = swapElement;
    setArrayToSort(array);
  }
  setIsRunning(false);
  return array;
}
