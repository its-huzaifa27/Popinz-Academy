import express from 'express';
import { getCourses, getCourseById } from '../controllers/courseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getCourses);

// Notes: We use 'protect' middleware here but loosely. 
// In the controller, we handle the case if req.user is missing (guest).
// However, 'protect' usually BLOCKS guests. 
// Creating a "optionalProtect" middleware might be better, OR we just let the frontend handle the token if present.
// For now, let's make it Public but if you send a token, we parse it.
// Actually, 'protect' throws 401 if no token. So we need a hybrid approach.
// For simplicity: The Detail Page will likely ALWAYS require login to even SEE if it's locked/unlocked?
// If yes, keeps it protected. If public can see details (but locked video), we need loose auth.
// Let's assume Public can see details.

// We will implement a custom middleware for "optional auth" inside the controller or a helper.
// For this MVP step, let's just make the route public, but if headers has token, we decode it manually in controller or use a modified middleware.
// Better approach: Two routes? No.
// Let's stick to: Frontend sends token if user is logged in. Backend middleware 'optionalProtect'.

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

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

router.get('/:id', optionalProtect, getCourseById);

export default router;
