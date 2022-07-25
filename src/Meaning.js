import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>
        <em>{props.meaning.definitions[0].example}</em>
      </p> */}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p> - {definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <h5 className="d-inline" key={index}>
            {synonym}{" "}
          </h5>
        );
      })}
    </div>
  );
}
