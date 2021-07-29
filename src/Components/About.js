import React, { Component } from "react";
import Fade from "react-reveal";
import profilepic from '../images/profilepic.jpeg';
import cv from '../documents/IbrahimaSall.pdf';

class About extends Component {
  onResumeClick(){
    window.open(cv);
  }
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    //const profilepic = "../images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
   // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Ibrahima SALL"
                style={{width:350, height:350}}
              />
            </div>
            <div className="nine columns main-col">
              <h2>A propos de moi</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      <br />
                      {zip}, {city} - {state}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <button onClick={this.onResumeClick} className="button">
                      Télécharger mon cv
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
