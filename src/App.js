import React, { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Alert from "./Components/Alert/Alert";
import MyNavbar from "./Components/Navbar/MyNavbar";
import TextForm from "./Components/TextForm/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const removeClass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
  };

  const toggleMode = (cls) => {
    removeClass();
    document.body.classList.add("bg-" + cls);
    //setmode(cls);
    if (mode === "light") {
      setmode("dark");
      showAlert("Dark mode has been enabled", "warning");
      document.body.style.backgroundColor = "#424445";
      document.body.style.color = "white";
      document.title = "Text Editor - Dark Mode";
      //Changing title over time
      setInterval(() => {
        document.title = "Text Editor - Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Text Editor is amazing";
      }, 1500);
    } else {
      setmode("light");
      showAlert("Light mode has been enabled", "warning");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#424445";
      document.title += " - Light Mode";
    }
  };
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  return (
    //using jsx fragment because it returns only 1 tag
    <>
      <Router>
        <MyNavbar
          title="Text Editor"
          menu1="Home"
          menu2="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert
          //mode={mode}
          alert={alert}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter some text"
                showAlert={showAlert}
                mode={mode}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
