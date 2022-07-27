import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./index.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  // let [image, setImage] = useState(null);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0]);
    return setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    // console.log(response);
    return setPhotos(response.data.photos);
  }

  // function changeBackground(response) {
  //   console.log(response);
  //   //return setImage(response.data.hits[0].largeImageURL);
  //   this.css("background-image", response.data.hits[0].largeImageURL);
  // }

  function searchWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsKey = "563492ad6f9170000100000102da905b8a4c42738c484891922b2be4";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);

    // let pixabayKey = "28876423-c65320575c7546cb355315fd4";
    // let pixabayApi = `https://pixabay.com/api/?key=${pixabayKey}&q=${word}&image_type=photo`;
    // axios.get(pixabayApi).then(changeBackground);
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
