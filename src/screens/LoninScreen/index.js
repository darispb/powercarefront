import React, { Component } from "react";
import Powercarepic from "../../img/Powerpuff.png";
import "./Login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import {Link} from 'react-router-dom'

export class Login extends Component {

    
  render() {
    function Card({ children, title, direction }) {
        return (
          <Link className="card-home-screen" to={direction}>
            {children}
            <p>{title}</p>
          </Link>
        );
      }
    return (
      <div className="login">
      <div className="container fixed-container mb-3">
        <div className="head-register">
          <img src={Powercarepic} alt="Powercare" className="Powercarepic" />
          <h2>Power Care Clinic </h2>
        </div>
        <div className="login-button">
          <from action="">
            <center>
              <div className="mb-3-login">
                <label for="doctor-name"> Email : </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3-login">
                <label for="doctor-name"> Password : </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <button className="btn btn-sc"> Login </button>
            </center>
          </from>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
