import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { BiUserCircle } from "react-icons/bi"

export default function Header(){
    const isActiveStyle ={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut(){
      localStorage.removeItem("loggedin")
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
          <Link 
            to="login" 
            className="login-link">
            <BiUserCircle  /> 
          </Link>
          <button onClick={fakeLogOut}>X</button>
        </nav>
      </header>
    )

}