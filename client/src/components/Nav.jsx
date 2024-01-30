import React from 'react'
import "./Nav.css"
import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  return (
 
    <>
        <nav>
            <Link to="/"><img src="../src/assets/Predict Icon.png" alt="heart"  /></Link>
            <Link to="/report"><img src="../src/assets/Monthly Report Icon.png" alt="Monthly Report"  /></Link>
            <Link to="/About"><img src="../src/assets/About Icon.png" alt="About Icon"  /></Link>
            <Link to="/profile" ><img src="../src/assets/Profile Icon.png" alt="Profile Icon"  /></Link>
        </nav>
        <Outlet/>
    </>
      
  )
}

export default Nav
