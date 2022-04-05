import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.data);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <strong>Definitions: </strong>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <ul>
                <li>
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                </li>
              </ul>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
