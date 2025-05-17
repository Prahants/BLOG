import express from 'express';
import cors from 'cors';
import authRoutes from './controllers/auth.js'; // Ensure the correct path to auth.js

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin (frontend)
}));

// Use the auth routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(8800, () => {
  console.log('Server is running on port 8800');
});