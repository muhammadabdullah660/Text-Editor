import React, { useState } from "react";
import PropTypes from "prop-types"; //impt
const countOcc = (string, subString) => {
  let count = string.split(subString).length - 1;
  return count;
};
export default function TextForm(props) {
  const handleUpCaseClick = () => {
    //console.log("UpperCase was clicked" + txt);
    let newText = txt.toUpperCase();
    setTxt(newText);
  };
  const handleLoCaseClick = () => {
    let newText = txt.toLowerCase();
    setTxt(newText);
  };
  const handleFindClick = () => {
    setCount(countOcc(txt, findWord));
    console.log(countOcc(txt, findWord));
  };
  const handleClearClick = () => {
    let newText = "";
    setTxt(newText);
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setTxt(event.target.value);
  };
  const handleOnWordChange = (event) => {
    setfindWord(event.target.value);
  };
  const [findWord, setfindWord] = useState("Enter your text here");
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("States are here");
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
          </button>{" "}
          <button className="btn btn-primary" onClick={handleClearClick}>
            Clear Text
          </button>
        </form>
      </div>
      <div className="container my-3">
        {/* Present text as number of words and characters */}
        <h1>Your text summary</h1>
        <h4>
          {(txt.match(/\S+/g) || []).length} words, {txt.length} characters
        </h4>
        {/* Tells time required to read depending on number of words */}
        <h4>
          Total time to read the text : {txt.split(" ").length * 0.008 * 60}{" "}
          minutes
        </h4>{" "}
        <br />
        {/* Simple preview of text */}
        <h3>Text Preview</h3>
        <p>{txt}</p>
        {/* Count number of occurences of a word */}
        <h4>Enter a word to find</h4>
        <input
          type="text"
          value={findWord}
          onChange={handleOnWordChange}
        />{" "}
        <button className="btn btn-primary" onClick={handleFindClick}>
          Find
        </button>
        <h4>{count} occurences</h4>
        {/* {can be done directly by writing expression instead of event handling with button} */}
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
