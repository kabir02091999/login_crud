import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {crateToken} from '../libs/jwt.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await crateToken({ id : userSaved._id})

    res.cookie('token', token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createAt: userSaved.createdAt,
      upfatedAt: userSaved.updatedAt,     
    });
    
  } catch (error) {
    console.error(error);
  }
};

export const login = (req, res) => {
  res.send('login 1');
};