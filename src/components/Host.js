import React from "react"
import {NavLink, Outlet} from 'react-router-dom'

export default function Host(){

    const isActiveStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
        <nav className="host-nav">
            <NavLink 
                to="."
                end
                style={({isActive}) => isActive ? isActiveStyle : null}>
                Dashboard
            </NavLink>
                
            <NavLink 
                to="income"
                style={({isActive}) => isActive ? isActiveStyle : null}>
                Income
            </NavLink>

            <NavLink 
                to="vans"
                style={({isActive}) => isActive ? isActiveStyle : null}>
                Vans
            </NavLink>
                
            <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? isActiveStyle : null}>
                Reviews
            </NavLink>  
        </nav>
        <Outlet />
        </>
    )
}