import React from 'react'
import  {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a class="navbar-brand" href="#">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-2">
                <NavLink to="/deshbord">Deshbord</NavLink>
              </li>
              <li class="nav-item mx-2">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar