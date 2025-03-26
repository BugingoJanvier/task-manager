import express from 'express';
import { getTasks , getOneTask} from '../controllers/tasks.js';

const router = express.Router();

// Logic to get all tasks
router.get('/', (req, res) => 
            {
            res.json(getTasks());
            } // Return all tasks
           );  

// Get a single task by ID
router.get('/:id', (req, res) => 
            {
            const id = parseInt(req.params.id, 10); // Convert ID to a number
            const task = getOneTask(id); // Get the task by ID
            if (!task) { return res.status(404).json({ message: "Task not found" }); } // Return a 404 Not Found error
            res.json(task);  // Return the task
            }
        );

export default router;


