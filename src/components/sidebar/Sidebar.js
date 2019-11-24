import React, { Component } from "react";
import {
  MdReorder,
  MdDashboard,
  MdAssignmentInd,
  MdAccessAlarms,
  MdFileUpload,
  MdChatBubbleOutline
} from "react-icons/md";
import { IoIosPersonAdd, IoIosTrendingUp } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { AiOutlineMail, AiOutlinePoweroff } from "react-icons/ai";
import { FaFileAlt, FaRegMap, FaSlidersH } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarr: true
    };
  }

  MdReorderr = () => {
    this.setState({
      sidebarr: !this.state.sidebarr
    });
    console.log(this.state.sidebarr);
  };

  render() {
    const loka = (
      <div className="short-side-bar">
        <div className="three-line-icon-dev">
          <MdReorder onClick={this.MdReorderr} className="three-line-icon" />
        </div>
        <MdDashboard className="short-side-bar-icon-md-dash" />
        <IoIosPersonAdd className="short-side-bar-icon-io-ios" />
        <MdAssignmentInd className="short-side-bar-icon-md-assi" />
        <MdAccessAlarms className="short-side-bar-icon-md-alam " />
        <GoLightBulb className="short-side-bar-icon-go-lig" />
        <IoIosTrendingUp className="short-side-bar-icon-go-lig" />
        <FaFileAlt className="short-side-bar-icon-fa-file" />
        <MdFileUpload className="short-side-bar-icon-fa-file" />
        <AiOutlineMail className="short-side-bar-icon-ai-out" />
        <MdChatBubbleOutline className="short-side-bar-icon-md-chat" />
        <FaRegMap className="short-side-bar-icon-fa-reg" />
        <FaSlidersH className="short-side-bar-icon-fa-slide" />
        <AiOutlinePoweroff className="short-side-bar-icon-ai-outline" />
      </div>
    );
    const loka2 = (
      <div className="first-row">
        <div className="three-line-icon-dev">
          <MdReorder onClick={this.MdReorderr} className="three-line-icon" />
        </div>
        <div className="profile-image">
          <img
            className="image"
            src={require("../img/profile1.jpg")}
            alt="Logo"
          />
        </div>
        <div className="profile-description">
          <p className="profile-name ">Nethan Taylor</p>
          <p className="profile-status">Senior Financial Adviser</p>
        </div>
        {
          //horizontal icon
        }
        <div className="horizotal-line"></div>
        <div className="topics">
          <p className="topic">GENERAL</p>
        </div>
        <div>
          <div>
            <button className="nav-button">
              <MdDashboard className="button-icon" />
              <p className="title">Dashboarddd</p>
            </button>
          </div>
          <div>
            <button className="nav-button">
              <IoIosPersonAdd className="button-icon" />
              <p className="title">Clients</p>
            </button>
          </div>
          <div>
            <button className="nav-button" style={{ marginBottom: 50 }}>
              <MdAssignmentInd className="button-icon" />
              <p className="title">Leads</p>
            </button>
          </div>
        </div>
        {
          // **********Element/**************************************************
        }

        <div className="topics">
          <p className="topic">ELEMENTS</p>
        </div>
        <div>
          <div>
            <button className="nav-button">
              <MdAccessAlarms className="button-icon" />
              <p className="title">Tasks</p>
            </button>
          </div>
          <div>
            <button className="nav-button">
              <GoLightBulb className="button-icon" />
              <p className="title">Insights</p>
            </button>
          </div>
          <div>
            <button className="nav-button">
              <IoIosTrendingUp className="button-icon" />
              <p className="title">Modeling</p>
            </button>
          </div>
          <div>
            <button className="nav-button">
              <FaFileAlt className="button-icon" />
              <p className="title">Templates</p>
            </button>
          </div>
          <div>
            <button className="nav-button" style={{ marginBottom: 50 }}>
              <MdFileUpload className="button-icon" />
              <p className="title">Uploads</p>
            </button>
          </div>
        </div>
        {
          // **********NOTIFICATION/**************************************************
        }
        <div className="topics">
          <p className="topic">NOTIFICATION</p>
        </div>
        <div>
          <div>
            <button className="nav-button">
              <AiOutlineMail className="button-icon" />
              <p className="title">Email</p>
            </button>
          </div>
          <div>
            <button className="nav-button" style={{ marginBottom: 50 }}>
              <MdChatBubbleOutline className="button-icon" />
              <p className="title">Chat</p>
            </button>
          </div>
        </div>
        {
          //************************* */
        }
        {
          // **********EXTRAS/**************************************************
        }
        <div className="topics">
          <p className="topic">EXTRAS</p>
        </div>
        <div>
          <div>
            <button className="nav-button" style={{ marginBottom: 100 }}>
              <FaRegMap className="button-icon" />
              <p className="title">Maps</p>
            </button>
          </div>
          <div>
            <button className="nav-button" style={{ marginBottom: 100 }}>
              <FaSlidersH className="button-icon" />
              <p className="title">Settings</p>
            </button>
          </div>
        </div>
        {
          //************************* */
        }
        {
          //horizontal icon
        }
        <div className="horizotal-line"></div>

        <div className="button-icon-logout">
          <Link className="nav-lin register-link" to="/register">
            <button className="nav-button " style={{ marginBottom: 100 }}>
              <AiOutlinePoweroff className="button-icon " />
              <p className="title">Logout</p>
            </button>
          </Link>
        </div>
      </div>
    );
    return (
      <div className="sidebar-main">{this.state.sidebarr ? loka2 : loka}</div>
    );
  }
}

export default Sidebar;
