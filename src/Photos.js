import React from "react";
import "./index.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div>
        <h4 className="text-center">Photos</h4>
        <div className="Photos">
          {props.photos.map(function (photo, index) {
            return (
              <img key={index} src={photo.src.landscape} alt={photo.alt} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
