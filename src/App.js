import React, { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Alert from "./Components/Alert/Alert";
import MyNavbar from "./Components/Navbar/MyNavbar";
import TextForm from "./Components/TextForm/TextForm";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      showAlert("Dark mode has been enabled", "warning");
      document.body.style.backgroundColor = "#424445";
      document.body.style.color = "white";
    } else {
      setmode("light");
      showAlert("Light mode has been enabled", "warning");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#424445";
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
      <div className="container">
        <TextForm heading="Enter some text" showAlert={showAlert} mode={mode} />
      </div>
      <About mode={mode} />
    </>
  );
}

export default App;
