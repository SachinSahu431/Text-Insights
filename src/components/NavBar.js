import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#">
            {props.title}
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Feedback
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li align="center">
                    <a
                      className="dropdown-item"
                      href="https://forms.gle/PiWMY4m51iE1fEPm8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Form
                    </a>
                  </li>
                  <li align="center">
                    <a
                      className="dropdown-item"
                      href="https://github.com/SachinSahu431/Text-Insights/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li> */}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                forhtml="flexSwitchCheckDefault"
              >
                DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "Set Title Here",
  aboutText: "Set About Text Here",
};
