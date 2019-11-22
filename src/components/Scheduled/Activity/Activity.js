import React, { Component } from "react";
import "./Activity.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

class Activity extends Component {
  render() {
    return (
      <div className="activity">
        <div className="activity-main">
          <p className="activity-main-title">Team</p>
        </div>
        <div className="activiy-coloum">
          <div className="activity-icon">
            <IoMdAddCircleOutline className="indigo-reg-check-circle" />
            <div className="vertical-line"></div>
            <AiOutlineExclamationCircle className="indigo-reg-check-circle" />
            <div className="vertical-line"></div>
            <FaRegCheckCircle className="indigo-reg-check-circle" />
            <div className="vertical-line"></div>
            <FaRegCheckCircle className="indigo-reg-check-circle" />
            <div className="vertical-line"></div>
            <IoMdAddCircleOutline className="indigo-reg-check-circle" />
            <div className="vertical-line"></div>
            <IoMdAddCircleOutline className="indigo-reg-check-circle" />
          </div>
          <div className="activity-details-main">
            <div className="activity-conten">
              <p className="main-activity">Activity Timeline</p>
              <p className="activity-detils">
                Bonbon macaroom jeely beans gummi bears jelly lollipop apple
              </p>
              <p className="activity-time"> 25 mins ago</p>
            </div>
            <div className="activity-content">
              <p className="main-activity">Email Newsletter</p>
              <p className="activity-detils">
                Cupcake gummi bears soufflé caramels candy
              </p>
              <p className="activity-time"> 15 days ago</p>
            </div>
            <div className="activity-content">
              <p className="main-activity">Plan Webinar</p>
              <p className="activity-detils">
                Candy ice cream cake. Halvah gummi bears
              </p>
              <p className="activity-time"> 20 days ago</p>
            </div>
            <div className="activity-content">
              <p className="main-activity">Launch Website</p>
              <p className="activity-detils">
                Candy ice cream cake. Halvah gummi bears Cupcake gummi
              </p>
              <p className="activity-time"> 25 mins ago</p>
            </div>
            <div className="activity-content">
              <p className="main-activity">Marketing</p>
              <p className="activity-detils">28 days ago</p>
              <p className="activity-time"> 25 mins ago</p>
            </div>
            <div className="activity-content">
              <p className="main-activity">Activity Timeline</p>
              <p className="activity-detils">
                Bonbon macaroom jeely beans gummi bears jelly lollipop apple
              </p>
              <p className="activity-time"> 25 mins ago</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Activity;
