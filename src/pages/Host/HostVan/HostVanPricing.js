import React, { useContext } from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const {currentVan} = useOutletContext()

    return (
        <h4 className="host-van-price">${currentVan.price}.00<span>/day</span></h4>
    )
}