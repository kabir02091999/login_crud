import React , {useEffect} from "react";

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

import { useNavigate } from "react-router";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { iniciasecion , user , isAuthenticated , error: LoginError} = useAuth()
  const navigate = useNavigate()

  const onSubmit = (data) => {
        console.log(data);
        iniciasecion(data);
    }

    useEffect(() => {
            if (isAuthenticated) {
                navigate("/tasks");
            }
        }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
              
        
        <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
          Iniciar Sesión
        </h1>
        {/* {
          LoginError && LoginError.error  &&  LoginError.error.map((error,i) => ( 
            
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error} 
            </div> ) )

        }  */} {
        LoginError && LoginError.message && (
          <div className="bg-red-500 p-2 text-white">
            {LoginError.message}
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