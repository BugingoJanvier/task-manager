// /controllers/tasks.js
import { tasks } from '../data/task.js'; // Ensure the path is correct



function getTasks() {
    return tasks;
}

export { getTasks };