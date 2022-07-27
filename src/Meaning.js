import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./index.css";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
      <div className="box">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <Definition definition={definition.definition} />
              <Example example={definition.example} />
            </div>
          );
        })}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
