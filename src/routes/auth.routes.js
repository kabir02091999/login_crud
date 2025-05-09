import {Router} from 'express';

import { login ,register ,logout , profile , Tasks} from '../controllers/auth.controller.js';

import { authRequired } from '../middlewares/validateToke.js';
import {validateSchema} from '../middlewares/validator.middleware.js';
import {registerSchema , loginSchema} from '../schemas/auth.schema.js';


const Routes = Router();

Routes.post('/login' , validateSchema(loginSchema) , login);
Routes.post('/register', validateSchema(registerSchema) , register);
Routes.post('/logout', logout);
Routes.get('/profile', authRequired ,profile);
/* Routes.get('/tasks', authRequired , Tasks); */


export default Routes;