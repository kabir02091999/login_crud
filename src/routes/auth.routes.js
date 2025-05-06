import {Router} from 'express';

import { login ,register ,logout , profile , Tasks} from '../controllers/auth.controller.js';

import { authRequired } from '../middlewares/validateToke.js';

const Routes = Router();

Routes.post('/login' , login);
Routes.post('/register', register);
Routes.post('/logout', logout);
Routes.get('/profile', authRequired ,profile);
Routes.get('/tasks', authRequired , Tasks);


export default Routes;