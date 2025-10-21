import React from 'react';

const Search = ({searchMovies}) => {

  const handelChange = (e)=> {
    console.log(e.target.value)
    searchMovies(e.target.value)
  }

  return (
      <div >
        <input onChange={handelChange}  type="text" placeholder='Movie Name'/>
      </div>
    
  );
}

export default Search;

