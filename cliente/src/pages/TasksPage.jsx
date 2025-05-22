import React , { useEffect , useState } from "react";

import { Navigate } from "react-router";

import { useTasks } from "../context/TasksContext";
import { use } from "react";

function TasksPage() {

  const { getasks , tasks ,errors: tasksErrors,DeleteTask} = useTasks();
  const [deleteTask, setDeleteTask] = useState(false);

  useEffect(() => {
    getasks();
  }, [deleteTask]);

  return  (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-2xl"> {/* Ampliado el ancho */}
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-400">
          Mis Tareas
        </h1>

        {/* Mostrar errores de tareas */}
        {tasksErrors && tasksErrors.length > 0 && (
          <div className="bg-red-500 p-2 text-white mb-4 rounded">
            {tasksErrors.map((error, i) => (
              <p key={i}>{error}</p>
            ))}
          </div>
        )}

        {/* Botón para agregar nueva tarea */}
        <div className="mb-6 text-center">
          <a 
            href="/add-task" // Asegúrate de que esta ruta coincida con tu App.jsx
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar Nueva Tarea
          </a >
        </div>

        {/* Lista de Tareas */}
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">
            Aún no tienes tareas. ¡Crea una!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Diseño de cuadrícula */}
            {tasks.map((task) => (
              <div key={task._id} className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-white">{task.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{task.description}</p>
                {/* Opcional: mostrar la fecha si la tienes */}
                {task.date && (
                  <p className="text-gray-500 text-xs mb-3">
                    Fecha: {new Date(task.date).toLocaleDateString()}
                  </p>
                )}
                <div className="flex justify-end gap-2 mt-4">
                  <a
                    href={`/edit-task/${task._id}`} // Asegúrate de que esta ruta coincida con tu App.jsx
                    className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm py-1 px-3 rounded"
                  >
                    Editar
                  </a>
                  <button
                    onClick={() => {
                      DeleteTask(task._id);
                      setDeleteTask(!deleteTask);
                      alert(`Eliminar tarea: ${task._id}`); // Solo para demostración
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

}
export default TasksPage;