import React, { Component } from "react";
import "./Team.css";

class Team extends Component {
  render() {
    return (
      <div className="main-team-outline">
        <div className="team">
          <p className="team-title">Team</p>
        </div>
        <div>
          <div className="main-team">
            <img
              className="team-image"
              src={require("../../img/1 (17).jpg")}
              alt="profile"
            />

            <p className="team-person">David Lee</p>

            <p className="team-person-message">Send you a message</p>
          </div>
        </div>
        <div className="horizotal-line-team"></div>
        <div>
          <div className="main-team">
            <img
              className="team-image"
              src={require("../../img/1 (17).jpg")}
              alt="profile"
            />

            <p className="team-person">Alex Johanson</p>

            <p className="team-person-message">Send you a message</p>
          </div>
        </div>
        <div className="horizotal-line-team"></div>
        <div>
          <div className="main-team">
            <img
              className="team-image"
              src={require("../../img/1 (17).jpg")}
              alt="profile"
            />

            <p className="team-person">Jonathan Chen</p>

            <p className="team-person-message">Send you mail</p>
          </div>
        </div>

        <div className="horizotal-line-team"></div>
        <div>
          <div className="main-team">
            <img
              className="team-image"
              src={require("../../img/1 (17).jpg")}
              alt="profile"
            />

            <p className="team-person">Robert Grant</p>

            <p className="team-person-message">Send you a message</p>
          </div>
        </div>
        <div className="horizotal-line-team"></div>
        <div className="horizotal-line-team"></div>
        <div>
          <div className="main-team">
            <img
              className="team-image"
              src={require("../../img/1 (17).jpg")}
              alt="profile"
            />

            <p className="team-person">Robert Grant</p>

            <p className="team-person-message">Send you mail</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
