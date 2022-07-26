import React, { useState } from "react";
import PropTypes from "prop-types"; //impt

export default function TextForm(props) {
  const handleUpCaseClick = () => {
    //console.log("UpperCase was clicked" + txt);
    let newText = txt.toUpperCase();
    setTxt(newText);
  };
  const handleLoCaseClick = () => {
    //console.log("UpperCase was clicked" + txt);
    let newText = txt.toLowerCase();
    setTxt(newText);
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setTxt(event.target.value);
  };
  const [txt, setTxt] = useState("States are Here");
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="myBox">{props.heading}</label>
            <textarea
              className="form-control"
              id="myBox"
              rows="5"
              value={txt}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpCaseClick}>
            Convert to Uppercase
          </button>{" "}
          <button className="btn btn-primary" onClick={handleLoCaseClick}>
            Convert to Lowercase
          </button>
        </form>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <h4>
          {txt.match(/\S+/g).length} words, {txt.length} characters
        </h4>
        <h4>
          Total time to read the text : {txt.split(" ").length * 0.008 * 60}{" "}
          minutes
        </h4>{" "}
        <br />
        <h3>Text Preview</h3>
        <p>{txt}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
TextForm.defaultProps = {
  heading: "Default text",
};
