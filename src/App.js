import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="container">
          <nav class="d-flex justify-content-between">
            <a href="/" class="d-none d-md-block" title="Homepage">
              Sam's Portafolio
            </a>
            <ul>
              <li>
                <a href="https://www.samfuentesg.com/" title="Homepage">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.samfuentesg.com/#projects"
                  title="Sam's Projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://www.samfuentesg.com/#contact"
                  title="Contact Sam"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="coffee" />
        </main>
        <footer className="App-footer">
          Code by Sam Fuentes,{" "}
          <a href="https://github.com/Samfuentes/Portafolio">
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
