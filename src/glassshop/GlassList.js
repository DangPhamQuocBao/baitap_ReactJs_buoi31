// GlassList.js
import React from "react";
import GlassItem from "./GlassItem";
import glass1 from "./../img/g1.jpg";
import glass2 from "./../img/g2.jpg";
import glass3 from "./../img/g3.jpg";
import glass4 from "./../img/g4.jpg";
import glass5 from "./../img/g5.jpg";
import glass6 from "./../img/g6.jpg";
import glass7 from "./../img/g7.jpg";
import glass8 from "./../img/g8.jpg";
import glass9 from "./../img/g9.jpg";

export default function GlassList({ onGlassClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <GlassItem image={glass1} onClick={() => onGlassClick(glass1)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass2} onClick={() => onGlassClick(glass2)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass3} onClick={() => onGlassClick(glass3)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass4} onClick={() => onGlassClick(glass4)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass5} onClick={() => onGlassClick(glass5)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass6} onClick={() => onGlassClick(glass6)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass7} onClick={() => onGlassClick(glass7)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass8} onClick={() => onGlassClick(glass8)} />
        </div>
        <div className="col-2">
          <GlassItem image={glass9} onClick={() => onGlassClick(glass9)} />
        </div>
      </div>
    </div>
  );
}
