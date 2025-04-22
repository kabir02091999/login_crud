import {Router} from 'express';

import { login ,register} from '../controllers/auth.controller.js';

const Routes = Router();

Routes.post('/login' , login);
Routes.post('/register', register);

export default Routes;