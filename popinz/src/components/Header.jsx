import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navigations = [
        { name: 'Home', path: '/' },
        { name: "All Courses", path: '/all-courses' },
        { name: "Shop", path: '/shop' },
        { name: "About Us", path: '/about-us' },
        // { name: "Blog", path: '/blog' },
        { name: "Contact", path: "/contact" }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <Link
                    to="/"
                    className="flex-shrink-0 cursor-pointer group"
                >
                    <div className="h-[30px] md:h-[50px] overflow-hidden transition-transform group-hover:scale-105">
                        <img src="/images/logo2.png" alt="Popinz Logo" className="h-full w-auto object-contain" />
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:block">
                    <nav>
                        <ul className="flex space-x-8 text-red-500 font-medium text-lg">
                            {navigations.map((item) => (
                                <li
                                    key={item.name}
                                    className="relative group cursor-pointer hover:text-red-600 transition-colors"
                                >
                                    <Link to={item.path}>
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0 flex gap-4 items-center">
                    {localStorage.getItem('authToken') ? (
                        <div className="flex gap-2 items-center">
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="bg-[#4E342E] hover:bg-[#3E2723] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 text-xs md:text-sm cursor-pointer"
                            >
                                My Dashboard
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('authToken');
                                    localStorage.removeItem('userInfo');
                                    navigate('/login');
                                }}
                                className="text-red-500 font-bold hover:text-red-700 transition-colors text-xs md:text-sm cursor-pointer ml-2"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigate('/login')}
                                className="text-red-500 font-black hover:text-red-700 transition-colors cursor-pointer"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                className="btn-universal hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 text-xs md:text-sm cursor-pointer"
                            >
                                Join Today
                            </button>
                        </div>
                    )}
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-red-500 p-2 z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-current rounded-full origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-0.5 bg-current rounded-full"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-current rounded-full origin-center"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-[#FFF8F0] z-40 md:hidden pt-24 px-6 flex flex-col items-center gap-8"
                    >
                        <nav className="w-full">
                            <ul className="flex flex-col gap-6 text-center">
                                {navigations.map((item, idx) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.1 }}
                                    >
                                        <Link
                                            to={item.path}
                                            className="text-2xl font-bold text-[#4E342E] hover:text-red-500 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* Mobile Auth Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col w-full gap-4 max-w-xs"
                        >
                            {!localStorage.getItem('authToken') ? (
                                <>
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="w-full py-3 rounded-full border-2 border-red-500 text-red-500 font-bold"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => navigate('/signup')}
                                        className="w-full py-3 rounded-full bg-red-500 text-white font-bold"
                                    >
                                        Join Today
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="w-full py-3 rounded-full bg-[#4E342E] text-white font-bold"
                                >
                                    Dashboard
                                </button>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
