import React from "react";
import "./Phonetic.css";
import Audio from "./Audio.js";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="row">
          <div className="col-1 playsound">
            <Audio audio={props.phonetic.audio} />
          </div>
          <div className="col text">{props.phonetic.text}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
