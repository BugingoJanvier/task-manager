import express from 'express';
import tasksRoutes from './routes/route.js'; // Ensure this file exists

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', tasksRoutes); // Routes middleware

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
