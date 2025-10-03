import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Card } from './Components/UI/Card';

function Movie() {
  // Load the movies data from the loader function (provided in route)
  const moviesData = useLoaderData();
  
  // Render the list of movies
  return (
    <ul className="container grid grid-four--cols">
      {/* Check if moviesData exists, then loop through Search array */}
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          // For each movie, render the Card component
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  )
}

export default Movie;
