import React, { Component } from "react";
import Movie from './movie';
import './moviesList.css'

class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          loading: false,
        });
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="movies-container">
        <h1>Popular Movies</h1>
        <div className="movies-grid">
          {this.state.movies.map((movie) => {
           return  <Movie
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              year={movie.release_date}
              rating={movie.vote_average}
            />
  })}
        </div>
      </div>
    );
  }
}

export default MoviesList;
