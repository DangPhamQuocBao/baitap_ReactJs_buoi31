// GlassItem.js
import React from "react";

export default function GlassItem({ image, onClick }) {
  const style = {
    width: "90%",
    height: "100px",
    backgroundColor: "transparent",
    cursor: "pointer",
  };

  return <img src={image} alt="Glass" style={style} onClick={onClick} />;
}
