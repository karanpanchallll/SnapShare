import express from 'express';
import cors from 'cors';
import upload from '../utils/uploads.js';  // Ensure the path is correct
import { uploadFile} from '../controller/filecontroller.js';

const app = express();

// Middleware
app.use(cors({
  origin: ['https://snap-share-gold.vercel.app'] // Replace with your frontend's actual URL after deployment
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.post('/upload', upload.single('file'), uploadFile);
//app.get('/file/:fileId', getFile);

// Export the Express app to be handled by Vercel
export default app;
