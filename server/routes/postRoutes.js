import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
dotenv.config();
import PostSchema from '../mongodb/models/post.js';

const router = express.Router();

export default router;