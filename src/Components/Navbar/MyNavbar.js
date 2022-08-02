import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MyNavbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              {props.menu1} <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.menu2}
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="d-flex">
          <div
            className="bg-danger rounded mx-2"
            style={{ height: "20px", width: "20px" }}
            onClick={() => {
              props.toggleMode("danger");
            }}
          ></div>{" "}
          <div
            className="bg-light rounded mx-2"
            style={{ height: "20px", width: "20px" }}
            onClick={() => {
              props.toggleMode("light");
            }}
          ></div>{" "}
          <div
            className="bg-dark rounded mx-2"
            style={{ height: "20px", width: "20px" }}
            onClick={() => {
              props.toggleMode("dark");
            }}
          ></div>
        </div>
        {/* Switch Button */}
        {/* <div className="custom-control custom-switch my-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={() => {
              props.toggleMode(null);
            }}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Toggle Mode
          </label>
        </div> */}
      </div>
    </nav>
  );
}
MyNavbar.propTypes = {
  title: PropTypes.string,
  menu1: PropTypes.string,
  menu2: PropTypes.string,
};
//if proptype is not valid...console shows error
// Specifies the default values for props:
MyNavbar.defaultProps = {
  title: "Main Title Goes here",
  menu1: "Default Menu 1",
  menu2: "Default Menu 2",
};
