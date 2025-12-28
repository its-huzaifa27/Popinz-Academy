import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "../components/Header";

export default function DashboardPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    localStorage.removeItem("authToken");
                    navigate('/login');
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    if (loading) {
        return (
            <div className="bg-[#FFF8F0] min-h-screen flex items-center justify-center">
                <div className="text-[#4E342E] font-bold text-xl">Loading your goodies...</div>
            </div>
        );
    }

    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Welcome Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-[#4E342E] mb-4">
                        Welcome back, <span className="text-[#E53935]">{user?.fullName.split(' ')[0]}</span>! 👋
                    </h1>
                    <p className="text-xl text-gray-500 font-medium">
                        Ready to bake something amazing today?
                    </p>
                </motion.div>

                {/* Enrolled Courses Grid */}
                <h2 className="text-2xl font-black text-[#4E342E] mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#E53935] rounded-full block"></span>
                    Your Enrolled Courses
                </h2>

                {user?.enrolledCourses && user.enrolledCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {user.enrolledCourses.map((course, index) => (
                            <motion.div
                                key={course._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                                onClick={() => navigate(`/course-content/${course._id}`)}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 inline-block">
                                        {course.category}
                                    </span>
                                    <h3 className="text-xl font-black text-[#4E342E] mb-2 group-hover:text-[#E53935] transition-colors">
                                        {course.title}
                                    </h3>
                                    <button className="w-full mt-4 bg-[#4E342E] text-white py-3 rounded-xl font-bold hover:bg-[#E53935] transition-colors">
                                        Continue Learning
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white rounded-[2rem] p-12 text-center border-2 border-dashed border-gray-200"
                    >
                        <div className="text-6xl mb-4">🧁</div>
                        <h3 className="text-2xl font-black text-[#4E342E] mb-2">No Courses Yet</h3>
                        <p className="text-gray-500 font-medium mb-8 max-w-md mx-auto">
                            You haven't enrolled in any courses yet. Check out our catalog to start your journey!
                        </p>
                        <button
                            onClick={() => navigate('/all-courses')}
                            className="bg-[#E53935] text-white px-8 py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Browse All Courses
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
