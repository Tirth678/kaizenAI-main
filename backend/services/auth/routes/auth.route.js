import express from 'express';
import { loginUser, logoutUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', loginUser)
router.get('/logout', logoutUser)

export default router;