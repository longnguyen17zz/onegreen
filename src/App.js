import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import findMissingNumber from "./Task/Task1";
import isValidPassword from "./Task/Task2";

function App() {
  useEffect(() => {
    console.log(findMissingNumber([1, 2, 3, 5]));
    console.log("Password Validity:", isValidPassword("Hello@123"));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
