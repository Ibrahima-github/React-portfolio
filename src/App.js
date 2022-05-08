import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Particles from "react-particles-js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };

    
  }
  
  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  
  render() {
    return (
      
      <div className="App">
        <Particles
          params={{
            particles:{
              number:{
                value:70,
                density:{
                  enable: true,
                  value_area:1000
                }
              },
              shape:{
                type: "circle",
                stroke:{
                  width: 6,
                  color: "#0000FF"
                }
              }
            }
          }}
        />
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
         {/* <Portfolio data={this.state.resumeData.portfolio} />  */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
      
      
    );
    
  }
  
}

export default App;
