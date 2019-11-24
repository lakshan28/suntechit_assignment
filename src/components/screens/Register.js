import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Register.css";
import { GiHummingbird } from "react-icons/gi";
import TextField from "../TextField/TextField";

function Register() {
  return (
    <div className="main-register">
      <div className="register-content">
        <div className="welcome-back">
          <div className="harmonee harmoneeeee  ">
            <div className="harmonee-icon">
              <GiHummingbird className="harmonee-btn-icon" />
              <h2 className="harmonee-text">harmonee</h2>
            </div>
          </div>
          <p className="welcome-back-title">Welcome Back</p>
          <p className="keep-title">
            To keep connected with us please sign in with your personal details.
          </p>
          <button className="login-button login-button-register">
            <Link className="nav-lin register-link" to="/login">
              Login
            </Link>
          </button>
          <p className="register-link-bottom">www.harmonee.com.au</p>
        </div>
        <div className="register-text-area">
          <p className="register-with-harmonee">Register with Harmonee</p>
          <div className="text-feild-group2">
            <TextField placeholder="First Name" name="First Name" type="text" />
            <TextField placeholder="Surname" name="Surname" type="text" />
            <TextField
              placeholder="Company Name"
              name="Company Name"
              type="text"
            />
            <TextField placeholder="Email" name="email" type="email" />
            <TextField placeholder="Password" name="password" type="password" />
          </div>

          <label className="todo-container">
            <p className="input-title input-title2">
              I agree to terms and conditions and privacy policy.
            </p>

            <input type="checkbox" />
            <span className="checkmark checkmark2"></span>
          </label>
          <button className="register-button  register-button2">
            <Link className="nav-lin register-link" to="/">
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
