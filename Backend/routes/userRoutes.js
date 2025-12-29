import express from 'express';
import { getUserProfile, getAllUsers } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, admin, getAllUsers);
router.get('/profile', protect, getUserProfile);

export default router;
