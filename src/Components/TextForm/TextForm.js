import React, { useState } from "react";
import PropTypes from "prop-types"; //impt

export default function TextForm(props) {
  const countOcc = (string, subString) => {
    let count = string.split(subString).length - 1;
    return count;
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(txt);
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
  const toggleBold = () => {
    let newText = document.getElementById("myBox");
    if (bold) {
      newText.style.fontWeight = "100";
      props.showAlert("Normal", "success");
      setbold(false);
    } else {
      newText.style.fontWeight = "900";
      props.showAlert("Bold", "success");
      setbold(true);
    }
  };
  const toggleItalic = () => {
    let newText = document.getElementById("myBox");
    if (italic) {
      newText.style.fontStyle = "normal";
      props.showAlert("Normal", "success");
      setitalic(false);
    } else {
      newText.style.fontStyle = "italic";
      props.showAlert("Italic", "success");
      setitalic(true);
    }
  };
  const toggleCenter = () => {
    let newText = document.getElementById("myBox");
    if (!center) {
      newText.style.textAlign = "center";
      props.showAlert("Center Aligned", "success");
      setcenter(true);
    } else {
      newText.style.textAlign = "left";
      props.showAlert("Default", "success");
      setcenter(false);
    }
  };
  const handleFindClick = () => {
    setCount(countOcc(txt, findWord));
    console.log(countOcc(txt, findWord));
  };
  const handleReplaceAllClick = () => {
    let find = new RegExp(tofind, "g");
    let myText = txt.replace(find, toreplace);
    setTxt(myText);
    props.showAlert(`Replaced ${toreplace} with ${tofind}`, "success");
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
  const handleOnWordRChange = (event) => {
    settofind(event.target.value);
  };
  const handleOnWordReplaceChange = (event) => {
    settoreplace(event.target.value);
  };
  const [findWord, setfindWord] = useState("");
  const [tofind, settofind] = useState("");
  const [toreplace, settoreplace] = useState("");
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("");
  const [bold, setbold] = useState(false);
  const [italic, setitalic] = useState(false);
  const [center, setcenter] = useState(false);
  const [left, setleft] = useState(false);
  const [right, setright] = useState(false);
  const [justify, setjustify] = useState(false);
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <h4>{props.heading}</h4>
            <div className="container">
              <div className="row">
                <div className="col-1 col-sm-4">
                  {/* Switch Button */}
                  <div className="custom-control custom-switch my-3 mx-2">
                    <input
                      type="checkbox"
                      className="custom-control-input "
                      id="customSwitch3"
                      onClick={toggleItalic}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch3"
                    >
                      Italic
                    </label>
                  </div>
                </div>
                <div className="col-1 col-sm-4">
                  {/* Switch Button */}
                  <div className="custom-control custom-switch my-3 mx-2">
                    <input
                      type="checkbox"
                      className="custom-control-input "
                      id="customSwitch2"
                      onClick={toggleBold}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch2"
                    >
                      Bold
                    </label>
                  </div>
                </div>
                <div className="col-1 col-sm-4">
                  <div className="custom-control custom-switch my-3 mx-2">
                    <input
                      type="checkbox"
                      className="custom-control-input "
                      id="customSwitch4"
                      onClick={toggleCenter}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch4"
                    >
                      Center Align
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#424445",
                color: props.mode === "light" ? "#424445" : "white",
              }}
              className="form-control"
              id="myBox"
              rows="5"
              value={txt}
              placeholder="Enter Your Text Here!"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpCaseClick}
            disabled={txt.length === 0}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoCaseClick}
            disabled={txt.length === 0}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
            disabled={txt.length === 0}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={txt.length === 0}
            onClick={handleCopy}
          >
            Copy Text
          </button>
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
          Total time to read the text :
          {/* "S" for white spaces..."+" for one or more */}
          {(txt.match(/\S+/g) || []).length * 0.008} minutes
        </h4>
        <br />
        {/* Simple preview of text */}
        <h3>Text Preview</h3>
        <p>{txt.length === 0 ? "Nothing to Preview" : txt}</p>
        {/* Count number of occurences of a word */}
        <h4>Enter a word to find</h4>
        <input
          type="text"
          value={findWord}
          placeholder="Find Something!"
          onChange={handleOnWordChange}
        />
        <button className="btn btn-primary" onClick={handleFindClick}>
          Find
        </button>
        <h4>{count} occurences</h4>
        {/* {can be done directly by writing expression instead of event handling with button} */}
        <h4>Find and Replace</h4>
        <h5>Find </h5>
        <input
          type="text"
          value={tofind}
          placeholder="Find Something!"
          onChange={handleOnWordRChange}
        />
        <h5>Replace</h5>
        <input
          type="text"
          value={toreplace}
          placeholder="To Replace!"
          onChange={handleOnWordReplaceChange}
        />
        <button className="btn btn-primary" onClick={handleReplaceAllClick}>
          Replace All
        </button>
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
