import { NavLink } from "react-router-dom";
import "./Card.css";
/* eslint-disable react/prop-types */

export const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <a>
              <button className="ticket__buy-btn">Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};