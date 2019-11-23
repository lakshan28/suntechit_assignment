import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import "./Visionary.css";

class Visionary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="visionary">
        <div className="badge">
          <p className="badge-title">Badge</p>
          <p className="badge-visionary">Visionary</p>
          <p className="badge-rating">Client Rating</p>
        </div>
        <div className="badge-stars">
          <FaStar className="badge-star-one" />
          <FaStar className="badge-star-one" />
          <FaStar className="badge-star-one" />
          <FaStar className="badge-star-one" />
          <FaStar className="badge-star-one" />
        </div>
        <div className="badge-daily">
          <p className="badge-daily-task">Daily Tasks</p>
          <p className="badge-daily-number">7/10</p>
        </div>
      </div>
    );
  }
}

export default Visionary;
