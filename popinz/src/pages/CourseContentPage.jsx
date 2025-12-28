import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { coursesData } from "../data/coursesData";
import { Header } from "../components/Header";
import { useEffect } from "react";

export default function CourseContentPage() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = coursesData.find((c) => c.id === parseInt(courseId));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
                <h2 className="text-2xl font-black text-[#4E342E]">Course not found! 🍰</h2>
            </div>
        );
    }

    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-12 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-50" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <button
                        onClick={() => navigate('/all-courses')}
                        className="absolute left-0 top-0 p-3 bg-white rounded-full shadow-md text-[#4E342E] hover:bg-red-50 transition-colors cursor-pointer hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>

                    <span className="inline-block px-4 py-1.5 bg-red-100 text-red-500 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                        {course.category} Syllabus
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-[#4E342E] mb-4">
                        What You'll Learn 👩‍🍳
                    </h1>
                    <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
                        Dive into the delicious details of our {course.title}. Get ready to create magic!
                    </p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {course.syllabus.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[2rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#4E342E]/5 group cursor-pointer"
                        >
                            <div className="aspect-square rounded-[1.5rem] overflow-hidden mb-4 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="text-center px-2 pb-2">
                                <h3 className="font-bold text-[#4E342E] text-lg leading-tight group-hover:text-red-500 transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest mb-4 text-xs">Ready to start baking?</p>
                    <button
                        onClick={() => navigate(`/enroll/${course.id}`)}
                        className="bg-[#4E342E] text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-red-500 shadow-xl hover:shadow-red-500/20 transition-all active:scale-95 cursor-pointer flex items-center gap-3 mx-auto"
                    >
                        Enroll in this Course
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button
                        onClick={() => navigate('/all-courses')}
                        className="block mt-6 text-gray-400 font-bold hover:text-red-500 transition-colors mx-auto text-sm"
                    >
                        Back to Courses
                    </button>
                </div>
            </div>
        </div>
    );
}
