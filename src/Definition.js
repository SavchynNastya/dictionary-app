import React from "react";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <h5>Definition:</h5>
        <p>{props.definition}</p>
      </div>
    );
  } else {
    return null;
  }
}
