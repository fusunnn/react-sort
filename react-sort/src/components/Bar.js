import React from "react";

export default function Bar({
  index,
  numOfElements,
  value,
  targets,
  color,
  isRunning,
}) {
  return (
    <div
      key={index}
      style={{
        width: 85 / numOfElements + "vw",
        height: (value / 1000) * 80 + "vh",
        backgroundColor: targets.includes(index) && isRunning ? "white" : color,
        marginLeft: ".3vw",
        transition: "0.2s",
      }}
    ></div>
  );
}
