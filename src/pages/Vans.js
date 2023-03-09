import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    const vanHtmlRender = vans.map(item => (
            <div key={item.id} className="van-tile">
                <img src={item.imageUrl}/>
                <div className="van-info">
                    <h4>{item.name}</h4>
                    <h4>${item.price} <span>/day</span></h4>
                </div>

                <i className={`van-type ${item.type} selected`}>{item.type}</i>
            </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our Van options</h1>
            <div className="van-list">
                {vanHtmlRender}
            </div>
        </div>

    )
};