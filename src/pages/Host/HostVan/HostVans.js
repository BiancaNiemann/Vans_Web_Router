import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[])

    const HostVanHtmlRender = vans.map(item => (
            <Link 
                to={`/host/vans/${item.id}`}
                key={item.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={item.id}>
                    <img src={item.imageUrl} alt={`Photo of ${item.name}`}/>
                    <div className="host-van-info">
                        <h4>{item.name}</h4>
                        <h4>${item.price} <span>/day</span></h4>
                    </div>
                </div>
            </Link>
    ))

    return (
        <div >
            <h1 className="host-vans-title">Your Listed Vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {HostVanHtmlRender}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </div>

    )
};