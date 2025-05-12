import React from "react";

// import api
import { registrarUsuario } from "../api/auth";

import { useForm } from "react-hook-form";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Aquí puedes manejar el registro del usuario, como enviar los datos a una API
        registrarUsuario(data)
            .then((response) => {
                console.log("Usuario registrado:", response.data);
                // Redirigir o mostrar un mensaje de éxito
            })
            .catch((error) => {
                console.error("Error al registrar el usuario:", error);
                // Manejar el error, como mostrar un mensaje de error
            });
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
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
                {...register("username", { required: true })}
                required
            />
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
                {...register("email", { required: true })}
              required
            />
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
                {...register("password", { required: true })}
              required
            />
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