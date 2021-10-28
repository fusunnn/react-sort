import { useState, useEffect } from "react";
import "./font.css";
import Bar from "./components/Bar.js";
import AlgoButton from "./components/AlgoButton";
import BubbleSort from "./algorithms/BubbleSort";
import SelectionSort from "./algorithms/SelectionSort";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

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
  const primaryColor = "#173F35";
  const secondaryColor = "#408e7b";
  const terceryColor = "#EAA09C";
  const [numOfElements, setNumOfElements] = useState(20);
  const [arrayToSort, setArrayToSort] = useState(generateArr(numOfElements));
  const [currIndices, setCurrIndices] = useState([]);
  const [speed, setSpeed] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [newArrayButtonHover, setNewArrayButtonHover] = useState(false);
  const [bubbleButtonHover, setBubbleButtonHover] = useState(false);
  const [selectionButtonHover, setSelectionButtonHover] = useState(false);

  useEffect(() => {
    setArrayToSort(generateArr(numOfElements));
  }, [numOfElements]);

  //button to handle the click of the "generate new array" button
  const handleNewArrayButton = () => {
    setCurrIndices([]);
    setArrayToSort(generateArr(numOfElements));
  };

  const handleNumOfElementsChange = (value) => {
    setNumOfElements(value);
  };
  const handleSpeedChange = (value) => {
    setSpeed(value);
  };

  const handleBubble = () => {
    setIsRunning(true);
    var temporaryArrayToSort = arrayToSort.slice();
    BubbleSort(
      temporaryArrayToSort,
      setArrayToSort,
      setCurrIndices,
      speed,
      setIsRunning
    );
  };
  const handleSelection = () => {
    setIsRunning(true);
    var temporaryArrayToSort = arrayToSort.slice();
    SelectionSort(
      temporaryArrayToSort,
      setArrayToSort,
      setCurrIndices,
      speed,
      setIsRunning
    );
  };

  return (
    <div
      className="barContainer"
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: primaryColor,
        minHeight: "100vh",
        maxHeight: "100vh",
      }}
    >
      <div
        className="test"
        style={{
          display: "flex",
          minHeight: "80vh",
          maxHeight: "80vh",
          minWidth: "85vw",
          maxWidth: "85vw",
        }}
      >
        {arrayToSort.map((element, index) => {
          return (
            <Bar
              value={element}
              index={index}
              numOfElements={numOfElements}
              key={index}
              targets={currIndices}
              color={terceryColor}
              isRunning={isRunning}
            />
          );
        })}
      </div>
      <div
        className="buttonContainer"
        style={{
          width: "40vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "7vh",
          transition: "0.7s",
        }}
      >
        <AlgoButton
          algorithm="bubble"
          isRunning={isRunning}
          handleClick={() => handleBubble()}
          buttonHover={bubbleButtonHover}
          setButtonHover={setBubbleButtonHover}
          secondaryColor={secondaryColor}
          terceryColor={terceryColor}
        />
        <AlgoButton
          algorithm="selection"
          isRunning={isRunning}
          handleClick={() => handleSelection()}
          buttonHover={selectionButtonHover}
          setButtonHover={setSelectionButtonHover}
          secondaryColor={secondaryColor}
          terceryColor={terceryColor}
        />
        <div
          className="font"
          style={{
            color: isRunning ? "grey" : secondaryColor,
            fontSize: ".7vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          number of elements
          <Slider
            disabled={isRunning}
            size="small"
            min={2}
            max={100}
            onChange={(e, value) => handleNumOfElementsChange(value)}
            defaultValue={20}
            valueLabelDisplay="auto"
            aria-label="Small"
            style={{
              width: "10vw",
              color: isRunning ? "grey" : secondaryColor,
            }}
          />
        </div>
        <div
          className="font"
          style={{
            color: isRunning ? "grey" : secondaryColor,
            fontSize: ".7vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          speed
          <Slider
            disabled={isRunning}
            size="small"
            min={1}
            max={10}
            onChange={(e, value) => handleSpeedChange(value)}
            defaultValue={5}
            valueLabelDisplay="auto"
            aria-label="Small"
            style={{
              width: "10vw",
              color: isRunning ? "grey" : secondaryColor,
            }}
          />
        </div>
        <button
          disabled={isRunning}
          className="font"
          onMouseEnter={() => setNewArrayButtonHover(true)}
          onMouseLeave={() => setNewArrayButtonHover(false)}
          onClick={() => handleNewArrayButton()}
          style={{
            backgroundColor: "transparent",
            borderRadius: ".7vw",
            width: "6vw",
            height: "3.5vh",
            border: isRunning
              ? ".2vw solid grey"
              : newArrayButtonHover
              ? ".2vw solid " + terceryColor
              : ".2vw solid " + secondaryColor,
            color: isRunning
              ? "grey"
              : newArrayButtonHover
              ? terceryColor
              : secondaryColor,
            fontSize: ".7vw",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          new array
        </button>
        <FontAwesomeIcon
          className="testing"
          icon={faRedoAlt}
          style={{ cursor: "pointer", transition: "0.3s" }}
          onClick={() => window.location.reload()}
          color={secondaryColor}
        />
      </div>
    </div>
  );
}

export default App;
