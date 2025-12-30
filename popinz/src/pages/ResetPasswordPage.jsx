import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { API_URL } from "../config";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch(`${API_URL}/api/auth/reset-password/${token}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Password reset successful! Please login.");
                navigate('/login');
            } else {
                setMessage(data.message || "Reset failed");
            }
        } catch (error) {
            setMessage("Error connecting to server.");
        } finally {
            setLoading(false);
        }
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
                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-black text-[#4E342E] mb-2">
                                        Reset Password
                                    </h2>
                                    <p className="text-gray-500 font-medium">
                                        Enter your new password below.
                                    </p>
                                </div>

                                {message && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center mb-4 font-medium">
                                        {message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">New Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="••••••••"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Confirm Password</label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                            placeholder="••••••••"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-red-500 focus:outline-none transition-all font-medium"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#E53935] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#D32F2F] shadow-xl hover:shadow-red-500/20 transition-all active:scale-95 cursor-pointer mt-4"
                                    >
                                        {loading ? "Resetting..." : "Set New Password"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
