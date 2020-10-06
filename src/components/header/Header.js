import React from "react";
import "./Header.css";
import {Fade} from "react-reveal";

function Header() {
  return (
    <Fade top duration={1000} distance="20px">
    <div>
      <header className="header">
        <a href="" className="logo">
          <span className="logo-name">Michael Du</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li className="section">
            <a href="#skills">Skills</a>
          </li>
          <li className="section">
            <a href="#projects">Experience</a>
          </li>
          <li className="section">
            <a href="#opensource">Projects</a>
          </li>
          <li className="section">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </div>
    </Fade>
  );
}
export default Header;
