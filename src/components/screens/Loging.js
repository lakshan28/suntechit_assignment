import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Loging.css";
import { GiHummingbird } from "react-icons/gi";

function Loging() {
  return (
    <Router>
      <div class="container">
        <div class="row">
          <div class="col-8 welcome">
            <div className="harmonee">
              <div className="harmonee-icon">
                <GiHummingbird className="harmonee-btn-icon" />
                <h2 className="harmonee-text">harmonee</h2>
              </div>
            </div>

            <h1 className="welcome-text">Welcome</h1>
            <p className="register-text">Register for a new account here</p>
            <div className="welcome-content">
              <p>
                Register for a new account here and let harmonee to automate
                your practice and get more done.{" "}
              </p>
              <p>
                An interactive digital engagement platform that integrates into
                ecosystem of operational, transactional and compliance activites{" "}
              </p>
              <p>
                delivered in a B2B2C business model, to advisors, para-planners
                and other advise service providers
              </p>
            </div>
            <button className="register-button">
              <Link className="nav-lin register-link" to="/register">
                Register
              </Link>
            </button>
            <div className="harmonee-link">
              <Link className="nav-lin register-link" to="/register">
                www.harmonee.com.au
              </Link>
            </div>
          </div>
          <div class="col-4 loging">One of three columns</div>
        </div>
      </div>
    </Router>
  );
}

export default Loging;
