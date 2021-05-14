import React, { Component } from "react";
import Powercarepic from "../../img/Powerpuff.png";
import "./AddOfficerScreen.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AddOfficerScreen() {
  return (
    <div className="content-body">
      <div className = "head-addofficer">
      <img src={Powercarepic} alt="Powercare" className="Powercarepic" />
      <h2>เพิ่มบุคคลากร</h2>
      <Link to ="/officerlistscreen"><button className="btn btn-officerlistscreen"> รายชื่อเจ้าหน้าที่</button></Link>
      
      </div>
      
      {/* Input Date */}
      <div className="addofficer-content">
        <center>
        <div className="mb-3">
          <label for="doctor-name"> First name : </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
          />
        </div>

        <div className="mb-3">
          <label for="doctor-name"> Last name : </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
          />

          </div>

          <div className="mb-3">
            <label for="doctor-name"> Email : </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label for="doctor-name"> Phone : </label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="mb-3">
            <label for="position"> Position : </label>
            <select id="position" className="form-control">
              <option disabled selected value>
                {" "}
                Select Position
              </option>
              <option className="option" value="Doctor">
                {" "}
                Doctor{" "}
              </option>
              <option className="option" value="Admin">

                Admin
              </option>
            </select>
          </div>
          <button className="btn btn-addofficer"> เพิ่มบุคคลากร</button>
          </center>
      </div>
    </div>
  );
}
