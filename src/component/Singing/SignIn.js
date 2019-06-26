import React, { Component } from 'react';
import {SingInDiv} from './SigningStyles';

export default class SignIn extends Component {
  render() {
    return (
      <SingInDiv>
        <p>Sign In</p>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button onClick={this.props.signInState}>Sign In</button>
      </SingInDiv>
    )
  }
}
