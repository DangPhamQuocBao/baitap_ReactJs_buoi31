import React from "react";

export default function SelectedGlass({ selectedGlass }) {
  const selectedGlassStyle = {
    width: "20%",
    position: "absolute",
    top: "120px",
    left: "760px",
  };

  if (selectedGlass) {
    return (
      <img
        src={selectedGlass}
        alt="Selected Glass"
        style={selectedGlassStyle}
      />
    );
  } else {
    return null; // Ẩn nếu không có kính nào được chọn
  }
}
