import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [modeStyle, setModeStyle] = useState("light");
  // const handleToggle = () => {
  //   if (modeStyle === "light") {
  //     setModeStyle("dark");
  //   } else {
  //     setModeStyle("light");
  //   }
  // };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <div
            className={`custom-control custom-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={props.toggleMode}
            />
            <label className="custom-control-label" htmlfor="customSwitch1">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: " About text here",
};
