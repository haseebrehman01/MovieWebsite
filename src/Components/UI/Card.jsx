import { NavLink } from "react-router-dom";
import "./Card.css";


// Card component receives "curMovie" as a prop
export const Card = ({ curMovie }) => {
  // Destructure needed values from curMovie
  const { Poster, imdbID } = curMovie;

  return (
    <li className="hero-container">
      <div className="main-container">
        
        {/* Movie Poster */}
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>

        {/* Ticket section with button */}
        <div className="ticket-container">
          <div className="ticket__content">
            
            {/* Navigate to the Movie details page using imdbID */}
            <NavLink to={`/Movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>

          </div>
        </div>
      </div>
    </li>
  );
};
