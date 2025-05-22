/* import React from "react";

import {useAuth} from "./context/AuthContext"
import { Navigate , Outlet } from "react-router";

function ProtectedRoute() {
    
    const {user , isAuthenticated } = useAuth()
    console.log(isAuthenticated , " isAuthenticated")
    if(!isAuthenticated) return <Navigate to="/login" replace/>

  return (
    <Outlet/>
  );
}

export default ProtectedRoute; */

// src/ProtectedRouter.jsx
import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom"; // Importa useLocation

function ProtectedRoute() {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation(); // Obtiene el objeto de ubicación actual

    if (loading) {
        return <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>Cargando...</div>;
    }
    console.log(isAuthenticated, " isAuthenticated");
    if (!isAuthenticated) {
        // Guarda la ruta original en el estado de la navegación
        // para que LoginPage la pueda usar después del login.
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;