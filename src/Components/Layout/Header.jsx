import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const styles = ({isActive}) =>{

      return {color: isActive ? "#535bf2" : " var(--heading-color)"}
        
    }
  return (
    <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="#">
              <p>ThapaFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
               
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="About"
                 className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="Movie"
                //   second method to handle active class
                style={({isActive}) => {
                    return {
                        color: isActive ? "#535bf2" : " var(--heading-color)"
                    }
                }}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                 to="Contact"
// third method
              style={styles}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header