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

// Additional function for creating a new task (for future)
function createTask(newTask) {
    tasks.push(newTask);
    return newTask;
}


// Logic to update a task
function updateTask(id, updatedtatus) {
    const taskIndex = tasks.findIndex((task) => task.id === id); // Find the index of the task
    
    if (taskIndex === -1) // If the task doesn't exist
         
        return null; // Return null and handle the error in the route
         // Otherwise, update the task

    tasks[taskIndex].completed = updatedtatus; // Update the task's completed status
    return tasks[taskIndex]; // Return the updated task
}

export { getTasks, getOneTask, createTask, updateTask }; // Export all functions for use in routes/routes.js
