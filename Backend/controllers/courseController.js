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

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = async (req, res) => {
    try {
        const { title, image, description, category, duration, onlinePrice, offlinePrice } = req.body;

        const course = new Course({
            title,
            image,
            description,
            category,
            duration,
            pricing: {
                online: onlinePrice,
                offline: offlinePrice,
            },
            price: onlinePrice, // Default to online price for sorting/display
            syllabus: [], // Empty initially
        });

        const createdCourse = await course.save();
        res.status(201).json(createdCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            await Course.deleteOne({ _id: req.params.id });
            res.json({ message: 'Course removed' });
        } else {
            res.status(404);
            throw new Error('Course not found');
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Manually enroll a user
// @route   POST /api/courses/enroll-manual
// @access  Private/Admin
const manualEnrollCourse = async (req, res) => {
    const { userId, courseId } = req.body;

    try {
        const user = await User.findById(userId);
        const course = await Course.findById(courseId);

        if (!user || !course) {
            res.status(404);
            throw new Error('User or Course not found');
        }

        if (user.enrolledCourses.includes(courseId)) {
            res.status(400);
            throw new Error('User already enrolled');
        }

        user.enrolledCourses.push(courseId);
        await user.save();

        res.json({ message: `Successfully enrolled ${user.fullName} in ${course.title}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add content/syllabus to a course
// @route   POST /api/courses/:id/content
// @access  Private/Admin
const addCourseContent = async (req, res) => {
    const { title, videoUrl, duration } = req.body;

    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            const newContent = {
                title,
                image: videoUrl || 'placeholder.jpg', // Using videoUrl for image field if no image provided (simplified for now)
                duration: duration || '10 mins'
            };

            // Assuming model has specific fields, but looking at Course.js, syllabus is [{title, image}].
            // We need to adapt. The user wants "Chapters" (Title + Video Link).
            // Let's check the schema again in a moment, but for now we push what we can.
            // Wait, the schema has {title, image} in syllabus. It lacks videoUrl specific to chapter.
            // I will update the schema in the next step to support videoUrl in syllabus items.
            // For now, I'll store videoUrl in the 'image' field or add a new field.

            // Actually, let's update the controller to match the PLANNED schema update.
            course.syllabus.push({
                title,
                image: videoUrl || '', // Storing URL here for now, or we update schema
                type: 'video', // Metadata
                duration
            });

            await course.save();
            res.json({ message: 'Content added', syllabus: course.syllabus });
        } else {
            res.status(404);
            throw new Error('Course not found');
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getCourses, getCourseById, enrollCourse, createCourse, deleteCourse, manualEnrollCourse, addCourseContent };
