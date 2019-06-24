import React, { Component } from 'react';
import './imagestyle.css';
import image1 from './brainicon.png';

export default class FaceRecognition extends Component {
  render() {
    return (
      <div className="imagecontainer">
        <img alt="images00000" src={image1}/>
      </div>
    )
  }
}
