import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { PageOne } from "../pages/PageOne";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne />} />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter

