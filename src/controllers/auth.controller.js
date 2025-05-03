import User from '../models/user.model.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password
    });

    await newUser.save();

    // Envía una respuesta de éxito *después* de guardar el usuario
    res.status(201).json({ message: 'Usuario registrado exitosamente', user: { id: newUser._id, username: newUser.username, email: newUser.email } });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
  }
};
export const login = (req, res) => { res.send('login 1')}   