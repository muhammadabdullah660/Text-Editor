import React, { useState } from "react";
import PropTypes from "prop-types"; //impt

export default function TextForm(props) {
  const countOcc = (string, subString) => {
    let count = string.split(subString).length - 1;
    return count;
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleExtraSpace = () => {
    let newText = txt.split(/[ ]+/);
    setTxt(newText.join(" "));
    props.showAlert("Extra Spaces removed", "success");
  };
  const handleUpCaseClick = () => {
    //console.log("UpperCase was clicked" + txt);
    let newText = txt.toUpperCase();
    setTxt(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoCaseClick = () => {
    let newText = txt.toLowerCase();
    setTxt(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleFindClick = () => {
    setCount(countOcc(txt, findWord));
    console.log(countOcc(txt, findWord));
  };
  const handleClearClick = () => {
    let newText = "";
    setTxt(newText);
    props.showAlert("Text Cleared", "success");
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
            <h4>{props.heading}</h4>
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#424445",
                color: props.mode === "light" ? "#424445" : "white",
              }}
              className="form-control"
              id="myBox"
              rows="5"
              value={txt}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpCaseClick}
            disabled={txt.length === 0}
          >
            Convert to Uppercase
          </button>{" "}
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoCaseClick}
            disabled={txt.length === 0}
          >
            Convert to Lowercase
          </button>{" "}
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
            disabled={txt.length === 0}
          >
            Clear Text
          </button>{" "}
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={txt.length === 0}
            onClick={handleCopy}
          >
            Copy Text
          </button>{" "}
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={txt.length === 0}
            onClick={handleExtraSpace}
          >
            Remove extra spaces
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
          Total time to read the text :{" "}
          {(txt.match(/\S+/g) || []).length * 0.008} minutes
        </h4>{" "}
        <br />
        {/* Simple preview of text */}
        <h3>Text Preview</h3>
        <p>{txt.length === 0 ? "Nothing to Preview" : txt}</p>
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
