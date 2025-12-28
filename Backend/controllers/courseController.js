import User from '../models/User.js';
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
            let isEnrolled = false;

            // Check if user is logged in
            if (req.user) {
                // Check if Admin
                if (req.user.role === 'admin') isEnrolled = true;

                // Check if enrolled
                if (req.user.enrolledCourses && req.user.enrolledCourses.includes(course._id)) {
                    isEnrolled = true;
                }

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
                // Return course WITHOUT videoUrl
                res.json({ ...course.toObject(), videoUrl: null, isLocked: true });
            }
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Enroll in a course
// @route   POST /api/courses/enroll
// @access  Private
const enrollCourse = async (req, res) => {
    const { courseId } = req.body;

    try {
        const user = await User.findById(req.user._id);

        if (user) {
            const course = await Course.findById(courseId);
            if (!course) {
                res.status(404);
                throw new Error('Course not found');
            }

            // Check if already enrolled
            if (user.enrolledCourses.includes(courseId)) {
                res.status(400);
                throw new Error('User already enrolled in this course');
            }

            user.enrolledCourses.push(courseId);
            await user.save();

            res.json({ message: 'Enrollment successful', enrolled: true });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { getCourses, getCourseById, enrollCourse };
