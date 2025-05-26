import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Lagos" />
        <footer>
          This project was coded by
          <a
            href="https://github.com/dolapojames"
            target="_blank"
            rel="noreferrer"
          >
            Dolapo James
          </a>
          is
          <a
            href="https://github.com/dolapojames/react-week-4-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://weather-in-react-vscode-240525.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
