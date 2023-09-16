import React, { Component } from "react";
import logo from "./../img/model.jpg";
import glass1 from "./../img/g1.jpg";
import glass2 from "./../img/g2.jpg";
import glass3 from "./../img/g3.jpg";
import glass4 from "./../img/g4.jpg";
import glass5 from "./../img/g5.jpg";
import glass6 from "./../img/g6.jpg";
import glass7 from "./../img/g7.jpg";
import glass8 from "./../img/g8.jpg";
import glass9 from "./../img/g9.jpg";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGlass: null,
    };
  }

  handleGlassClick(selectedGlass) {
    this.setState({ selectedGlass });
  }

  render() {
    const glassFrameStyle = {
      backgroundColor: "transparent",
    };
    const glassStyle = {
      position: "absolute",
      width: "8%",
      top: "110px",
      left: "1170px",
      backgroundColor: "transparent",
    };
    const style = {
      width: "90%",
      height: "100px",
      backgroundColor: "transparent",
    };
    const womanImageStyle = {
      position: "relative",
    };
    const selectedGlassStyle = {
      width: "20%",
      position: "absolute",
      top: "120px",
      left: "760px",
    };

    return (
      <div className="container">
        <div style={womanImageStyle}>
          <img src={logo} />
          <img src={logo} />
          {this.state.selectedGlass && (
            <img
              src={this.state.selectedGlass}
              alt="Selected Glass"
              style={selectedGlassStyle}
            />
          )}
        </div>
        <div style={glassFrameStyle}>
          <img src={glass1} alt="Glass 1" style={glassStyle} />
        </div>
        <div
          className="container"
          style={{
            border: "2px solid red ",
            margin: "0 auto ",
            backgroundColor: "white",
            padding: "40px",
          }}
        >
          <div className="row">
            <div className="col-2">
              <img
                src={glass1}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass1)}
              />
            </div>
            <div className="col-2">
              <img
                src={glass2}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass2)}
              />
            </div>
            <div className="col-2">
              <img
                src={glass3}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass3)}
              />
            </div>
            <div className="col-2">
              <img
                src={glass4}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass4)}
              />
            </div>
            <div className="col-2">
              <img
                src={glass5}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass5)}
              />
            </div>
            <div className="col-2">
              <img
                src={glass6}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass6)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img
                src={glass7}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass7)}
              />
            </div>
            <div className="col-2">
              <img
                src={glass8}
                alt="Glass 1"
                git
                style={style}
                onClick={() => this.handleGlassClick(glass8)}
              />
            </div>
            <div className="col-2">
              <img
                src={glass9}
                alt="Glass 1"
                style={style}
                onClick={() => this.handleGlassClick(glass9)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
