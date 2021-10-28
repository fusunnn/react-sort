import sleep from "../reuseables/sleep";

export default async function MergeSort(
  array,
  setArrayToSort,
  setCurrIndices,
  speed,
  setIsRunning
) {
  const arrayCopy = array.slice();
  //recursively split the array until it has only one element and then reverse the recursion, while merging the smaller arrays
  if (array.length > 1) {
    let mid = array.length / 2;
    let left = await MergeSort(
      array.slice(0, mid),
      setArrayToSort,
      setCurrIndices,
      speed,
      setIsRunning
    );
    let right = await MergeSort(
      array.slice(mid),
      setArrayToSort,
      setCurrIndices,
      speed,
      setIsRunning
    );
    return Merge(left, right, arrayCopy, setArrayToSort, speed);
  } else {
    return array;
  }
}

async function Merge(array1, array2, arrayCopy, setArrayToSort, speed) {
  console.log("run");
  let counter1 = 0;
  let counter2 = 0;
  let globalCounter = 0;

  var sortedArray = [...arrayCopy];

  //compare the element of both arrays at counter1 & counter2, add the smaller one of the two, increment global and either counter1 or counter2
  while (counter1 < array1.length && counter2 < array2.length) {
    await sleep(1000 / speed);
    if (array1[counter1] < array2[counter2]) {
      sortedArray[globalCounter] = array1[counter1];
      counter1++;
    } else {
      sortedArray[globalCounter] = array2[counter2];
      counter2++;
    }
    globalCounter++;
  }
  //for leftover elements in array1
  while (counter1 < array1.length) {
    sortedArray[globalCounter] = array1[counter1];
    counter1++;
    globalCounter++;
  }
  //for leftover elements in array2
  while (counter2 < array2.length) {
    sortedArray[globalCounter] = array2[counter2];
    counter2++;
    globalCounter++;
  }
  setArrayToSort(sortedArray);
  return sortedArray;
}
