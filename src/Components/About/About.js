import React, { useState } from "react";

export default function About() {
  const [customStyle, setcustomStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const toggleDarkMode = () => {
    if (customStyle.color === "white") {
      setcustomStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Dark Mode");
    } else {
      setcustomStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Light Mode");
    }
  };
  const [btnText, setbtnText] = useState("Light Mode");
  return (
    <>
      <div className="container" style={customStyle}>
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne" style={customStyle}>
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
                  Collapsible Group Item #1
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
              style={customStyle}
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo" style={customStyle}>
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
                  Collapsible Group Item #2
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
              style={customStyle}
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <button type="button" className="btn btn-dark" onClick={toggleDarkMode}>
          {btnText}
        </button>
      </div>
    </>
  );
}
