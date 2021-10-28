import React from "react";
import "../font.css";

export default function AlgoButton({
  algorithm,
  isRunning,
  handleClick,
  buttonHover,
  setButtonHover,
  secondaryColor,
  terceryColor,
}) {
  return (
    <button
      disabled={isRunning}
      className="font"
      onClick={() => handleClick()}
      onMouseEnter={() => setButtonHover(true)}
      onMouseOut={() => setButtonHover(false)}
      style={{
        backgroundColor: "transparent",
        borderRadius: ".7vw",
        width: 0.7 * algorithm.length + "vw",
        height: "3.5vh",
        border: isRunning
          ? ".2vw solid grey"
          : buttonHover
          ? ".2vw solid " + terceryColor
          : ".2vw solid " + secondaryColor,
        color: isRunning ? "grey" : buttonHover ? terceryColor : secondaryColor,
        fontSize: "0.7vw",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      {algorithm}
    </button>
  );
}
