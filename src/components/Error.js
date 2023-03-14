import React from "react"
import { useRouteError } from "react-router-dom"

export default function Error(){
    const error = useRouteError()
    return (
        <div>
            <h1>Error: {error.message}</h1>
            <h2>StatusText: {error.statusText}</h2>
            <h2>Status: {error.status}</h2>
        </div>
    )
}