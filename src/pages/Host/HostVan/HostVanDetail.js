import React, {Suspense} from "react"
import {Link, NavLink, Outlet, useLoaderData, defer, Await} from "react-router-dom"
import { getHostVans } from "../../api"

export function loader({params}){
    return defer({hostVanDetail: getHostVans(params.id)})
}

export default function HostVanDetail() {

    const dataPromise = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section>
            <Link 
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.hostVanDetail}>
                    {(currentVan) => (
                        <div className="host-van-detail-layout-container">
                            <div className="host-van-detail">
                                <img src={currentVan.imageUrl} />
                                <div className="host-van-detail-info-text">
                                    <i
                                        className={`van-type van-type-${currentVan.type}`}
                                    >
                                        {currentVan.type}
                                    </i>
                                    <h3>{currentVan.name}</h3>
                                    <h4>${currentVan.price}/day</h4>
                                </div>
                            </div>
                            <nav className="host-van-detail-nav">

                                <NavLink 
                                    to="."
                                    end
                                    style={({isActive}) => isActive ? activeStyles : null}
                                    >
                                    Details
                                </NavLink>

                                <NavLink 
                                    to="pricing"
                                    style={({isActive}) => isActive ? activeStyles : null}
                                    >
                                    Pricing
                                </NavLink>

                                <NavLink 
                                    to="photos"
                                    style={({isActive}) => isActive ? activeStyles : null}
                                    >
                                    Photos
                                </NavLink>

                            </nav>
                            <Outlet context={{currentVan}} />
                        </div>
                    )}
                </Await>
            </Suspense>
            </section>
    )
}
