import React from "react";
import { movies } from "../data";
// const [title , time , genres] = movies
console.log(movies)
// console.log(genres)
function Movies() {
  return <>{/*{code here}*/}
  <h1>Movies Page</h1>
    {movies.map((movie, index) =>{
      return <div key={index}>
      <h1>Title : {movie.title}</h1>
      <p>Time : {movie.time}</p>
      <ul>Genres: {movie.genres.map((genre, index) =>{
      return <li key={index}>{genre}</li>}
      )}</ul>

      </div>

    })}
  </>
}

export default Movies;
