import React, { Component } from "react";
import "./imagestyle.css";

export default class FaceRecognition extends Component {
  render() {
    const { topRow, bottomRow, rightCol, leftCol } = this.props.box;
    if (this.props.imageUrl === "") {
      return null;
    }
    return (
      <>
        <div className="imagecontainer">
            <img id="outputimage" alt="Invalid address" src={this.props.imageUrl} style={{width: 500 + "px", height: "auto"}}/>
            <div className="boxcontainer" style={{ top: topRow, bottom: bottomRow, right: rightCol, left: leftCol }} />
        </div>
      </>
    );
  }
}
