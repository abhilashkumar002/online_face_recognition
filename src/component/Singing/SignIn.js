import React, { Component } from "react";
import { SingInDiv } from "./SigningStyles";
var regex = require("regex-email");

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      confirmPassword: "",
      signUpName: "",
      loading: false
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
    this.setState({
      loading: true
    })
    console.log(this.state);
    if (e.target.innerText === "Sign In") {
      //console.log(this.state);
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
          //console.log(data)
          if (data.id) {
            this.props.updateUser(data);
            this.props.changeSignedStatus("signedIn");
            this.setState({ loading: false })
          } else {
            alert(data);
            this.setState({ loading: false })
          }
        });
    } else if (e.target.innerText === "Register") {
      const {
        signInEmail,
        signInPassword,
        signUpName,
        confirmPassword
      } = this.state;

      if (
        regex.test(signInEmail) &&
        signInPassword !== "" &&
        signUpName !== "" &&
        signInPassword === confirmPassword
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
            //console.log(data);
            if (data.id) {
              this.props.updateUser(data);
              this.props.changeSignedStatus("signedIn");
              this.setState({ loading: false })
            } else {
              alert(data);
              this.setState({ loading: false })
            }
          });
      } else {
        alert("Plese fill the form correctly");
        this.setState({ loading: false })
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
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.signup(e);
          }}
        >
          {this.props.signedStatus === "register"
            ? this.state.loading
              ? "Loading..."
              : "Register"
            : this.state.loading
            ? "Loading..."
            : "Sign In"}
        </button>
      </SingInDiv>
    );
  }
}
