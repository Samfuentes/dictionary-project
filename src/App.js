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
          <smaller>Code by Sam Fuentes, open-source on GitHub.</smaller>
        </footer>
      </div>
    </div>
  );
}

export default App;
