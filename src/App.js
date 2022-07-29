import React, { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import MyNavbar from "./Components/Navbar/MyNavbar";
import TextForm from "./Components/TextForm/TextForm";
function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#424445";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#424445";
    }
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
      <div className="container">
        <TextForm heading="Enter some text" mode={mode} />
      </div>
      <About />
    </>
  );
}

export default App;
