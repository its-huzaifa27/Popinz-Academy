import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { coursesData } from "../data/coursesData";

export default function EnrollPage() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem("authToken"));
    const [course, setCourse] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setToken(null);
        navigate('/');
    };

    useEffect(() => {
        if (courseId) {
            const selectedCourse = coursesData.find(c => c.id === parseInt(courseId));
            if (selectedCourse) {
                setCourse(selectedCourse);
            }
        }
    }, [courseId]);

    // Redirect to login if not authenticated
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="enroll"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                        >
                            {course ? (
                                <>
                                    {/* Left: Course Summary Card */}
                                    <div className="lg:col-span-1">
                                        <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-red-50 sticky top-32">
                                            <div className="h-48 rounded-[2rem] overflow-hidden mb-6">
                                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                            </div>
                                            <h2 className="text-2xl font-black text-[#4E342E] mb-2">{course.title}</h2>
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                    {course.category}
                                                </span>
                                                <span className="text-gray-400 text-sm font-medium">• {course.duration}</span>
                                            </div>
                                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-400 font-black uppercase text-xs tracking-widest">Online</span>
                                                    <span className="text-2xl font-black text-[#4E342E]">₹{course.pricing.online}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-400 font-black uppercase text-xs tracking-widest">Offline</span>
                                                    <span className="text-2xl font-black text-red-500">₹{course.pricing.offline}</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleLogout}
                                                className="w-full mt-8 text-gray-400 font-bold hover:text-red-500 transition-colors text-sm cursor-pointer"
                                            >
                                                Sign out from Academy
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right: Detailed Form */}
                                    <div className="lg:col-span-2">
                                        <div className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-2xl border border-red-50">
                                            <h2 className="text-4xl font-black text-[#4E342E] mb-2">Secure Your Spot</h2>
                                            <p className="text-gray-500 font-medium mb-8">Enrolling in: <span className="text-red-500 font-bold">{course.title}</span></p>

                                            <form className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Mode of Learning</label>
                                                        <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium appearance-none cursor-pointer">
                                                            <option value="online">Online Class (₹{course.pricing.online})</option>
                                                            <option value="offline">Offline Class (₹{course.pricing.offline})</option>
                                                        </select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Phone Number</label>
                                                        <input
                                                            type="tel"
                                                            placeholder="+91 00000 00000"
                                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Current Baking Skill Level</label>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        {['Beginner', 'Hobbyist', 'Pro'].map(level => (
                                                            <label key={level} className="relative cursor-pointer">
                                                                <input type="radio" name="level" className="sr-only peer" />
                                                                <div className="text-center py-4 rounded-2xl bg-gray-50 border border-transparent peer-checked:bg-red-50 peer-checked:border-red-500 peer-checked:text-red-500 font-bold transition-all">
                                                                    {level}
                                                                </div>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Special Notes / Allergies</label>
                                                    <textarea
                                                        rows="3"
                                                        placeholder="Tell us anything we should know..."
                                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium resize-none"
                                                    ></textarea>
                                                </div>

                                                <div className="bg-amber-50 p-6 rounded-3xl flex gap-4 items-start">
                                                    <div className="mt-1 text-amber-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-amber-800 text-sm font-medium leading-relaxed">
                                                        Payment will be processed during the first session at our academy.
                                                        Enrollment here only reserves your seat in the preferred batch.
                                                    </p>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="w-full bg-[#4E342E] text-white py-5 rounded-2xl font-black text-lg hover:bg-black shadow-xl transition-all active:scale-95 cursor-pointer"
                                                >
                                                    Confirm Enrollment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="lg:col-span-3 text-center py-20 bg-white rounded-[3rem] shadow-xl border border-red-50">
                                    <h2 className="text-3xl font-black text-[#4E342E] mb-4">You're logged in!</h2>
                                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Please go back to the courses page and select a course you'd like to enroll in.</p>
                                    <button
                                        onClick={() => navigate('/all-courses')}
                                        className="bg-red-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-red-600 transition-all shadow-lg active:scale-95 cursor-pointer"
                                    >
                                        Browse Courses
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
