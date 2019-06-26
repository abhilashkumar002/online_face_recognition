import React from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import InputForm from "./component/InputFiled/InputForm";
import FaceRecognition from "./component/Image/Image";
import SignIn from "./component/Singing/SignIn";

const app = new Clarifai.App({
  apiKey: "7ac6314b53c34d25af019be048acd8f3"
});

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
      color: {
        value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#b6b2b2"
        }
      }
    }
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      faceData: "",
      signedStatus: "signedOut",
      invalidUrl: false
    };
  }

  calculateFacePosition = data => {
    const cdata =
      data.rawData.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("outputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: cdata.left_col * width,
      rightCol: width - cdata.right_col * width,
      topRow: cdata.top_row * height,
      bottomRow: height - cdata.bottom_row * height
    };
  };

  changeSignedStatus = e => {
    console.log(e.target.value);
    this.setState({
      signedStatus: e.target.value
    });
  };

  setFaceState = data => {
    console.log(data);
    this.setState({ faceData: data });
  };

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({
      input: event.target.value
    });
  };

  onFormSubmit = event => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.setFaceState(this.calculateFacePosition(response)))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Navigation
          changeSignedStatus={this.changeSignedStatus}
          signedStatus={this.state.signedStatus}
        />
        {(this.state.signedStatus === "signedOut") && (
          <SignIn
            changeSignedStatus={this.changeSignedStatus}
            signedStatus={this.state.signedStatus}
          />
        )}
        {(this.state.signedStatus === "register") && (
          <SignIn
            changeSignedStatus={this.changeSignedStatus}
            signedStatus={this.state.signedStatus}
          />
        )}
        {this.state.signedStatus === "signedIn" && (
          <>
            <InputForm
              onInputChange={this.onInputChange}
              onFormSubmit={this.onFormSubmit}
            />
            <FaceRecognition
              box={this.state.faceData}
              imageUrl={this.state.input}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
