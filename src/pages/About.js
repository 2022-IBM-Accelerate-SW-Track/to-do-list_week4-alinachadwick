import React, { Component } from "react";
import "./About.css";
import linkedin from "../assets/linkedin.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={linkedin}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alina Chadwick</div>
            <div className="brief_description">
              I am a '24 at Dartmouth studying Computer Science and Economics. A fun fact about me is that I'm terrified of fish!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
