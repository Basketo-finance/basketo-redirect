import logo from "./logo_green.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We've migrated our application. <br />
          Please click the button for latest version 🚀🔥
        </p>
        <a
          className="App-link"
          href="https://basketofinance.com"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            background: "#73FAC8",
            border: "1px solid #73FAC8",
            padding: "10px 30px",
            borderRadius: "5px",
            color: "#000",
            fontSize: "16px",
          }}
        >
          Basketo Finance
        </a>
      </header>
    </div>
  );
}

export default App;
