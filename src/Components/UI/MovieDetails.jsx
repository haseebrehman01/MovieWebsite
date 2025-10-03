// import { useParams } from "react-router-dom"; // Old way of accessing route params (not used here)

import { NavLink, useLoaderData } from "react-router-dom"

export const MovieDetails = () => {
  // New way: directly load data using React Router's loader
  const movieDetails = useLoaderData()

  // Destructure movie details for cleaner usage
  const {
    Actor,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Awards,
    imdbRating,
  } = movieDetails;

  // Convert runtime (e.g., "192 min") into hours and minutes
  const totalMinutes = Runtime.replace("min", ""); // remove 'min' and keep only number
  const hours = Math.floor(totalMinutes / 60); // get total hours
  const minutes = totalMinutes % 60; // get remaining minutes

  const formattedTime = `${hours}hr ${minutes}min`; // final readable format
  // console.log(formattedTime);

  return (
    // Movie container
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <figure className="movie">
          
          {/* Movie Poster */}
          <div className="movie__hero">
            <img src={Poster} alt={Title} className="movie__img" />
          </div>

          {/* Movie Content */}
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                {Title} <i className="fas fa-fire"></i>
              </h1>
              {/* Tags for type and year */}
              <div className="movie__tag movie__tag--1">{`#${Type}`}</div>
              <div className="movie__tag movie__tag--2">Year: {Year}</div>
            </div>

            {/* Description & Awards */}
            <p className="movie__description">{Plot}</p>
            <br />
            <p className="movie__description">Awards: {Awards}</p>

            {/* Extra details: rating, time, box office */}
            <div className="movie__details">
              <p className="movie__detail">
                <span className="icons icons-red">
                  <i className="fas fa-camera-retro"></i>
                </span>
                Rating: {imdbRating}
              </p>
              <p className="movie__detail">
                <span className="icons icons-grey">
                  <i className="fas fa-clock"></i>
                </span>
                {formattedTime}
              </p>
              <p className="movie__detail">
                <span className="icons icons-yellow">
                  <i className="fas fa-file-invoice-dollar"></i>
                </span>
                {BoxOffice}
              </p>
            </div>

            {/* Go Back button */}
            <div>
              <NavLink
                to="/Movie"
                className="movie__tag movie__tag--2"
                style={{ textAlign: "center", fontSize: "1.6rem" }}
              >
                Go Back
              </NavLink>
            </div>
          </div>

          {/* Price/Box Office on the side */}
          <div className="movie__price">{BoxOffice}</div>
        </figure>
      </div>
    </li>
  );
}
