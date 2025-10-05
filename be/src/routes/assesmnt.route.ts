import express from 'express';
import { createAssessment, getAllAssessments } from '../controllers/assessment.controller';
import upload from '../middlewares/multer';

const authRouter = express.Router();