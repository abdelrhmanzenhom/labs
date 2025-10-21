import React, { useState, useEffect, useMemo } from "react";
import Movie from "./Movie";
import RatingFilter from "./filter";
import Search from "./search";
import "./moviesList.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRating, setFilterRating] = useState("all");
  const [cnt,setCnt]=useState({});
  const [totalCards,setTotal]=useState(0);
  const [allmovies,setAllMovies]=useState([]);
  /* useEffect(() => {
    fetch(
     "https://api.themoviedb.org/3/movie/popular?api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []); */
 useEffect(()=>{
   async function fetchData(){
      let res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US&page=1");
      let data=await res.json();
      setMovies(data.results);
      setAllMovies(data.results);
      setLoading(false);
      
      setTotal(movies.length)
    }
    fetchData();
    
  },[])

  const addCard=(cnt,id)=>{
    //cnt=cnt+1;
   setCnt((oldC)=>{
    let allc={...oldC};
    let theOne=allc[id]||1;
    allc[id]=theOne+1;
    return allc;

   })
  setTotal(totalCards+1||0)
   
  }
  const removeCard=(cnt,id)=>{
    console.log(cnt);
setCnt((oldC)=>{
  let newC={...oldC};
  let theOne=newC[id]||1;
  newC[id]=theOne-1||1;
  return newC;
})
if(totalCards!=movies.length)
 setTotal(totalCards-1||0)
  }

  const searchMovies=(movieName)=>{
    
    if(movieName==""){setMovies(allmovies)}
    else{
        setMovies( movies.filter((m)=>{
          return m.title.toLowerCase().includes(movieName.toLowerCase());
        }))}
        console.log(movieName)
  }

  const filteredMovies = useMemo(() => {
    if (filterRating === "all") return movies;
    return movies.filter((movie) => movie.vote_average >= parseInt(filterRating));
  },[movies,filterRating]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="movies-container">
      <h1>Popular Movies</h1>

      <h3>{totalCards}</h3>
      <RatingFilter filterRating={filterRating} setFilterRating={setFilterRating} />
      <Search searchMovies={searchMovies}/>

     
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Movie
            searchMovies={searchMovies}
            id={movie.id}
            addCard={addCard}
            removeCard={removeCard}
            cnt={cnt[movie.id]??1}
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              year={movie.release_date}
              rating={movie.vote_average}
            />
          ))
        ) : (
          <p>No movies match this filter.</p>
        )}
      </div>
    </div>
  );
}

export default MoviesList;
