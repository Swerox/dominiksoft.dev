import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Imprint">Imprint</NavLink></li>
          <li><NavLink to="/Privacy">Privacy</NavLink></li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;