import React, {Suspense} from "react"
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom"
import { getVans } from "../api"

export function loader(){
    return defer({vans : getVans()})
}

export default function Vans() {
    const dataPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

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

    function renderVans(vans) {
        const displayedVans = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    const vanHtmlRender = displayedVans.map(item => (
            <Link to={item.id} key={item.id} state={{
                search: searchParams.toString(),
                type: typeFilter
                }}>
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
    return (
        <>
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
    </>
    )
}

    return (
        <div className="van-list-container">
            <h1>Explore our Van options</h1>
            <Suspense fallback={<h2>Loading Vans...</h2>}>
                <Await resolve={dataPromise.vans}>
                    {renderVans}
                </Await>
            </Suspense>


        </div>

    )
};