import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";


const Root = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> {/* Rota protegida */}

        </Routes>
    )

}

export { Root };