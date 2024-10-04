import React from 'react'
import { useParams } from "react-router-dom"

const DetalleTienda = () => {
    const codigoTienda = useParams().id;

    return (
        <div>
            <h1>DetalleTienda</h1>
            <span>{codigoTienda}</span>
        </div>
    )
}

export default DetalleTienda