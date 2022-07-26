import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>
        <em>{props.meaning.definitions[0].example}</em>
      </p> */}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {/* <p>{definition.definition}</p> */}
            {/* <p>
              <em>{definition.example}</em>
            </p> */}
            <Definition definition={definition.definition} />
            <Example example={definition.example} />
            {/* <Synonyms synonyms={definition.synonyms} /> */}
          </div>
        );
      })}
      {/* {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <h5 className="d-inline" key={index}>
            {synonym}{" "}
          </h5>
        );
      })} */}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
