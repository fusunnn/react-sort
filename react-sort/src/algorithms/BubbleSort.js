import sleep from "../reuseables/sleep.js";

export default async function BubbleSort(
  array,
  setArrayToSort,
  setCurrIndices,
  speed,
  setIsRunning
) {
  let len = array.length;

  for (let i = len; i > 0; i--) {
    for (let j = 0, k = 1; j < i; j++, k++) {
      setCurrIndices([j, j + 1]);
      await sleep(3000 / speed);
      if (array[j] > array[k]) {
        [array[j], array[k]] = [array[k], array[j]];
      }
      setArrayToSort([...array]);
    }
  }
  setIsRunning(false);
  return array;
}
