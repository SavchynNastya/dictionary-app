import React from "react";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <p className="d-inline"> - {props.definition}</p>
      </div>
    );
  } else {
    return null;
  }
}
