import { createContext , useContext, useState} from "react";

//api
import {createTask} from "../api/tasks";

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

  return (
    <tasksContext.Provider value={{ tasks, CreateTask }}> {/* tasks, loading, error */}
      {children}
    </tasksContext.Provider>
  );
}