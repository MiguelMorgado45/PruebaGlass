import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { AgregarCuentasPage, CuentasPage, DetalleCuentaPage } from "../pages/Cuentas";

import { Dashboard } from "../pages/Dashboard";
import { GlassNavigationBar } from "../pages/GlassNavigationBar";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GlassNavigationBar />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    {/* 
                    @Karol.- Intenté hacer cuentas anidadas pero no funcionó. 
                    <Route path="cuentas" element={<CuentasPage />}>
                        <Route path="agregar" element={<AgregarCuentasPage />}/>
                        <Route path="detalle/:id" element={<DetalleCuentaPage />}/>   
                    </Route> 
                    */}
                    <Route path="cuentas" element={<CuentasPage />}/>
                    <Route path="cuentas/agregar" element={<AgregarCuentasPage />} />
                    <Route path="cuentas/detalle/:id" element={<DetalleCuentaPage />} />

                </Route>
                <Route path="/*" element={<Navigate to={"/dashboard"} />} />
                {/* <Route path="/" element={<Navigate to={"/"} />} /> */}
            </Routes>
        </BrowserRouter>


    )
}

export default AppRouter

