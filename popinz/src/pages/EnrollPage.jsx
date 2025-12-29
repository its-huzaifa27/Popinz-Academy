import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";

// Mock Payment Methods
const PAYMENT_METHODS = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'upi', name: 'UPI / QR', icon: '📱' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
    { id: 'wallet', name: 'Wallets', icon: '👛' },
    { id: 'cash', name: 'Pay at Academy', icon: '💵' },
];

export default function EnrollPage() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem("authToken"));
    const [course, setCourse] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState('card');
    const [loading, setLoading] = useState(false);

    // Form States
    const [learningMode, setLearningMode] = useState('online');



    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setToken(null);
        navigate('/');
    };

    useEffect(() => {
        if (courseId) {
            const fetchCourse = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setCourse(data);
                    }
                } catch (error) {
                    console.error("Failed to fetch course", error);
                }
            };
            fetchCourse();
        }
    }, [courseId, token]);

    if (!token) return <Navigate to="/login" replace />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Fake processing delay for UX

            const res = await fetch('http://localhost:5000/api/courses/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    courseId: course._id,
                    mode: learningMode, // Assuming backend might accept this later


                })
            });
            const data = await res.json();

            if (res.ok) {
                navigate('/dashboard');
            } else {
                alert(data.message || "Enrollment failed.");
            }
        } catch (err) {
            console.error(err);
            alert("Connection failed.");
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Filter payment methods based on learning mode
    const availablePaymentMethods = PAYMENT_METHODS.filter(method => {
        if (learningMode === 'online' && method.id === 'cash') return false;
        return true;
    });

    // Reset selected method if it becomes unavailable (e.g. switching offline -> online while "cash" is selected)
    useEffect(() => {
        if (learningMode === 'online' && selectedMethod === 'cash') {
            setSelectedMethod('card');
        }
    }, [learningMode, selectedMethod]);

    return (
        <div className="bg-[#FFF8F0] min-h-screen font-sans selection:bg-red-100 selection:text-red-900">
            <Header />

            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {course ? (
                        <motion.div
                            key="content"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                        >

                            {/* Left Column: Payment & Details (8 cols) */}
                            <div className="lg:col-span-8 space-y-6">

                                {/* Header Section */}
                                <motion.div variants={itemVariants} className="mb-6">
                                    <h1 className="text-4xl font-black text-[#4E342E]">Secure Checkout</h1>
                                    <p className="text-[#7D6E68] mt-2 font-medium">Complete your enrollment in a few simple steps.</p>
                                </motion.div>

                                {/* 1. Personal Details & Preferences */}
                                <motion.div variants={itemVariants} className="bg-white rounded-4xl shadow-xl shadow-red-100/50 border border-red-50 p-6 lg:p-10 relative overflow-hidden">
                                    {/* Decorative Blob */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                                    <h2 className="text-2xl font-black text-[#4E342E] mb-8 flex items-center gap-3 relative z-10">
                                        <span className="w-10 h-10 rounded-2xl bg-linear-to-br from-red-400 to-red-600 text-white flex items-center justify-center text-lg shadow-lg shadow-red-200">1</span>
                                        Customize Experience
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                        {/* Learning Mode */}
                                        <div className="space-y-3">
                                            <label className="text-sm font-black text-[#9C8E89] uppercase tracking-wider">Learning Mode</label>
                                            <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#FFF8F0] rounded-2xl border border-[#EFEBE9]">
                                                {['online', 'offline'].map(mode => (
                                                    <button
                                                        key={mode}
                                                        type="button"
                                                        onClick={() => setLearningMode(mode)}
                                                        className={`py-3 px-4 rounded-xl text-sm font-bold capitalize transition-all ${learningMode === mode
                                                            ? 'bg-white text-red-500 shadow-md transform scale-100'
                                                            : 'text-[#9C8E89] hover:text-[#4E342E] scale-95'
                                                            }`}
                                                    >
                                                        {mode} (₹{course.pricing[mode]})
                                                    </button>
                                                ))}
                                            </div>
                                        </div>


                                    </div>


                                </motion.div>

                                {/* 2. Payment Method */}
                                <motion.div variants={itemVariants} className="bg-white rounded-4xl shadow-xl shadow-red-100/50 border border-red-50 p-6 lg:p-10 relative overflow-hidden">
                                    {/* Decorative Blob */}
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                                    <h2 className="text-2xl font-black text-[#4E342E] mb-8 flex items-center gap-3 relative z-10">
                                        <span className="w-10 h-10 rounded-2xl bg-linear-to-br from-red-400 to-red-600 text-white flex items-center justify-center text-lg shadow-lg shadow-red-200">2</span>
                                        Payment Method
                                    </h2>

                                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                        {/* Method Selection Sidebar */}
                                        <div className="md:w-1/3 flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
                                            {availablePaymentMethods.map((method) => (
                                                <button
                                                    key={method.id}
                                                    onClick={() => setSelectedMethod(method.id)}
                                                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all min-w-[160px] md:min-w-0 border-2 ${selectedMethod === method.id
                                                        ? 'bg-red-50 border-red-200 text-red-600 shadow-sm transform scale-[1.02]'
                                                        : 'bg-white border-transparent hover:bg-gray-50 text-[#7D6E68] font-medium'
                                                        }`}
                                                >
                                                    <span className="text-2xl filter drop-shadow-sm">{method.icon}</span>
                                                    <span className="text-sm font-bold">{method.name}</span>
                                                </button>
                                            ))}
                                        </div>

                                        {/* Dynamic Payment Form Area */}
                                        <div className="md:w-2/3 bg-[#FAFAFA] rounded-4xl p-6 lg:p-8 border border-gray-100 min-h-[320px] flex flex-col justify-center">
                                            <AnimatePresence mode="wait">
                                                {selectedMethod === 'card' && (
                                                    <motion.div
                                                        key="card"
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -10 }}
                                                        className="space-y-5 w-full"
                                                    >
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black text-[#9C8E89] uppercase tracking-wider">Card Number</label>
                                                            <div className="relative group">
                                                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all font-mono text-[#4E342E] font-bold placeholder:font-normal" />
                                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-400 transition-colors">💳</span>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <label className="text-xs font-black text-[#9C8E89] uppercase tracking-wider">Expiry</label>
                                                                <input type="text" placeholder="MM/YY" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all font-mono text-[#4E342E] font-bold text-center placeholder:font-normal" />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-xs font-black text-[#9C8E89] uppercase tracking-wider">CVC</label>
                                                                <input type="password" placeholder="123" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all font-mono text-[#4E342E] font-bold text-center placeholder:font-normal" />
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black text-[#9C8E89] uppercase tracking-wider">Cardholder Name</label>
                                                            <input type="text" placeholder="John Doe" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all text-[#4E342E] font-bold placeholder:font-normal" />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {selectedMethod === 'upi' && (
                                                    <motion.div
                                                        key="upi"
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -10 }}
                                                        className="flex flex-col items-center justify-center p-4 text-center space-y-4"
                                                    >
                                                        <div className="w-48 h-48 bg-white p-3 rounded-2xl border border-gray-200 shadow-lg flex items-center justify-center relative overflow-hidden">
                                                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-red-50 to-transparent"></div>
                                                            {/* Placeholder QR */}
                                                            <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center text-white text-xs opacity-10 font-mono break-all p-2">
                                                                [QR CODE GENERATED HERE]
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-[#7D6E68] font-bold">Scan with any UPI app to pay</p>
                                                    </motion.div>
                                                )}

                                                {['netbanking', 'wallet', 'cash'].includes(selectedMethod) && (
                                                    <motion.div
                                                        key="other"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        className="flex flex-col items-center justify-center h-full text-center p-4"
                                                    >
                                                        <div className="w-20 h-20 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-4xl mb-6 shadow-md">
                                                            {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.icon}
                                                        </div>
                                                        <h3 className="font-black text-xl text-[#4E342E] mb-2">
                                                            {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}
                                                        </h3>
                                                        <p className="text-sm text-[#7D6E68] max-w-xs mx-auto font-medium leading-relaxed">
                                                            You'll be redirected to a secure page to complete this transaction, or pay directly at the academy counter.
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>

                            {/* Right Column: Order Summary (4 cols) */}
                            <div className="lg:col-span-4">
                                <motion.div variants={itemVariants} className="sticky top-32 space-y-6">

                                    {/* Summary Card */}
                                    <div className="bg-white rounded-4xl shadow-2xl shadow-red-200/50 border border-red-50 p-8 overflow-hidden relative">
                                        <div className="flex items-start gap-4 mb-8 relative z-10">
                                            <div className="w-24 h-24 rounded-2xl bg-gray-100 overflow-hidden flex-shrink-0 shadow-md">
                                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-black text-[#4E342E] text-lg leading-tight mb-2">{course.title}</h3>
                                                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-[10px] font-black uppercase tracking-widest">
                                                    {course.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-8 border-t border-gray-100 mb-8 relative z-10">
                                            <div className="flex justify-between text-sm font-medium">
                                                <span className="text-[#9C8E89]">Course Fee ({learningMode})</span>
                                                <span className="font-bold text-[#4E342E]">₹{course.pricing[learningMode]}</span>
                                            </div>
                                            <div className="flex justify-between text-sm font-medium">
                                                <span className="text-[#9C8E89]">Platform Fee</span>
                                                <span className="font-bold text-[#4E342E]">₹0</span>
                                            </div>
                                            <div className="flex justify-between text-sm pt-6 border-t border-dashed border-gray-200 items-baseline">
                                                <span className="font-black text-[#4E342E] text-lg">Total</span>
                                                <span className="font-black text-3xl text-red-500">₹{course.pricing[learningMode]}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            disabled={loading}
                                            className="w-full bg-[#4E342E] text-white py-5 rounded-2xl font-black text-lg hover:bg-black hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group relative z-10"
                                        >
                                            {loading ? (
                                                <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            ) : (
                                                <>
                                                    Pay & Enroll
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>

                                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#9C8E89] font-bold uppercase tracking-widest relative z-10">
                                            <span>🔒 256-bit SSL Secure Payment</span>
                                        </div>

                                        {/* Background Decor */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[4rem] opacity-50 z-0"></div>
                                    </div>

                                    {/* Trust Badges */}
                                    <div className="flex justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 filter contrast-125">
                                        <div className="h-8 w-12 bg-gray-300 rounded"></div>
                                        <div className="h-8 w-12 bg-gray-300 rounded"></div>
                                        <div className="h-8 w-12 bg-gray-300 rounded"></div>
                                        <div className="h-8 w-12 bg-gray-300 rounded"></div>
                                    </div>

                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (
                        /* Loading Skeleton */
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <div className="w-16 h-16 border-4 border-red-100 border-t-red-500 rounded-full animate-spin"></div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

