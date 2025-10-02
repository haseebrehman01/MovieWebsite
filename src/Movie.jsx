import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Card } from './Components/UI/Card';
function Movie() {
  const moviesData =  useLoaderData();
  console.log(moviesData);
  return (
    <ul className="container grid grid-four--cols">
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  )
}

export default Movie