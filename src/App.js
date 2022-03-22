import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Code by Sam Fuentes, open-source on GitHub.
        </footer>
      </div>
    </div>
  );
}

export default App;
