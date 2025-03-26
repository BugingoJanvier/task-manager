import express from 'express';
import { getTasks } from '../controllers/tasks.js';


const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API');
});

// Logic to get all tasks
router.get('/tasks', (req, res) => {
    res.json(getTasks());
});

export default router;


