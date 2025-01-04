import express from 'express';
import upload from '../utils/uploads.js';
import { uploadFile, getFile } from '../controller/filecontroller.js';

const router = express.Router();


router.post('/upload', upload.single('file'), uploadFile);
router.get('/file/:fileId', getFile);

export default router;