import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="background-container">
        <div className="step-indicator-container">
          <p className="step-indicator-circle">1</p>
          <p className="step-indicator-circle">2</p>
          <p className="step-indicator-circle">3</p>
          <p className="step-indicator-circle">4</p>
        </div>

        <div className="personal-info-container">
          <h1>Personal info</h1>
          <p>Please provide your name, email, address, and phone number.</p>

          <form className="personal-info-form">
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="eg. Stephen king"
              required
            ></input>

            <label>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="eg. stephenking@lorem.com"
              required
            ></input>

            <label>Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="eg. +1 234 567 890"
              required
            ></input>
          </form>
        </div> {/* personal-info-container end */}
      </div> {/* background-container end */}
    </>
  );
}

export default App;
