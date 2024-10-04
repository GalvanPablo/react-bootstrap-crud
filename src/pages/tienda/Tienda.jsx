import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import { API_TIENDA } from '../../data/api';

const Tienda = () => {
    // Datos de ejemplo
    const [tiendas, setTiendas] = useState([]);

    // Estado para filtrar tiendas
    const [filtroCodigo, setFiltroCodigo] = useState('');
    const [filtroEstado, setFiltroEstado] = useState('');

    const obtenerTiendas = () => {
        setTiendas([
            { codigo: 'T001', estado: 'Activo' },
            { codigo: 'T002', estado: 'Inactivo' },
            { codigo: 'T003', estado: 'Activo' },
            { codigo: 'T004', estado: 'Inactivo' },
        ]);

        // const filtros = {
        //     codigo: filtroCodigo,
        //     estado: filtroEstado
        // }

        // fetch(API_TIENDA.LISTADO, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(filtros),
        // })
        //     .then(response => response.json())
        //     .then(response => {
        //         setTiendas(response.tiendas);
        //     })
    }

    useEffect(()=>{
        obtenerTiendas();
    },[])

    return (
        <div className="container">
            <h1>Listado de tiendas</h1>

            {/* Botón de nueva tienda */}
            <Link to="/tiendas/nueva" className="btn btn-success mb-4">
                Nueva Tienda
            </Link>

            {/* Filtros */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Código"
                        value={filtroCodigo}
                        onChange={(e) => setFiltroCodigo(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={filtroEstado}
                        onChange={(e) => setFiltroEstado(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="1">Activo</option>
                        <option value="0">Inactivo</option>
                    </select>
                </div>
            </div>

            {/* Tabla de tiendas */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tiendas.map((tienda) => (
                        <tr key={tienda.codigo}>
                            <td>{tienda.codigo}</td>
                            <td>{tienda.estado}</td>
                            <td>
                                <Link to={`/tiendas/tienda/${tienda.codigo}`} className="btn btn-primary btn-sm">
                                    Editar/Detalle
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tienda;