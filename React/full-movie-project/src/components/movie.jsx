import React from "react";
import "./movie.css";

const Movie = React.memo(({id,addCard,removeCard,cnt, title, poster, year, rating }) => {
const plusOne=()=>{

  addCard(cnt,id)
}
const minusOne=()=>{
  removeCard(cnt,id)
}
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
      <div>{cnt}</div>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </div>
  );
});

export default Movie;
