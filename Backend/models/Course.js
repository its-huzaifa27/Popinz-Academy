import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String, // Removed enum for flexibility
            required: true,
        },
        level: {
            type: String,
            default: 'Beginner', // Added default
        },
        tagline: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        pricing: {
            online: { type: Number, required: true },
            offline: { type: Number, required: true },
        },
        price: { // Base price for simplified views
            type: Number,
            required: true,
        },
        syllabus: [
            {
                title: { type: String, required: true },
                image: { type: String, required: false }, // Optional now
                videoUrl: { type: String, required: false }, // Store YouTube link etc.
                duration: { type: String, required: false }
            },
        ],
        videoUrl: {
            type: String,
            required: false, // Optional for now
            select: false,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model('Course', courseSchema);

export default Course;
