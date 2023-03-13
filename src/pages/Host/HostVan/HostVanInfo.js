import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
    const {currentVan} = useOutletContext()
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{currentVan.name}</span></h4>
            <h4>Name: <span>{currentVan.type}</span></h4>
            <h4>Name: <span>{currentVan.description}</span></h4>
            <h4>Visibilty: <span>public</span></h4>
        </section>
    )
}