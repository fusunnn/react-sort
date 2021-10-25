import { useState } from "react";
//function to generate random number - min inclusive max inclusive
//from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to sleep for the animation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  //button to handle the click of the "generate new array" button
  const handleNewArrayButton = () => {
    setArrayToSort(generateArr(numOfElements));
  };

  //bubble sort function
  const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        setTimeout(() => {
          console.log(array);
          setArrayToSort(array);
        }, 200);
        if (array[j] > array[j + 1]) {
          var nextElement = array[j + 1];
          array[j + 1] = array[j];
          array[j] = nextElement;
        }
      }
    }
  };
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#282c34",
        minHeight: "100vh",
        maxHeight: "100vh",
      }}
    >
      <div style={{ display: "flex", minHeight: "80vh", maxHeight: "80vh" }}>
        {arrayToSort.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                width: 80 / numOfElements + "vw",
                height: (value / 1000) * 80 + "vh",
                backgroundColor: "white",
                margin: "0 .1vw",
                transition: "0.2s",
              }}
            ></div>
          );
        })}
      </div>
      <div>
        <button onClick={() => bubbleSort(arrayToSort.slice())}>Start</button>
        <button onClick={() => handleNewArrayButton()}>New array</button>
      </div>
    </div>
  );
}

export default App;
