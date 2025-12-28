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
        mode: {
            type: String,
            enum: ['Online', 'Offline'],
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        syllabus: [
            {
                type: String,
            },
        ],
        videoUrl: {
            type: String, // This will be the YouTube Unlisted ID or URL
            required: true,
            select: false, // Don't return this by default!
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
