import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"

import {CuentasPage, AgregarCuentaPage, DetalleCuentaPage} from '../pages/Cuentas'
import {ClientesPage, AgregarClientePage, DetalleClientePage} from '../pages/Clientes'
import {ContratacionesPage, AgregarContratacionesPage, DetalleContratacionPage} from '../pages/Contrataciones'
import {OperadoresPage, AgregarOperadorPage, DetalleOperadorPage, AgregarRoles} from '../pages/Operadores'
import { Dashboard } from "../pages/Dashboard";
import { GlassNavigationBar } from "../pages/GlassNavigationBar";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GlassNavigationBar />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="cuentas" element={<CuentasPage />} />
                    <Route path="cuentas/agregar" element={<AgregarCuentaPage />} />
                    <Route path="cuentas/detalle/:id" element={<DetalleCuentaPage />} />

                    <Route path="clientes" element={<ClientesPage/>} />
                    <Route path="clientes/agregar" element={<AgregarClientePage />} />
                    <Route path="clientes/detalle/:id" element={<DetalleClientePage />} />

                    <Route path="contrataciones" element={<ContratacionesPage />} />
                    <Route path="contrataciones/agregar" element={<AgregarContratacionesPage />} />
                    <Route path="contrataciones/detalle/:id" element={<DetalleContratacionPage />} />

                    <Route path="operadores" element={<OperadoresPage />} />
                    <Route path="operadores/agregar" element={<AgregarOperadorPage />} />
                    <Route path="operadores/detalle/:id" element={<DetalleOperadorPage />} />
                    <Route path="operadores/agregarRol/:id" element={<AgregarRoles />} />

                </Route>
                <Route path="/*" element={<Navigate to={"/dashboard"} />} />
            </Routes>
        </BrowserRouter>


    )
}

export default AppRouter

