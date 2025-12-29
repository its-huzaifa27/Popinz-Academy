import express from 'express';
import { getCourses, getCourseById, enrollCourse, createCourse, deleteCourse, manualEnrollCourse } from '../controllers/courseController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

const optionalProtect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
        } catch (error) {
            console.error("Token failed but allowing public access");
        }
    }
    next();
};

router.post('/enroll', protect, enrollCourse);
router.post('/enroll-manual', protect, admin, manualEnrollCourse);
router.post('/', protect, admin, createCourse);
router.delete('/:id', protect, admin, deleteCourse);
router.get('/', getCourses);
router.get('/:id', optionalProtect, getCourseById);

export default router;
