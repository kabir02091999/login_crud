import { createContext, useState , useContext } from "react";
import { registrarUsuario } from "../api/auth";
import { set } from "mongoose";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState([])

  const signup = async (user) => {
    try {
      const response = await registrarUsuario(user)
      setUser(response.data)
      setIsAuthenticated(true)
      setError(null)
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data)
      
    }
  }        

  return (
    <AuthContext.Provider value={{ signup, user , isAuthenticated , error }}>
      {children}
    </AuthContext.Provider>
  )
}

