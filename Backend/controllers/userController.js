import User from '../models/User.js';

// @desc    Get user profile (with enrolled courses)
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('enrolledCourses');

        if (user) {
            res.json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                role: (process.env.ADMIN_EMAILS && process.env.ADMIN_EMAILS.split(',').includes(user.email)) ? 'admin' : user.role,
                enrolledCourses: user.enrolledCourses,
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getUserProfile };
