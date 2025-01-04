import DBConnection from './database/db.js';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Connect to the database
DBConnection();

// Vercel automatically handles routing and listening, so no need for app.listen().
