import React, { Suspense } from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"

export function loader(){
    return defer ({hostVan: getHostVans()})
}

export default function HostVans() {

    const dataPromise = useLoaderData()

    function renderHostVans(vans){
        const HostVanHtmlRender = vans.map(item => (
            <Link 
                to={item.id}
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
        <div className="host-vans-list">
            <section>
                {HostVanHtmlRender}
            </section>
            </div>
        )
    }  

    return (
        <div >
            <h1 className="host-vans-title">Your Listed Vans</h1>
            <Suspense fallback={<h2>Host Vans Loading...</h2>}>
                <Await resolve={dataPromise.hostVan}>
                    {renderHostVans}
                </Await>
            </Suspense>
        </div>

    )
};