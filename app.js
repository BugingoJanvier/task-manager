import express from 'express';
import tasksRoutes from './routes/route.js'; // Ensure this file exists

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/tasks', tasksRoutes); // Routes middleware

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
