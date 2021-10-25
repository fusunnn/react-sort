import { useState } from "react";
//function to generate random number - min inclusive max inclusive
//from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to generate random array - takes in number of elements in array
const generateArr = (x) => {
  let randomArr = [];
  for (let i = 0; i < x; i++) {
    randomArr.push(getRandomInt(5, 1000));
  }
  return randomArr;
};

function App() {
  const [numOfElements, setNumOfElements] = useState(50);
  const [arrayToSort, setArrayToSort] = useState(generateArr(numOfElements));

  //bubble sort function
  const bubbleSort = () => {
    for (let i = 0; i < arrayToSort.length; i++) {
      for (let j = 0; j < arrayToSort.length; j++) {
        let arrayCopy = [...arrayToSort];
        if (arrayToSort[j] > arrayToSort[j + 1]) {
          var nextElement = arrayToSort[j + 1];
          arrayCopy[j + 1] = arrayCopy[j];
          arrayCopy[j] = nextElement;
          setArrayToSort(arrayCopy);
        }
      }
    }
  };

  return (
    <div
      style={{
        justifyContent: "center",

        display: "flex",
        flexDirection: "row",
        backgroundColor: "#282c34",
        minHeight: "100vh",
        maxHeight: "100vh",
      }}
    >
      {arrayToSort.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              width: 80 / numOfElements + "vw",
              height: (value / 1000) * 80 + "vh",
              backgroundColor: "white",
              marginLeft: ".2vw",
            }}
          ></div>
        );
      })}
      <button onClick={() => bubbleSort()}>Start</button>
    </div>
  );
}

export default App;
