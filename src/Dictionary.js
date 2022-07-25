import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./search-engine-styles.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    return setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    return axios.get(apiUrl).then(handleResponse);
  }

  function changeWord(event) {
    return setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={searchWord}>
        <input
          type="text"
          placeholder="Enter the word to search"
          onChange={changeWord}
        />
      </form>
      <Results result={results} />
    </div>
  );
}
