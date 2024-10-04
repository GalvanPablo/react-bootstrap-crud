// Manejo de Datos globales
import { useSelector } from 'react-redux';

// Navegacion
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Layout
import { Navbar } from './layout';

// Paginas
import {
    Auth,
    Tienda, NuevaTienda, DetalleTienda,
    Producto, NuevoProducto, DetalleProducto,
    Usuario, NuevoUsuario, DetalleUsuario
} from './pages'

function App() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <BrowserRouter>
            {isAuthenticated ? (
                <>
                    <Navbar />
                    <div className='container-xxl px-5 py-4'>
                        <Routes>
                            <Route path='/auth' element={<Navigate to={"/tiendas"} />} />
                            <Route path='/' element={<Navigate to={"/tiendas"} />} />

                            <Route path='/tiendas' element={<Tienda />} />
                            <Route path='/tiendas/nueva' element={<NuevaTienda />} />
                            <Route path="/tiendas/tienda/:id" element={<DetalleTienda />} />

                            <Route path='/usuarios' element={<Usuario />} />
                            <Route path='/usuarios/nueva' element={<NuevoUsuario />} />
                            <Route path='/usuarios/usuario/:id' element={<DetalleUsuario />} />

                            <Route path='/productos' element={<Producto />} />
                            <Route path='/productos/nueva' element={<NuevoProducto />} />
                            <Route path="/productos/producto/:id" element={<DetalleProducto />} />
                        </Routes>
                    </div>
                </>
            ) : (
                <Routes>
                    <Route path='/auth' element={<Auth />} />
                    <Route path='*' element={<Navigate to="/auth" />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;
