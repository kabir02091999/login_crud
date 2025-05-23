import React from "react";

import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o Nombre de la App */}
        {/* El logo redirige a /tasks si está autenticado, de lo contrario a la Home Page */}
        <Link
          to={isAuthenticated ? "/tasks" : "/"}
          className="text-white text-lg font-bold hover:text-indigo-400 transition-colors duration-200"
        >
          Task Manager
        </Link>

        <ul className="flex space-x-4 items-center"> 
          {isAuthenticated ? (
            <>
              {/* Enlaces para usuarios autenticados */}
              <li>
                <Link to="/tasks" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tasks
                </Link>
              </li>
              <li>
                <Link to="/add-task" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Profile ({user?.username || 'User'}) {/* Muestra el nombre de usuario si existe */}
                </Link>
              </li>
              <li>
                {/* Botón de Cerrar Sesión */}
                <button
                  onClick={() => {
                    logout(); // Llama a la función de logout de tu contexto
                    navigate("/login"); // Redirige al usuario a la página de login
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors duration-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Enlaces para usuarios no autenticados */}
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;