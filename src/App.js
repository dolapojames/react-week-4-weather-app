import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather />
      </div>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default App;
