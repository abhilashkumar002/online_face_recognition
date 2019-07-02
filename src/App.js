import React from "react";
//import Particles from "react-particles-js";
import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import InputForm from "./component/InputFiled/InputForm";
import FaceRecognition from "./component/Image/Image";
import SignIn from "./component/Singing/SignIn";


// const param = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 1
//       }
//     },
//     number: {
//       value: 100,
//       density: {
//         enable: true,
//         value_area: 800
//       },
//       color: {
//         value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 0,
//           color: "#b6b2b2"
//         }
//       }
//     }
//   }
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      faceData: "",
      signedStatus: "signedOut",
      user: {
        id : '',
        name : '',
        email : '',
        entries : 0,
        joined: ''
      }
    };
  }

  componentDidMount(){
    console.log("did mount")
     fetch('http://localhost:4444/')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(err => console.log(err))
  }

  updateUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
    console.log(this.state)
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

  changeSignedStatus = value => {
    this.setState({
      signedStatus: value
    });
  };

  setFaceState = data => {
    this.setState({ faceData: data });
  };

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onFormSubmit = event => {
    this.setState({ imageUrl: this.state.input });
    fetch('http://localhost:4444/imageAnalysis',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            url: this.state.input
          })
        })
        .then(response => response.json())
    // app.models
    //   .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        fetch('http://localhost:4444/image',{
          method: 'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(data => {
          this.setState({
            user:{
              ...this.state.user,
              entries: data
            } 
          })
        })
        this.setFaceState(this.calculateFacePosition(response))
        console.log(this.state)
      })
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
            updateUser={this.updateUser}
            changeSignedStatus={this.changeSignedStatus}
            signedStatus={this.state.signedStatus}
          />
        )}
        {(this.state.signedStatus === "register") && (
          <SignIn
            updateUser={this.updateUser}
            changeSignedStatus={this.changeSignedStatus}
            signedStatus={this.state.signedStatus}
          />
        )}
        {this.state.signedStatus === "signedIn" && (
          <>
            <InputForm
              onInputChange={this.onInputChange}
              onFormSubmit={this.onFormSubmit}
              userData = {this.state}
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
