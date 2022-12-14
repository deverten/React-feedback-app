import React from "react";

function Card({ children, reverse }) {
  //   return (
  //     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  //   )
  return (
    <div
      className="card"
      style={{
       backgroundColor: reverse ? "rgb(0,0,0,0.4)" : "#fff",
          color: reverse ? "#fff" : "#000"
      }}
    >{children}</div>
  );
}

export default Card;
