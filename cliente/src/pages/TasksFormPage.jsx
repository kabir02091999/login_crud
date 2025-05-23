import react, {useState} from "react";
import { useTasks } from "../context/TasksContext";

import { useForm } from "react-hook-form";

import Navbar from "../components/navbar";

import { useNavigate, useParams } from "react-router";
import { set } from "mongoose";

function TasksFormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { tasks ,   CreateTask , EditTask } = useTasks();
    const { id } = useParams();
    const [idTask, setIdTask] = useState(id);


     const navigate = useNavigate()
    /* console.log(tasks, "tasks"); */
    const onSubmit = (data) => {
        //console.log(tasks);
        // Aquí puedes enviar los datos al servidor o realizar cualquier otra acción
        console.log(id, "identi");
        
        if(!idTask){

          CreateTask(data);
          navigate("/tasks");
          console.log("agrego tarea")

        }else{

          console.log("edito tarea")
          EditTask(idTask, data)
        
          navigate("/tasks");
        }
        
      }

  return (
    <div>
      <Navbar/>
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
                {!idTask ? "Crear Tarea" : "Editar Tarea"}
              </button>

          </form>


        </div>
      </div>
    </div>
  );
}
export default TasksFormPage;