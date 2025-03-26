// /controllers/tasks.js
import { tasks } from '../data/task.js'; // Ensure the path is correct


// Logic to get all tasks
function getTasks() {
    return tasks;
}

// Logic to get one task    
function getOneTask(id) {
    return tasks.find((task) => task.id === id);
}


export { getTasks,getOneTask };