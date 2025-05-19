import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import { AuthProvider } from "./context/AuthContext";

// Importing pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksFormPage from "./pages/TasksFormPage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRouer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/> } />
          <Route path="/register" element={<RegisterPage/>} />
          
          <Route element={<ProtectedRoute/>}> 
            <Route path="/tasks" element={<TasksPage/>  } />
            <Route path="/add-task" element={<TasksFormPage/>} />
            <Route path="/tasks/:id" element={<TasksFormPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Route>
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;