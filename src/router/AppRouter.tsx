import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { PageOne } from "../pages/PageOne";


const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<PageOne />} />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        
    )
}

export default AppRouter

