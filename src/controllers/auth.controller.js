import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {crateToken} from '../libs/jwt.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["error correo"]);
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
    res.status(500).json({
      message: 'Error creating user',
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const userFound = await User.findOne({ email }); 
        if (!userFound) return res.status(400).json({ message: 'User not found' });
        const isMarch = await bcrypt.compare(password, userFound.password);
        if (!isMarch) return res.status(401).json({ message: 'Invalid credentials' });
        
        const token = await crateToken({ id: userFound._id });

        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt: userFound.createdAt,
            upfatedAt: userFound.updatedAt, 
        });

    }catch (error) {
        res.status(500).json({
            message: 'Error logging in',
            error: error.message,
        });
    }        
};

export const logout =  (req, res) => {

    res.cookie('token', '', {
        expires : new Date(0)
    });

    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    console.log(req.user);
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({ message: 'User not found' });
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createAt: userFound.createdAt,
        upfatedAt: userFound.updatedAt, 
    });
}

export const Tasks = (req, res) => {
    res.send('Tasks');
}