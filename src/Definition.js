import React from "react";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <p class="d-inline"> - {props.definition}</p>
      </div>
    );
  } else {
    return null;
  }
}
