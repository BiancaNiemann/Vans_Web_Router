import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"



export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])
    
    const typeFilter = searchParams.get("type")
    
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    const vanHtmlRender = displayedVans.map(item => (
            <Link to={`/vans/${item.id}`} key={item.id}>
                <div key={item.id} className="van-tile">
                    <img src={item.imageUrl}/>
                    <div className="van-info">
                        <h4>{item.name}</h4>
                        <h4>${item.price} <span>/day</span></h4>
                    </div>

                    <i className={`van-type ${item.type} selected`}>{item.type}</i>
                </div>
            </Link>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null){
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our Van options</h1>
            <div className = "van-list-filter-buttons">
                <button 
                    onClick = {() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple
                </button>
                <button 
                    onClick = {() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury
                </button>
                <button 
                    onClick = {() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged
                </button>
                {typeFilter ? (<button 
                    onClick = {() => handleFilterChange("type", null)}
                    className="van-type clear-filters"
                >
                Clear Filters
                </button>) : null}

            </div>
            <div className="van-list">
                {vanHtmlRender}
            </div>
        </div>

    )
};