import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import tasksRoute from './routes/tasks.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());    

app.use("/api" , authRoutes);
app.use("/api" , tasksRoute);

export default app;

/*  "email": "kabir.11@gmail.com",
        "password":"hola7" */

/* z9lXOWbSmBVr6Fdg */
