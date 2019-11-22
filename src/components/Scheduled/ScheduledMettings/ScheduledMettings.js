import React, { Component } from "react";
import "./ScheduledMettings.css";

class ScheduledMettings extends Component {
  render() {
    return (
      <div className="scheduled-meeting">
        <div className="scheduled-main-title">
          <p className="scheduled-title">Scheduled Meetings</p>
        </div>
        <div className="scheduled-content">
          <p className="scheduled-time">08.00 UTC</p>
          <p className="scheduled-city">Melbourne</p>
          <p className="scheduled-grop">Team</p>
        </div>
        <div className="scheduled-content">
          <p className="scheduled-time">10.00 UTC</p>
          <p className="scheduled-city">Perth</p>
          <p className="scheduled-grop">Kent Chang</p>
        </div>
        <div className="scheduled-content">
          <p className="scheduled-time">09.00 UTC</p>
          <p className="scheduled-city">Adelaide</p>
          <p className="scheduled-grop">Team</p>
        </div>
        <div className="scheduled-content">
          <p className="scheduled-time">01.00 UTC</p>
          <p className="scheduled-city">Sydney</p>
          <p className="scheduled-grop">Nicola Anthoney</p>
        </div>
        <div className="scheduled-content">
          <p className="scheduled-time">04.00 UTC</p>
          <p className="scheduled-city">Brisbane</p>
          <p className="scheduled-grop">Teddy Cooper</p>
        </div>
      </div>
    );
  }
}

export default ScheduledMettings;
