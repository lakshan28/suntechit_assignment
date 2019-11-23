import React, { Component } from "react";
import { FaMedal } from "react-icons/fa";
import "./Congrats.css";

class Congrats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="congrats-imge">
        <div className="main-medal">
          <FaMedal className="medal" />
        </div>
        <h1 className="congrats-title">Congratulations Nethan,</h1>
        <p className="congrats-content">
          You have done 75.3% more tasks today. Check your new badge in your
          profile.
        </p>
      </div>
    );
  }
}

export default Congrats;
