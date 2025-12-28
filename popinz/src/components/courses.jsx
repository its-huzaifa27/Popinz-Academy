import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../data/coursesData";

export function Courses() {
    const navigate = useNavigate();
    const featuredCourses = coursesData.filter(course => course.featured);

    return (
        <section className="bg-[#4E342E] py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col mb-16 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="pages-headings font-extrabold text-[#F5F5F5] tracking-tight text-emerald-500"
                    >
                        Our Courses
                    </motion.h2>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-white/10 pt-8">
                        <div className="max-w-3xl">
                            <motion.p
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="text-2xl md:text-2xl text-amber-200/90 font-bold leading-relaxed"
                            >
                                Master the art of baking with our expert-led courses. From delicate pastries to show-stopping cakes, we have a class for every skill level.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex-shrink-0"
                        >
                            <button
                                onClick={() => navigate('/all-courses')}
                                className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-bold text-base transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.4)] border-2 border-transparent hover:border-white/20 cursor-pointer whitespace-nowrap"
                            >
                                Explore more courses
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-3 gap-8 w-full">
                    {featuredCourses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: (index + 1) * 0.2 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="bg-[#3E2723] rounded-3xl overflow-hidden h-[550px] shadow-2xl hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] transition-all duration-500 group transform hover:-translate-y-2 border border-white/5 cursor-pointer"
                        >
                            {/* Image - 60% */}
                            <div className="h-[60%] w-full overflow-hidden relative">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] to-transparent opacity-60"></div>
                            </div>

                            {/* Content - 40% */}
                            <div className="h-[40%] p-8 flex flex-col justify-between relative">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#F5F5F5] mb-3 group-hover:text-red-400 transition-colors line-clamp-1">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                                        {course.desc}
                                    </p>
                                </div>
                                <button className="w-full bg-white hover:bg-red-600 hover:text-white text-red-500 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-red-600 cursor-pointer" onClick={() => {navigate('/enroll')}}>
                                    Enroll Now
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
