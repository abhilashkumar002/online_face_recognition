import React, { Component } from "react";
import { Nav, Logo, Title, Button } from "./NavigationStyle";
import icon from "./brainicon.png";

export default class Navigation extends Component {
  render() {
    if(this.props.signedStatus === "signedIn"){
      return(
        <Nav>
        <Logo src={icon} />
        <Title>Face recognition</Title>
        <Button>
          <button onClick={this.props.changeSignedStatus} value="signedOut">SignOut</button>
        </Button>
      </Nav>
      )
    }
    else{
      return (
        <Nav>
        <Logo src={icon} />
        <Title>Face recognition</Title>
        <Button>
          <button onClick={this.props.changeSignedStatus} value="register">Register</button>
        </Button>
      </Nav>
    );
  }
}
}
