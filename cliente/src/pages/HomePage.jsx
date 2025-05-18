import React from "react";

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
          Bienvenido a la Página Principal
        </h1>
        <p className="text-gray-400 text-center">
          Esta es la página principal de la aplicación.
        </p>
      </div>
    </div>
  );
}
export default HomePage;