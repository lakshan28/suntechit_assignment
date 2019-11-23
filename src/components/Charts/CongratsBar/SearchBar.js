import React, { Component } from "react";
import { GiHummingbird } from "react-icons/gi";
import { IoIosSearch, IoMdMail, IoMdNotifications } from "react-icons/io";

import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-bar-icon1">
        <div className="harmonee-icon ">
          <GiHummingbird className="harmonee-btn-icon" />
          <h2 className="harmonee-text">harmonee</h2>
        </div>
        <div className="search-bar-main16">
          <div className="search-bar-icon2">
            <IoIosSearch className="ioiosearch" />
          </div>
          <input
            className="search-bar12"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
        </div>
        <div className="main-mail-notification">
          <IoMdMail className="mail-notification" />
          <IoMdNotifications className="mail-notification" />
          <img
            className="serach-bar-image"
            src={require("../../img/background2.jpg")}
            alt="Logo"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
