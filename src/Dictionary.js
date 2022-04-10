import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState("happy");
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search() {
    //documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What are you looking? </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, forest,plant...{" "}
          </div>{" "}
        </section>
        <Results results={definition} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
