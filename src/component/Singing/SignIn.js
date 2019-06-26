import React, { Component } from 'react';
import {SingInDiv} from './SigningStyles';

export default class SignIn extends Component {
  render() {
    return (
      <SingInDiv>
        <p>Sign In</p>
        <input type="email" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Password"/>
        {
          this.props.signedStatus === "register" &&
          <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
        }
        <button onClick={this.props.changeSignedStatus} value="signedIn" >
          {
            this.props.signedStatus === "register"
            ? "Register"
            : "Sign In"
          }
        </button>
      </SingInDiv>
    )
  }
}
