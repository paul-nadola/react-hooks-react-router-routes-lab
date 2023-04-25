import React from "react";
import { actors } from "../data";

function Actors() {
  return <>{/*{code here}*/}
  <h1>Actors Page</h1>
    {actors.map((actor, index) =>{
      return <div key={index}>
      <h1>Name : {actor.name}</h1>
      <ul>Movies: {actor.movies.map((item, index) =>{
      return <li key={index}>{item}</li>}
      )}</ul>

      </div>

    })}
  </>;
}

export default Actors;
