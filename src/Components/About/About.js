import React from "react";

export default function About(props) {
  let customStyleHeader = {
    backgroundColor: props.mode === "light" ? "" : "black",
    color: props.mode === "light" ? "" : "white",
  };
  let customStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#424445",
    color: props.mode === "light" ? "#424445" : "white",
    border: "2px solid",
    borderColor: props.mode === "light" ? "#424445" : "white",
  };
  return (
    <>
      <div className="container">
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div
              className="card-header"
              id="headingOne"
              style={customStyleHeader}
            >
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={customStyle}
                >
                  Analyze Your text
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={customStyle}>
                Texticles gives you a way to analyze your text quickly and
                efficiently. Toggle between different font styles. Count the
                words and characters in your text. Also now you can use Find and
                Replace feature
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              id="headingTwo"
              style={customStyleHeader}
            >
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={customStyle}
                >
                  Free to use
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={customStyle}>
                Texticles is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Texticles reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              id="headingThree"
              style={customStyleHeader}
            >
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={customStyle}
                >
                  Browser Compatible
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={customStyle}>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
