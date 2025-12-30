import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

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
            </div>
        </header>
    )
}
