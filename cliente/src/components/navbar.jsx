import React from "react";

function Navbar() {
  

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-md"> {/* <--- CLASES CLAVE AQUÍ */}
      <div className="container mx-auto flex justify-between items-center">
        
        <a href="/" className="text-white text-lg font-bold">Task Manager</a>
        
        
        <div className="space-x-4">
          
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/tasks" className="text-gray-300 hover:text-white">Tasks</a>
          <a href="/profile" className="text-gray-300 hover:text-white">Profile</a>
          <a href="/logout" className="text-gray-300 hover:text-white">Logout</a>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;