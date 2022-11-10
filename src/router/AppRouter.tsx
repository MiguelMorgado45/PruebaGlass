import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import PageTemplate from '../templates/pageTemplate/PageTemplate';
import { Cuentas } from '../pages/Cuentas';
import { Dashboard } from "../pages/Dashboard";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageTemplate />}>
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

