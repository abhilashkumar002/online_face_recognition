import React, { Component } from 'react';
import {InputField, Input} from './InputFieldStyle';

const theme = {
  main : "white",
};

export default class InputForm extends Component {
  mousedown = (event) => {
    document.getElementById("submitbutton").style.transform = "scale(0.95)";
  }
  mouseup = event => {
    document.getElementById("submitbutton").style.transform = "scale(1)";
    this.props.onFormSubmit();
  }
  render() {
    return (
      <InputField>
        <Input theme ={theme}>
          <div style={{color:"white", fontSize: 2+"rem",padding: 1+"rem", marginBottom: 1+"rem"}}>Enter an image link below.</div>
          <input id="inputLink" type="text" onChange={this.props.onInputChange}></input>
          <button id="submitbutton" onMouseDown = {this.mousedown} onMouseUp = {this.mouseup}>Analyse</button>
        </Input>        
      </InputField>
    )
  }
}
