import React, { Component } from "react";
import "../App.css";
import "./movie.css"

class Movie extends Component {
  render() {
    const { title, poster, year, rating } = this.props;

    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
        />
        <h3>{title}</h3>
        <p>Year:{year}</p>
        <p>Rating:{rating}</p>
      </div>
    );
  }
}

export default Movie;
