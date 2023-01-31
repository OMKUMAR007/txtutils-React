import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* TxtUTILS */}
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Features
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        {/*dark mode button */}
        <div
          className={`form-check form-switch  text-${
            props.mode === "light" ? "dark" : "light"
          } `}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.togglemode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Darkmode
          </label>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = {
  title: "Enter title",
};
