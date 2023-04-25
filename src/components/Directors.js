import React from "react";
import { directors } from "../data";

function Directors() {
  return <>{/*{code here}*/}
  <h1>Directors Page</h1>
    {directors.map((director, index) =>{
      return <div key={index}>
      <h1>Name : {director.name}</h1>
      <ul>Movies: {director.movies.map((item, index) =>{
      return <li key={index}>{item}</li>}
      )}</ul>

      </div>

    })}
  </>
}

export default Directors;
