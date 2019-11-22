import React, { Component } from "react";
import Calendar from "react-calendar";
import "./Scheduled.css";

class Calenda extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <Calendar
          className="calender"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Calenda;
