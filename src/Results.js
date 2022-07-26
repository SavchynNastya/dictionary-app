import React, { useState } from "react";
import Meaning from "./Meaning";
import { Howl } from "howler";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Results(props) {
  const [sound, setSound] = useState(null);
  console.log(props);

  function changeSound() {
    setSound(props.result.phonetics[0].audio);
    soundPlay(sound);
  }

  function soundPlay(src) {
    const sound = new Howl({ src, html5: true });
    sound.play();
  }
  if (props.result) {
    return (
      <div className="Results">
        <button className="play-sound" onClick={changeSound}>
          <i className="fa-solid fa-circle-play"></i>
        </button>
        <h3 className="d-inline">{props.result.word}</h3>
        <p>{props.result.phonetics[0].text}</p>
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
