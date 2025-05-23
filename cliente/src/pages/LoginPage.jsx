
// src/pages/LoginPage.jsx
import React , {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
// Importa useLocation para leer el estado de la navegación
import { useNavigate, useLocation } from "react-router-dom"; // Asegúrate de importar desde 'react-router-dom'

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { iniciasecion , user , isAuthenticated , errors: LoginErrors} = useAuth(); // Usar 'errors' si renombraste en AuthContext
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene el objeto de ubicación

  // Accede a la ruta de origen, si existe
  const from = location.state?.from || "/tasks"; // Por defecto a /tasks si no hay ruta previa

  const onSubmit = (data) => {
    console.log(data);
    iniciasecion(data);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true }); // <--- Redirige a 'from'
    }
  }, [isAuthenticated, navigate, from]); // Añade 'from' a las dependencias

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
          Iniciar Sesión
        </h1>
        {
          // Aquí renderizas los errores, asegurándote de que LoginErrors sea un array
          LoginErrors && LoginErrors.length > 0 && (
            <div className="bg-red-500 p-2 text-white">
              {/* Si LoginErrors es un array de strings */}
              {LoginErrors.map((err, i) => (
                <p key={i}>{err}</p>
              ))}
              {/* Si LoginErrors es un objeto con propiedad 'message' */}
              {/* {LoginErrors.message} */}
            </div>
          )
        }
        <form className="space-y-4" onSubmit={handleSubmit( onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
              required
              {...register("email", { required: "El correo electrónico es obligatorio" })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
              required
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="text-indigo-400 hover:underline">
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;