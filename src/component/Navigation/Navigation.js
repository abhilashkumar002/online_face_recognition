import React, { Component } from 'react';
import {Nav, Logo, Title, Button} from './NavigationStyle';
import icon from './brainicon.png';

export default class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Logo src={icon}/>
        <Title>Face recognition</Title>
        <Button><button>SignOut</button></Button>
      </Nav>
    )
  }
}
