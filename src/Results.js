import React from "react";
import Meaning from "./Meaning";
import { Howl } from "howler";
import "./index.css";

export default function Results(props) {
  function soundPlay() {
    const sound = new Howl({
      src: [props.result.phonetics[0].audio],
      html5: true,
    });
    sound.play();
  }
  if (props.result) {
    return (
      <div className="Results">
        <div className="word-phonetics-sound">
          <div>
            <button className="play-sound" onClick={soundPlay}>
              <i className="fa-solid fa-circle-play"></i>
            </button>
            <h3 className="d-inline">{props.result.word}</h3>
          </div>
          {props.result.phonetics.map(function (phon, index) {
            return (
              <p key={index} className="phonetics">
                {phon.text}
              </p>
            );
          })}
        </div>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
