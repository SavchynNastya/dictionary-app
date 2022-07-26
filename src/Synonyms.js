import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <h5>Synonyms:</h5>
        <div>
          <ul>
            {props.synonyms.map(function (synonym, index) {
              return (
                //   <h5 className="d-inline" key={index}>
                //     {synonym}{" "}
                //   </h5>

                <li key={index}> {synonym}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
