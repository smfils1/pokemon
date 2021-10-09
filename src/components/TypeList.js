import React from "react";

let Pill = ({ name }) => (
  <span
    style={{
      padding: 12,
      borderRadius: 24,
      backgroundColor: "orange",
    }}
  >
    {name}
  </span>
);

const TypeList = ({ types }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
      }}
    >
      {types.map((type, index) => (
        <Pill key={index} name={type} />
      ))}
    </div>
  );
};
export default TypeList;
