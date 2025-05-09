import task from '../models/task.model.js';

export const getTasks = async (req, res) => { 
    const tasks = await task.find({ user: req.user.id }).populate('user');
    res.json(tasks);
}

export const getTask = async (req, res) => {
    const taskFound = await task.findById(req.params.id).populate('user');
    if (!taskFound) return res.status(404).json({ message: 'Task not found' });
    res.json(taskFound);
}

export const createTask = async (req, res) => {
    const { title, description ,date } = req.body;
    const newTask = new task({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
}

export const updateTask = async (req, res) => {
    const taskUpdated = await task.findByIdAndUpdate(req.params.id, req.body , {new: true});
    if (!taskUpdated) return res.status(404).json({ message: 'Task not found' });
    res.json(taskUpdated);
}
export const deleteTask = async (req, res) => {
    const taskDeleted = await task.findByIdAndDelete(req.params.id);
    if (!taskDeleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
}