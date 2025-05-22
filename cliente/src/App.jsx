import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";

// Importing pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksFormPage from "./pages/TasksFormPage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRouter";

function App() {
  return (
    <AuthProvider>
      
      <TasksProvider>

        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/> } />
            <Route path="/register" element={<RegisterPage/>} />
            
            <Route element={<ProtectedRoute/>}> 
              <Route path="/tasks" element={<TasksPage/>  } />
              <Route path="/add-task" element={<TasksFormPage/>} />
              <Route path="/edit-task/:id" element={<TasksFormPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
            </Route>

          </Routes>
        </Router>

      </TasksProvider>

    </AuthProvider>
  );
}

export default App;