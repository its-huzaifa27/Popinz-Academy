import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "../components/Header";

export default function SignupPage() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const fakeToken = "mock_token_123";
        localStorage.setItem("authToken", fakeToken);
        navigate('/all-courses');
    };

    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md mx-auto"
                    >
                        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-red-50 relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-black text-[#4E342E] mb-2">
                                        Join the Academy
                                    </h2>
                                    <p className="text-gray-500 font-medium">
                                        Create an account to start your journey
                                    </p>
                                </div>

                                <form onSubmit={handleSignup} className="space-y-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="bakery@example.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Password</label>
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#E53935] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#D32F2F] shadow-xl hover:shadow-red-500/20 transition-all active:scale-95 cursor-pointer mt-4"
                                    >
                                        Sign Up Now
                                    </button>
                                </form>

                                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                                    <p className="text-gray-500 font-medium">
                                        Already have an account?
                                        <button
                                            onClick={() => navigate('/login')}
                                            className="ml-2 text-red-500 font-black cursor-pointer hover:underline"
                                        >
                                            Login
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
