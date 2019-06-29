import React, { Component } from "react";
import { SingInDiv } from "./SigningStyles";
var regex = require('regex-email');

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      confirmPassword: "",
      signUpName: ""
    };
  }

  saveEmail = e => {
    this.setState({
      signInEmail: e.target.value
    });
  };

  savePassword = e => {
    this.setState({
      signInPassword: e.target.value
    });
  };

  saveConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };

  saveName = e => {
    this.setState({
      signUpName: e.target.value
    });
  };

  signup = e => {
    console.log(e.target.innerText)
    if (e.target.innerText === "Sign In") {
      fetch("http://localhost:4444/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.props.updateUser(data);
            this.props.changeSignedStatus("signedIn");
          } else {
            alert("Wrong email or password");
          }
        });
    } else if (e.target.innerText === "Register") {
      const {
        signInEmail,
        signInPassword,
        signUpName,
        confirmPassword
      } = this.state;
      
      if(regex.test(signInEmail)
      && signInPassword !== ''
      && signUpName !== ''
      && signInPassword === confirmPassword
        ) {
        fetch("http://localhost:4444/register", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: signInEmail,
            password: signInPassword,
            name: signUpName
          })
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.props.updateUser(data);
            this.props.changeSignedStatus("signedIn"); 
          });
      }
      else{
        alert('Plese fill the form correctly')
      }
    }
  };

  render() {
    return (
      <SingInDiv>
        <p>Sign In</p>
        <input
          type="email"
          onChange={this.saveEmail}
          name="signInEmail"
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={this.savePassword}
          name="signInPassword"
          placeholder="Password"
          required
        />
        {this.props.signedStatus === "register" && (
          <>
            <input
              type="password"
              onChange={this.saveConfirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <input
              type="text"
              onChange={this.saveName}
              name="signUpName"
              placeholder="Full Name"
              required
            />
          </>
        )}
        <button type='submit' onClick={
          e => {
            e.preventDefault();
            this.signup(e);
          }
        } >
          {this.props.signedStatus === "register" ? "Register" : "Sign In"}
        </button>
      </SingInDiv>
    );
  }
}
