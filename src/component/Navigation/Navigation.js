import React, { Component } from "react";
import { Nav, Logo, Title, Button } from "./NavigationStyle";
import icon from "./brainicon.png";

export default class Navigation extends Component {
  changeStatus = e => {
    this.props.changeSignedStatus(e.target.value);
  };

  render() {
    if (this.props.signedStatus === "signedIn") {
      return (
        <Nav>
          <Logo src={icon} />
          <Title>Face recognition</Title>
          <Button>
            <button onClick={this.changeStatus} value="signedOut">
              SignOut
            </button>
          </Button>
        </Nav>
      );
    } else if (this.props.signedStatus === "register") {
      return (
        <Nav>
          <Logo src={icon} />
          <Title>Face recognition</Title>
          <Button>
            <button onClick={this.changeStatus} value="signedOut">
              SignIn
            </button>
          </Button>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <Logo src={icon} />
          <Title>Face recognition</Title>
          <Button>
            <button onClick={this.changeStatus} value="register">
              Register
            </button>
          </Button>
        </Nav>
      );
    }
  }
}
