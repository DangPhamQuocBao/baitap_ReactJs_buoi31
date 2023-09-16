// WomanImage.js
import React from "react";
import logo from "./../img/model.jpg";

export default function WomanImage() {
  const womanImageStyle = {
    position: "relative",
  };

  return (
    <div style={womanImageStyle}>
      <img src={logo} />
      <img src={logo} />
    </div>
  );
}
