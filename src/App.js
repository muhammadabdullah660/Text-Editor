import "./App.css";
import MyNavbar from "./MyNavbar";
function App() {
  return (
    //using jsx fragment because it returns only 1 tag
    <>
      <MyNavbar title="Text Editor" menu1="Home" menu2="About Us" />
    </>
  );
}

export default App;
