import { useState } from "react";
import Movie from './movie'


function Movies(){

     const [moviesList] = useState([
    { id: 1, title: 'Inception', year: 2010, rating: 8.8 ,image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"},
    { id: 2, title: 'Interstellar', year: 2014, rating: 8.6,image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
    { id: 3, title: 'The Dark Knight', year: 2008, rating: 9.0 ,image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
     { id: 3, title: 'The Dark Knight', year: 2008, rating: 9.0 ,image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
      { id: 3, title: 'The Dark Knight', year: 2008, rating: 9.0 ,image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
  ]);
  console.log(moviesList);
return(

    <div style={{
        display:"flex",
        justifyContent:"space-evenly",
        gap:"10px",
         flexWrap:"wrap",

    }}>
   {moviesList.map((movie)=>{
            return <Movie {... movie }></Movie>
   })}
    </div>
)
}
export default Movies;