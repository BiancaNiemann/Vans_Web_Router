import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    const isActiveStyle ={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <NavLink 
            to="about" 
            style={({isActive}) => isActive ? isActiveStyle : null}>
            About
          </NavLink>
          <NavLink 
            to="vans" 
            style={({isActive}) => isActive ? isActiveStyle : null}>
            Vans
          </NavLink>
          <NavLink 
            to="host" 
            style={({isActive}) => isActive ? isActiveStyle : null}>
            Host
          </NavLink>
        </nav>
      </header>
    )

}