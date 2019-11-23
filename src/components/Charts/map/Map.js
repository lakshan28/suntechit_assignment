import React, { Component } from "react";
import "./Map.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

class Map extends Component {
  render() {
    return (
      <div className="main-map">
        <div>
          <img
            src={require("../../img/1 (23).jpg")}
            className="map-image"
            alt="map"
          />
        </div>
        <div className="progress-bar">
          <div class="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
