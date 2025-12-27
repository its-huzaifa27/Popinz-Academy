import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const navigations = [
        { name: 'Home', path: '/' },
        { name: "All Courses", path: '/all-courses' },
        { name: "About Us", path: '/about-us' },
        { name: "Blog", path: '/blog' },
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
                    className="flex-shrink-0 flex items-center gap-1 cursor-pointer group"
                >
                    <div className="h-[50px] w-[50px] p-2 md:h-[60px] md:w-[60px] overflow-hidden rounded-full border-2 border-red-400 shadow-sm group-hover:scale-105 transition-transform">
                        <img src="/images/logo.png" alt="Popinz Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-extrabold text-[#93c123] text-[2px] md:text-[15px] tracking-wid">Cake Bakers</span>
                        <span className="font-extrabold text-[#f26833] text-xs md:tex-[12px] uppercase tracking-widr"> & Academy</span>
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
                <div className="flex-shrink-0">
                    <button
                        onClick={() => navigate('/')}
                        className="btn-universal hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 text-xs md:text-sm cursor-pointer"
                    >
                        Join Today
                    </button>
                </div>
            </div>
        </header>
    )
}
