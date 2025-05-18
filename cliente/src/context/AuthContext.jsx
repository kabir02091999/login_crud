import { createContext, useState , useContext } from "react";
import { registrarUsuario ,iniciarSesion} from "../api/auth";
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
      console.log(error.response.data, " singup")
      setError(error.response.data)
      
    }
  } 
  
  const iniciasecion = async (user) => {
    try {
      const response = await iniciarSesion(user)
      console.log(response)
      setUser(response.data)
      setIsAuthenticated(true)
      setError(null)
    } catch (error) {
      console.log(error.response.data, " inicion de sesion")
      setError(error.response.data)    
    }
  }

  return (
    <AuthContext.Provider value={{ signup, user , isAuthenticated , iniciasecion , error }}>
      {children}
    </AuthContext.Provider>
  )
}

