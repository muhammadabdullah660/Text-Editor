import React, { useState } from "react";
import PropTypes from "prop-types"; //impt

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + txt);
    let newText = txt.toUpperCase();
    setTxt(newText);
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setTxt(event.target.value);
  };
  const [txt, setTxt] = useState("States are Here");
  return (
    <div className="form-group">
      <label htmlFor="myBox">{props.heading}</label>
      <textarea
        className="form-control"
        id="myBox"
        rows="5"
        value={txt}
        onChange={handleOnChange}
      ></textarea>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
TextForm.defaultProps = {
  heading: "Default text",
};
