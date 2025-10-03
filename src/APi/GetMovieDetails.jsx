// import { useParams } from "react-router-dom"; // Old way, not used since loader already gives params

// Loader function to fetch movie details based on the MovieId from route params
export const getMovieDetails = async ({ params }) => {
  // console.log(params); // For debugging: see what params object looks like

  const id = params.MovieId; // Extract MovieId from params

  try {
    // Fetch movie details from OMDB API using the movie's IMDb ID
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    // Convert response to JSON
    const data = await response.json();

    // Return the movie details to be used in component
    return data;
  } catch (error) {
    // Log error in case of failure
    console.log(error);
  }
};
