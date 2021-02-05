import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"

function App() {
  useEffect(async () => {
    var response = await fetch("http://localhost:5000/api/TodoItems");
    var data = await response.json();
    console.log(data);
  },[]);

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
          歡迎進來
        </a>
      </header>
    </div>
  );
}

export default App;
