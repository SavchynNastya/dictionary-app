import React, { useState } from "react";
import "./search-engine-styles.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function searchWord(event) {
    event.preventDefault();
    return alert(`${word} word`);
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
    </div>
  );
}
