import React, { useEffect } from "react";

// import api
import { registrarUsuario } from "../api/auth";

import { useAuth } from "../context/AuthContext";

import { useForm } from "react-hook-form";
import { use } from "react";

import { useNavigate } from "react-router";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup , user , isAuthenticated , errors: RegisterError} = useAuth()
    const navigate = useNavigate()

    console.log(user)

    const onSubmit = (data) => {
        console.log(data);
        signup(data)
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/tasks");
        }
    }, [isAuthenticated]);
    console.log(RegisterError , " RegisterError")
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {
      RegisterError && RegisterError.map((error,i) => ( <div className="bg-red-500 p-2 text-white" key={i}>

        {error}

      </div> ) ) 
      }
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-300 mb-6 text-center">
          Crear Cuenta
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit( onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
              {...register("username", { required: "El nombre es obligatorio" })}
            />
            {errors.username && <span className="text-red-500">{errors.username.message}</span>}
          </div>
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
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-indigo-400 hover:underline">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;