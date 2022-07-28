import "./App.css";
import About from "./Components/About/About";
import DarkMode from "./Components/DarkButton/DarkMode";
import MyNavbar from "./Components/Navbar/MyNavbar";
import TextForm from "./Components/TextForm/TextForm";
function App() {
  return (
    //using jsx fragment because it returns only 1 tag
    <>
      <MyNavbar title="Text Editor" menu1="Home" menu2="About Us" />
      <div className="container">
        <TextForm heading="Enter some text" />
      </div>
      <About />
      {/* <DarkMode /> */}
    </>
  );
}

export default App;
