import React, { Component } from 'react';
import {InputField, Input} from './InputFieldStyle';

const theme = {
  main : "white",
};

export default class InputForm extends Component {
  render() {
    return (
      <InputField>
        <Input theme ={theme}>
          <div>Enter an image link below.</div>
          <input id="inputLink" type="text" onChange={this.props.onInputChange}></input>
          <button onClick={this.props.onFormSubmit}>Analyse</button>
        </Input>        
      </InputField>
    )
  }
}
