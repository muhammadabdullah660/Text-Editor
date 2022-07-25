import "./App.css";
let name = "Abdullah";
function App() {
  return (
    //using jsx fragment because it returns only 1 tag
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <br />
      <h1>Hello {name}</h1>
      <div className="container">
        Lorem, ipsum dolor <b>sit</b> amet consectetur adipisicing elit. Dolorem
        doloribus voluptate corrupti excepturi consequatur odit sapiente modi
        qui, alias officiis consectetur libero veniam. Voluptas quasi eaque
        nihil quia sint optio!
      </div>
    </>
  );
}

export default App;
