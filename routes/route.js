import express from 'express';
import { getTasks, getOneTask, createTask, updateTask } from '../controllers/tasks.js';
import bodyParser from 'body-parser';

const router = express.Router(); // Initialize the router

// Only use the body-parser for POST, PUT, or PATCH requests that involve data
router.use(bodyParser.json());  // Apply bodyParser middleware to handle JSON data (needed for POST/PUT routes)

// Logic to get all tasks
router.get('/', (req, res) => {
    res.json(getTasks());
});

// Get a single task by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Convert ID to a number
    const task = getOneTask(id); // Get the task by ID
    if (!task) {
        return res.status(404).json({ message: "Task not found" }); // Return a 404 Not Found error if task doesn't exist
    }
    res.json(task);  // Return the task
});

// Logic to create a task
router.post('/', (req, res) => {
    const task = req.body;
    createTask(task);
    res.json(task);
});

// Logic to update a task
router.put('/update/:id', (req, res) => {

    const id = parseInt(req.params.id, 10); // Convert ID to a number
    const { completed } = req.body; // Get the completed status from the request body
    const task = updateTask(id, completed); // Update the task
    if (!task) {
        return res.status(404).json({ message: "Task not found" }); // Return a 404 Not Found error if task doesn't exist
    }
    res.json(task); // Return the updated task
    
});


export default router;
