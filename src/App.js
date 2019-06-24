import React from 'react';
import Particles from 'react-particles-js';
import './App.css'
import Navigation from './component/Navigation/Navigation';
import InputForm from './component/InputFiled/InputForm';
import FaceRecognition from './component/Image/Image';

const param = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 1
      }
    },
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      },
      "color": {
        "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#b6b2b2"
        }
      }
    }
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input : ''
    }
  }

  onInputChange = event => {
    console.log(event.target.value);
  }

  onFormSubmit = event => {
    console.log("clickk");
  }

  render(){
  return (<>
    <Particles params={param} className="particle" />
    <div className="App">
      <Navigation />
      <InputForm onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
      <FaceRecognition />
    </div>
    </>
  );}
}

export default App;
