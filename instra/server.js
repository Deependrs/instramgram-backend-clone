import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';

dotenv.config();
connectDB();

const app = express();

// Enable CORS (Cross-Origin Resource Sharing) for all routes
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));