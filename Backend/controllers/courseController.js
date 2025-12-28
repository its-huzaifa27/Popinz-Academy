import Course from '../models/Course.js';

// @desc    Fetch all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public/Private (Protected Content)
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            // Logic: If user is "enrolled" or "admin", return videoUrl
            // For now, checks if user is Admin or in Special List (from Middleware)
            // Later, we add "Enrolled" check here.

            let isEnrolled = false;

            // Check if user is logged in
            if (req.user) {
                // Check if Admin
                if (req.user.role === 'admin') isEnrolled = true;

                // Check if enrolled (Future logic)
                // if(req.user.enrolledCourses.includes(course._id)) isEnrolled = true;

                // Check "Test User" override
                if (process.env.ADMIN_EMAILS && process.env.ADMIN_EMAILS.split(',').includes(req.user.email)) {
                    isEnrolled = true;
                }
            }

            if (isEnrolled) {
                // Return course WITH videoUrl
                const fullCourse = await Course.findById(req.params.id).select('+videoUrl');
                res.json({ ...fullCourse.toObject(), isLocked: false });
            } else {
                // Return course WITHOUT videoUrl (public info only)
                res.json({ ...course.toObject(), videoUrl: null, isLocked: true });
            }
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getCourses, getCourseById };
