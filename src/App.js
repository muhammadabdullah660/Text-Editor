import "./App.css";
import MyNavbar from "./MyNavbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    //using jsx fragment because it returns only 1 tag
    <>
      <MyNavbar title="Text Editor" menu1="Home" menu2="About Us" />
      <div className="container">
        <TextForm heading="Enter some text" />
      </div>
    </>
  );
}

export default App;
