import React , { useEffect }from "react";

import { useTasks } from "../context/TasksContext";
import { use } from "react";

function ProfilePage() {

    const { tasks , getasks } = useTasks();

useEffect(() => {
    console.log(" ejecucion ")
    getasks();
}
, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
          Bienvenido a la Página de Perfil
        </h1>
        <p className="text-gray-400 text-center">
          profile page
        </p>
      </div>
    </div>
  );
}
export default ProfilePage;