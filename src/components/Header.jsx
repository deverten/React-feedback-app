import React from "react";

export default function Header({ title, bgColor, col}) {

    const headerStyle = {
        backgroundColor: bgColor,
        color: col
    }
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Header UI",
  bgColor: 'rbg(0,0,0,0.4)',
  col: '#ff6a95'
};

// Header.propTypes = {
//     title: PropTypes.string
// }
