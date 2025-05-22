/* import { createContext, useState , useContext , useEffect } from "react";
import { registrarUsuario ,iniciarSesion, VerificarToken} from "../api/auth";
import { set } from "mongoose";

import cookie from 'js-cookie';
import { use } from "react";

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

  useEffect(() => {
    const token = cookie.get('token')
    console.log(token , " token")
    if(token) {
      VerificarToken()
        .then((response) => {
          setUser(response.data)
          setIsAuthenticated(true)
        })
        .catch((error) => {
          console.log(error)
          setIsAuthenticated(false)
        })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signup, user , isAuthenticated , iniciasecion , error }}>
      {children}
    </AuthContext.Provider>
  )
} */

  // src/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import { registrarUsuario, iniciarSesion, VerificarToken } from "../api/auth";

import cookie from 'js-cookie';


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]); // Cambiado a 'errors' y siempre un array
    const [loading, setLoading] = useState(true); // <--- **AÑADIDO: Estado de carga**

    const signup = async (userData) => {
        try {
            const response = await registrarUsuario(userData);
            setUser(response.data);
            setIsAuthenticated(true);
            setErrors([]); // Limpiar errores en caso de éxito
            // Aquí deberías guardar la cookie si tu API la devuelve y no la gestiona automáticamente
            // cookie.set('token', response.data.token, { expires: 7 });
        } catch (error) {
            console.error(error.response?.data || "Error en signup"); // Mejor log
            // Manejo de errores más robusto:
            if (error.response && error.response.data) {
                if (Array.isArray(error.response.data)) {
                    setErrors(error.response.data);
                } else if (error.response.data.message) {
                    setErrors([error.response.data.message]);
                } else {
                    setErrors(['Ocurrió un error en el registro.']);
                }
            } else {
                setErrors(['Error de red o desconocido en el registro.']);
            }
            setIsAuthenticated(false);
        }
    };

    const iniciasecion = async (credentials) => { // Cambiado a 'credentials'
        try {
            const response = await iniciarSesion(credentials);
            console.log(response, " response inicio de sesion");
            setUser(response.data);
            setIsAuthenticated(true);
            setErrors([]); // Limpiar errores en caso de éxito
            // Asumiendo que tu backend ya configura la cookie 'token'
        } catch (error) {
            console.error(error.response?.data || "Error en inicio de sesion"); // Mejor log
            if (error.response && error.response.data) {
                if (Array.isArray(error.response.data)) {
                    setErrors(error.response.data);
                } else if (error.response.data.message) {
                    setErrors([error.response.data.message]);
                } else {
                    setErrors(['Credenciales inválidas.']);
                }
            } else {
                setErrors(['Error de red o desconocido al iniciar sesión.']);
            }
            setIsAuthenticated(false);
        }
    };

    // Función de logout
    const logout = () => {
        cookie.remove('token'); // Eliminar la cookie
        setUser(null);
        setIsAuthenticated(false);
        setErrors([]);
    };

    useEffect(() => {
        async function checkLoginStatus() {
            try {
                setLoading(true); // <--- **Inicio de carga**
                const token = cookie.get('token');
                console.log(token, " token de la cookie");

                if (!token) {
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false); // <--- **Fin de carga si no hay token**
                    return;
                }

                // Si hay un token, intenta verificarlo
                const response = await VerificarToken();
                console.log(response.data, " respuesta de VerificarToken");

                if (response.data) { // Asumiendo que response.data contiene la información del usuario
                    setUser(response.data);
                    setIsAuthenticated(true);
                } else {
                    // Si el token no es válido o la respuesta no trae datos
                    setIsAuthenticated(false);
                    setUser(null);
                    cookie.remove('token'); // Eliminar token inválido
                }
            } catch (error) {
                console.error("Error al verificar token:", error);
                setIsAuthenticated(false);
                setUser(null);
                cookie.remove('token'); // Eliminar token inválido en caso de error
            } finally {
                setLoading(false); // <--- **Fin de carga SIEMPRE**
            }
        }
        checkLoginStatus();
    }, []); // Se ejecuta solo una vez al montar

    return (
        <AuthContext.Provider value={{ signup, user, isAuthenticated, iniciasecion, errors, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

