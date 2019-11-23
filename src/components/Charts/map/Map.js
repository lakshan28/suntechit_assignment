import React, { Component } from "react";
import "rc-progress/assets/index.css";
import { Line, Circle } from "rc-progress";
import "./Map.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import ProgressBar from "react-bootstrap/Button";

class Map extends Component {
  render() {
    return (
      <div className="main-map">
        <div className="world-map">
          <img
            src={require("../../img/World_map_blank_without_borders.svg")}
            className="map-image"
            alt="map"
          />
        </div>
        <div className="progress-bar">
          <div className="progress-conent">
            <div className="progress-main-title">
              <p className="progress-title">Russia </p>
              <p className="progress-title">$829,910 of $1M</p>
            </div>

            <Line percent={80} strokeWidth="2" strokeColor="#7467F0 " />
          </div>
          <div className="progress-conent">
            <div className="progress-main-title">
              <p className="progress-title">Russia </p>
              <p className="progress-title">$829,910 of $1M</p>
            </div>

            <Line percent={50} strokeWidth="2" strokeColor="#02F0C7 " />
          </div>

          <div className="progress-conent">
            <div className="progress-main-title">
              <p className="progress-title">Russia </p>
              <p className="progress-title">$829,910 of $1M</p>
            </div>

            <Line percent={30} strokeWidth="2" strokeColor="#5FDA72 " />
          </div>

          <div className="progress-conent">
            <div className="progress-main-title">
              <p className="progress-title">Russia </p>
              <p className="progress-title">$829,910 of $1M</p>
            </div>

            <Line percent={75} strokeWidth="2" strokeColor="#ECA660 " />
          </div>

          <div className="progress-conent">
            <div className="progress-main-title">
              <p className="progress-title">Russia </p>
              <p className="progress-title">$829,910 of $1M</p>
            </div>

            <Line percent={45} strokeWidth="2" strokeColor="#FE777E " />
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
