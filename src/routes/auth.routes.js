import {Router} from 'express';

import { login ,register ,logout} from '../controllers/auth.controller.js';

const Routes = Router();

Routes.post('/login' , login);
Routes.post('/register', register);
Routes.post('/logout', logout);

export default Routes;