import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['Foundation', 'Advance'],
            required: true,
        },
        level: {
            type: String,
            required: true,
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
        price_online: {
            type: Number,
            required: true,
        },
        price_offline: {
            type: Number,
            required: true,
        },
        syllabus: [
            {
                title: { type: String, required: true },
                image: { type: String, required: true },
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
