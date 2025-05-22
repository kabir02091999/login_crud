import react from "react";
import { useTasks } from "../context/TasksContext";

import { useForm } from "react-hook-form";

function TasksFormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { tasks ,   CreateTask  } = useTasks();
    /* console.log(tasks, "tasks"); */
    const onSubmit = (data) => {
        //console.log(tasks);
        // Aquí puedes enviar los datos al servidor o realizar cualquier otra acción
        CreateTask(data);
      }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
          Bienvenido a la Página de Tareas
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            <input type="text" placeholder="Title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            {...register("title", { required: "El nombre es obligatorio" })}
            />
            <textarea placeholder="Description" rows="3" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            {...register("description", { required: "La descripcion es obligatoria" })}
            ></textarea>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Crear Tarea
            </button>

        </form>


      </div>
    </div>
  );
}
export default TasksFormPage;