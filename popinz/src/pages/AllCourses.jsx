import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Faq } from "../components/Faq";
import { coursesData } from "../data/coursesData";
import { useState } from "react";

const categories = ["All", "Beginner", "Intermediate", "Advanced", "Specialty"];

export default function AllCourses() {
    const [filter, setFilter] = useState("All");
    const navigate = useNavigate();

    const filteredCourses = filter === "All"
        ? coursesData
        : coursesData.filter(course => course.category === filter);

    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            {/* Hero Section - The "Perfected" Side-by-Side Split Layout */}
            <section className="relative pt-24 pb-16 bg-[#4E342E] text-[#FDF5E6] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-left relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-3">
                                Premium Academy
                            </span>
                            <h1 className="pages-headings font-black mb-4 tracking-tight leading-[1] text-white">
                                Explore Our <br />
                                <span className="text-red-500">Academy</span>
                            </h1>
                            <div className="w-16 h-1.5 bg-red-500 mb-6 rounded-full" />
                            <p className="text-lg md:text-xl text-amber-100/80 font-medium max-w-lg leading-relaxed">
                                Whether you're starting your baking journey or refining professional skills, find the perfect class to ignite your passion.
                            </p>

                            {/* Decorative Scribble Underneath Description - Integrated to look more cohesive */}
                            <svg className="w-40 h-8 mt-4 text-red-500/30" viewBox="0 0 200 40">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    d="M10,20 Q100,35 190,15 T370,25"
                                    stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image with 'Drawn' Aesthetic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 relative"
                    >
                        {/* Hand-Drawn Large Orbit/Scribble behind image - Scaled down */}
                        <div className="absolute -inset-8 -z-10 pointer-events-none opacity-20">
                            <svg className="w-full h-full text-white" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.circle
                                    initial={{ pathLength: 0, rotate: -90 }}
                                    animate={{ pathLength: 1, rotate: 0 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    cx="250" cy="250" r="220"
                                    stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1.2 }}
                                    d="M50,450 Q250,550 450,450"
                                    stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        {/* Artistic Irregular Masked Image Container - Resized to max-w-md */}
                        <div className="relative w-full max-w-md mx-auto aspect-[4/5] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] group border-4 border-[#3A251E] 
                            [clip-path:polygon(4%_2%,_98%_6%,_94%_98%,_2%_92%)] hover:[clip-path:polygon(2%_1%,_99%_3%,_96%_99%,_1%_97%)] transition-all duration-700">
                            <img
                                src="/images/coursespageimg/cakebaker3.png"
                                alt="Popinz Academy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Artistic Grunge Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#3A251E]/30 to-transparent pointer-events-none mix-blend-multiply" />
                            <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] pointer-events-none" />
                        </div>

                        {/* Hand-Written Note Badge - Scaled for better fit */}
                        <motion.div
                            initial={{ rotate: -20, scale: 0, x: 40 }}
                            animate={{ rotate: -12, scale: 1, x: 0 }}
                            transition={{ type: "spring", delay: 1.5 }}
                            className="absolute -bottom-6 -left-6 bg-amber-50 text-[#4E342E] p-5 px-8 shadow-[15px_15px_30px_rgba(0,0,0,0.2)] z-30 hidden lg:block border-l-8 border-amber-200"
                        >
                            <p className="font-['Dancing_Script',cursive] text-4xl font-black">9+ Classes</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-50 mt-1">Join the Batch</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Background Ambient Decor - Tightened up */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </section>

            {/* Filter Section */}
            <section className="sticky top-20 z-40 bg-[#FFF8F0]/80 backdrop-blur-md border-b border-[#4E342E]/5 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {["All", "Foundation", "Advance"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-1.5 rounded-full font-bold transition-all duration-300 cursor-pointer ${filter === cat
                                    ? "bg-red-500 text-white shadow-lg scale-105"
                                    : "bg-white text-[#4E342E] hover:bg-red-50 border border-[#4E342E]/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.map((course) => (
                            <motion.div
                                key={course.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#4E342E]/5 h-full"
                            >
                                {/* Image Section */}
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md">
                                        <span className="text-xs font-black text-red-500 uppercase tracking-widest">{course.level}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <p className="font-['Dancing_Script',cursive] text-2xl">{course.tagline}</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-red-500 text-sm font-bold uppercase tracking-widest">{course.category}</p>
                                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">{course.duration}</span>
                                    </div>

                                    <h3 className="text-3xl font-black text-[#4E342E] mb-4 group-hover:text-red-500 transition-colors leading-tight">
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                                        {course.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100 space-y-6">
                                        {/* Pricing Display */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Online</span>
                                                <span className="text-xl font-black text-[#4E342E]">₹{course.pricing.online}/-</span>
                                            </div>
                                            <div className="w-px h-8 bg-gray-200" />
                                            <div className="flex flex-col text-right">
                                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Offline</span>
                                                <span className="text-xl font-black text-[#4E342E]">₹{course.pricing.offline}/-</span>
                                            </div>
                                        </div>

                                        {/* Dual Buttons */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                onClick={() => navigate(`/course-content/${course.id}`)}
                                                className="w-full bg-amber-100 text-[#4E342E] px-4 py-3 rounded-xl font-bold text-sm hover:bg-amber-200 transition-colors active:scale-95 cursor-pointer"
                                            >
                                                View Content
                                            </button>
                                            <button
                                                onClick={() => navigate(`/enroll/${course.id}`)}
                                                className="w-full bg-[#4E342E] text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-red-500 shadow-lg hover:shadow-red-500/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 group/btn"
                                            >
                                                Enroll Now
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            <Faq />
        </div>
    );
}