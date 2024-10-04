import React from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { logout } from './../store/actions/auth.action'

function Navbar() {
    const dispatch = useDispatch();
    const handleCerrarSesion = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-xxl d-flex flex-row align-items-baseline">
                <NavLink className="navbar-brand" to="/">Stockearte</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto mt-2 mt-lg-0">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            to="/tiendas"
                        >
                            Tiendas
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            to="/usuarios"
                        >
                            Usuarios
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            to="/productos"
                        >
                            Producto
                        </NavLink>
                    </div>
                    <button className="btn btn-danger" onClick={handleCerrarSesion}>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;