import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./index.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0]);
    return setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    // console.log(response);
    setPhotos(response.data.photos);
  }

  // function changeBackground(response) {
  //   console.log(response);
  //   return (
  //     <img
  //       src={response.data.photos[0].src.landscape}
  //       alt={response.data.photos[0].alt}
  //     />
  //   );
  // }

  function searchWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsKey = "563492ad6f9170000100000102da905b8a4c42738c484891922b2be4";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    //let pexelsUrlBackground = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
    //axios.get(pexelsUrlBackground, { headers: headers }).then(changeBackground);
    return true;
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
      <Photos photos={photos} />
    </div>
  );
}
