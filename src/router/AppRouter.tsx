import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"

import { Cuentas } from '../pages/Cuentas';
import { Dashboard } from "../pages/Dashboard";
import { GlassNavigationBar } from "../pages/GlassNavigationBar";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GlassNavigationBar />}>
                    <Route path="dashboard" element={<Dashboard />}/>
                    <Route path="cuentas" element={<Cuentas />}/>
                </Route>
                <Route path="/*" element={<Navigate to={"/dashboard"} />} />
                {/* <Route path="/" element={<Navigate to={"/"} />} /> */}
            </Routes>
        </BrowserRouter>


    )
}

export default AppRouter

