import { createContext , useContext, useState} from "react";

//api
import {createTask , getTasks , deleteTask} from "../api/tasks";

const tasksContext = createContext();

export const useTasks = () => {
  const context = useContext(tasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
}


export function TasksProvider({ children }) {
  
    const [tasks, setTasks] = useState([]);
    const [errors, setErrors] = useState([]);

  const CreateTask= async (task) => {
    console.log(task, " task")
    createTask(task)
      .then((response) => {
        console.log(response.data, " response")
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.log(error.response.data, " error")
      });
  };

    const getasks = async () => {
        try {
            const response = await getTasks();
            //console.log(response.data, " response");
            setTasks(response.data);
            setErrors([])
        } catch (error) {
            console.error(error.response?.data || error);
            setErrors(error.response?.data?.message || ['Error al cargar las tareas']);
            setTasks([]);
        }
    };
    
    const DeleteTask = async (id) => {
        try {
            const response = await deleteTask(id);
            console.log(response.data, " response");
            setTasks(tasks.filter((task) => task.id !== id));
            setErrors([])
        } catch (error) {
            console.error(error.response?.data || error);
            setErrors(error.response?.data?.message || ['Error al eliminar la tarea']);
        }
    }

  return (
    <tasksContext.Provider value={{ tasks, CreateTask , getasks ,errors,DeleteTask}}> {/* tasks, loading, error */}
      {children}
    </tasksContext.Provider>
  );
}