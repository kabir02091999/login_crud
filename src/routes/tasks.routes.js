import { Router } from "express";
import { authRequired } from "../middlewares/validateToke.js";

const router = Router();

router.get('/tasks', authRequired , (req, res) => {
    res.send('Tasks');
});

export default Router;