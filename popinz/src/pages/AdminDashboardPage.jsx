import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";

export default function AdminDashboardPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("users");
    const [users, setUsers] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [token] = useState(localStorage.getItem("authToken"));

    // Form States
    const [newCourse, setNewCourse] = useState({
        title: "",
        image: "",
        description: "",
        category: "",
        duration: "",
        onlinePrice: "",
        offlinePrice: ""
    });
    const [enrollData, setEnrollData] = useState({ userId: "", courseId: "" });

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        fetchInitialData();
    }, [navigate, token]);

    const fetchInitialData = async () => {
        try {
            // Check Admin Status & Fetch Users
            const userRes = await fetch('http://localhost:5000/api/users', {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (!userRes.ok) {
                alert("Access Denied: Admins Only");
                navigate('/dashboard');
                return;
            }

            const userData = await userRes.json();
            setUsers(userData);

            // Fetch Courses
            const courseRes = await fetch('http://localhost:5000/api/courses');
            const courseData = await courseRes.json();
            setCourses(courseData);

        } catch (error) {
            console.error("Error fetching admin data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateCourse = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(newCourse)
            });

            if (res.ok) {
                alert("Course Created Successfully!");
                setNewCourse({ title: "", image: "", description: "", category: "", duration: "", onlinePrice: "", offlinePrice: "" });
                fetchInitialData(); // Refresh list
            } else {
                alert("Failed to create course");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteCourse = async (id) => {
        if (!window.confirm("Are you sure? This action cannot be undone.")) return;

        try {
            const res = await fetch(`http://localhost:5000/api/courses/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.ok) {
                alert("Course Deleted!");
                fetchInitialData();
            } else {
                alert("Failed to delete course");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleManualEnroll = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/courses/enroll-manual', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(enrollData)
            });

            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                setEnrollData({ userId: "", courseId: "" });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div className="bg-[#FFF8F0] min-h-screen flex items-center justify-center">
                <div className="text-[#4E342E] font-bold text-xl">Loading Admin Panel...</div>
            </div>
        );
    }

    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-black text-[#4E342E]">
                        Admin <span className="text-red-500">Dashboard</span> 🛡️
                    </h1>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="px-6 py-2 bg-white text-gray-500 font-bold rounded-xl hover:text-[#4E342E] transition-colors"
                    >
                        Back to Student View
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
                    {['users', 'courses', 'enrollment'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-2xl font-black uppercase tracking-wider text-sm transition-all whitespace-nowrap ${activeTab === tab
                                    ? "bg-[#4E342E] text-white shadow-lg scale-105"
                                    : "bg-white text-gray-400 hover:bg-red-50 hover:text-red-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-red-50 min-h-[500px]">

                    {/* USERS TAB */}
                    {activeTab === 'users' && (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="p-4 text-gray-400 font-black text-xs uppercase tracking-widest">Name</th>
                                        <th className="p-4 text-gray-400 font-black text-xs uppercase tracking-widest">Email</th>
                                        <th className="p-4 text-gray-400 font-black text-xs uppercase tracking-widest">Role</th>
                                        <th className="p-4 text-gray-400 font-black text-xs uppercase tracking-widest">Enrolled</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {users.map(u => (
                                        <tr key={u._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-bold text-[#4E342E]">{u.fullName}</td>
                                            <td className="p-4 text-gray-500">{u.email}</td>
                                            <td className="p-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${u.role === 'admin' ? 'bg-purple-100 text-purple-600' : 'bg-blue-50 text-blue-500'
                                                    }`}>
                                                    {u.role}
                                                </span>
                                            </td>
                                            <td className="p-4 font-bold text-red-500">{u.enrolledCourses?.length || 0}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* COURSES TAB */}
                    {activeTab === 'courses' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* List */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-black text-[#4E342E] mb-6">Existing Courses</h3>
                                {courses.map(course => (
                                    <div key={course._id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl items-center group">
                                        <img src={course.image} alt="" className="w-16 h-16 rounded-xl object-cover" />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-[#4E342E]">{course.title}</h4>
                                            <span className="text-xs font-bold text-gray-400 uppercase">{course.category}</span>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteCourse(course._id)}
                                            className="p-2 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors shadow-sm"
                                            title="Delete Course"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Create Form */}
                            <div>
                                <h3 className="text-2xl font-black text-[#4E342E] mb-6">Create New Course</h3>
                                <form onSubmit={handleCreateCourse} className="space-y-4">
                                    <input type="text" placeholder="Course Title" required
                                        className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                                        value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })}
                                    />
                                    <input type="text" placeholder="Image URL (e.g. /images/cake.jpg)" required
                                        className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                                        value={newCourse.image} onChange={e => setNewCourse({ ...newCourse, image: e.target.value })}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Category" required
                                            className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                                            value={newCourse.category} onChange={e => setNewCourse({ ...newCourse, category: e.target.value })}
                                        />
                                        <input type="text" placeholder="Duration (e.g. 4 Weeks)" required
                                            className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                                            value={newCourse.duration} onChange={e => setNewCourse({ ...newCourse, duration: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="number" placeholder="Online Price (₹)" required
                                            className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                                            value={newCourse.onlinePrice} onChange={e => setNewCourse({ ...newCourse, onlinePrice: e.target.value })}
                                        />
                                        <input type="number" placeholder="Offline Price (₹)" required
                                            className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                                            value={newCourse.offlinePrice} onChange={e => setNewCourse({ ...newCourse, offlinePrice: e.target.value })}
                                        />
                                    </div>
                                    <textarea placeholder="Description" required rows="3"
                                        className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                        value={newCourse.description} onChange={e => setNewCourse({ ...newCourse, description: e.target.value })}
                                    ></textarea>
                                    <button type="submit" className="w-full bg-[#4E342E] text-white py-4 rounded-xl font-black text-lg hover:bg-black transition-colors cursor-pointer">
                                        Create Course
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* ENROLLMENT TAB */}
                    {activeTab === 'enrollment' && (
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-2xl font-black text-[#4E342E] mb-8">Manual Enrollment</h3>
                            <form onSubmit={handleManualEnroll} className="space-y-6">
                                <div className="text-left">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-2 mb-2 block">Select Student</label>
                                    <select
                                        className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                                        value={enrollData.userId} onChange={e => setEnrollData({ ...enrollData, userId: e.target.value })}
                                        required
                                    >
                                        <option value="">-- Choose User --</option>
                                        {users.map(u => (
                                            <option key={u._id} value={u._id}>{u.fullName} ({u.email})</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="text-left">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-2 mb-2 block">Select Course</label>
                                    <select
                                        className="w-full p-4 bg-gray-50 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                                        value={enrollData.courseId} onChange={e => setEnrollData({ ...enrollData, courseId: e.target.value })}
                                        required
                                    >
                                        <option value="">-- Choose Course --</option>
                                        {courses.map(c => (
                                            <option key={c._id} value={c._id}>{c.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#E53935] text-white py-4 rounded-xl font-black text-lg hover:bg-red-600 transition-colors shadow-lg cursor-pointer">
                                    Enroll Student Instantly
                                </button>
                            </form>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
