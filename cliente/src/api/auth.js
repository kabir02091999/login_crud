import axios from './axios.js'

export const registrarUsuario = user => axios.post(`/register`, user);
export const iniciarSesion = user => axios.post(`/login`, user);
export const VerificarToken = () => axios.get(`/verify-token`);

