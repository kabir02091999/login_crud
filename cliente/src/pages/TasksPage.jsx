import React from "react";

import { Navigate } from "react-router";

function TasksPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
          Bienvenido a la Página de Tareas
        </h1>
        <p className="text-gray-400 text-center">
          tasks
        </p>
        <div className="mt-4 text-center text-gray-500">
          ¿No tienes una cuenta?{" "}
          <a href="/add-task" className="text-indigo-400 hover:underline">
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}
export default TasksPage;