import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Faq } from "../components/Faq";

const timelineData = [
    {
        year: "1998",
        title: "The Home Start",
        description: "Began as a humble kitchen experiment focused on perfecting the classic chocolate cake.",
        color: "#FFA000",
        image: "/images/timeline-img/timeline1.png",
        tilt: -2
    },
    {
        year: "2005",
        title: "First Retail Shop",
        description: "Opened our first cozy bakery, filling the streets with the aroma of freshly baked bread.",
        color: "#F44336",
        image: "/images/timeline-img/timeline2.png",
        tilt: 3
    },
    {
        year: "2012",
        title: "Academy Launch",
        description: "Founded Popinz Academy to share our passion and professional techniques with aspiring bakers.",
        color: "#2196F3",
        image: "/images/timeline-img/timeline3.png",
        tilt: -1.5
    },
    {
        year: "2018",
        title: "Global Recognition",
        description: "Recognized for artisan excellence and innovative pastry designs at international competitions.",
        color: "#E91E63",
        image: "/images/timeline-img/timeline4.png",
        tilt: 2.5
    },
    {
        year: "2021",
        title: "Digital Reach",
        description: "Expanded our academy online, welcoming students from across the globe into our virtual kitchen.",
        color: "#4CAF50",
        image: "/images/timeline-img/timeline5.png",
        tilt: -2
    },
    {
        year: "2024",
        title: "Legacy & Future",
        description: "Opening our flagship state-of-the-art academy complex to inspire the next generation.",
        color: "#FFEB3B",
        image: "/images/timeline-img/timeline6.png",
        tilt: 4
    }
];

export function AboutUs() {
    return (
        <div className="bg-[#FFF8F0] bg-gradient-to-l from-[#f77c94] min-h-screen">
            <Header />

            {/* Our Legacy - Main Polaroid Intro */}
            <section className="pt-32 pb-16  px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    {/* Polaroid Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative group shrink-0"
                    >
                        <div className="bg-white p-6 pb-20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] borde border-gry-100 rounded-sm transform transition-transform group-hover:rotate-0 duration-500">
                            <div className="w-full aspect-square md:w-80 md:h-80 overflow-hidden bg-gray-200">
                                <img
                                    src="/images/timeline-img/headtimeline.png"
                                    alt="Our Founder"
                                    decoding="async"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="mt-8 text-center">
                                <h3 className="font-['Dancing_Script',cursive] text-4xl font-black text-[#4E342E] mb-4">Our Legacy</h3>
                                <div className="max-w-[280px] mx-auto">
                                    <p className="text-gray-600 text-sm leading-relaxe">
                                        "Every cake tells a story of patience,
                                        precision, and a whole lot of heart."
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-amber-100/40 backdrop-blur-sm -rotate-2 mix-blend-multiply border-l-2 border-r-2 border-amber-200/20" />
                        </div>
                    </motion.div>

                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-block px-4 py-1.5 bg-red-50 text-red-500 rounded-full text-xs font-black uppercase tracking-widest leading-none">
                            The Beginning
                        </div>
                        <h2 className="pages-headings font-black text-[#4E342E] leading-tight tracking-tight">
                            It all started in a <br />
                            <span className="text-red-500">tiny kitchen.</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                            <p>
                                What started as a simple desire to bake the perfect cookie for a neighbor evolved into a lifelong mission. Popinz wasn't built on business plans; it was built on flour-dusted manos and early morning aromas.
                            </p>
                        </div>
                        <div className="pt-4 flex items-center gap-6">
                            <div className="flex flex-col text-center">
                                <span className="text-3xl font-black text-[#4E342E]">25+</span>
                                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Years</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200" />
                            <div className="flex flex-col text-center">
                                <span className="text-3xl font-black text-[#4E342E]">10k+</span>
                                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Students</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Polaroid Timeline Section */}
            <section className="py-8 to-white overflow-hidden relative ">
                <div className="max-w-5xl mx-auto px-6 relative">
                    <div className="text-center mb-4">
                        <h2 className="pages-headings font-black text-[#4E342E] mb-1">Milestones</h2>
                        <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full" />
                    </div>

                    {/* SVG Zig-Zag Line (Desktop) */}
                    <div className="absolute left-1/2 top-[200px] bottom-0 w-full hidden lg:block -translate-x-1/2 pointer-events-none z-0">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                            <motion.path
                                d="M 50% 0 L 30% 200 L 70% 500 L 30% 800 L 70% 1100 L 30% 1400 L 50% 1700"
                                stroke="#FDE68A"
                                strokeWidth="6"
                                fill="none"
                                strokeDasharray="15 15"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {/* Timeline Items */}
                    <div className="relative z-10 space-y-16 lg:space-y-0">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-[400px] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Polaroid Frame */}
                                <div className="flex-1 flex justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50, scale: 0.9, rotate: item.tilt * 2 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: item.tilt }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="relative group w-full max-w-[320px]"
                                    >
                                        {/* Year Badge */}
                                        <div
                                            className="absolute -top-6 -left-6 z-30 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg rotate-[-15deg] group-hover:rotate-0 transition-all duration-500 "
                                            style={{ backgroundColor: item.color }}
                                        >
                                            {item.year}
                                        </div>

                                        <div
                                            className="p-4 pb-12 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-2 rounded-sm transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)"
                                            style={{
                                                borderColor: `${item.color}30`,
                                                backgroundColor: `${item.color}`, // Very subtle tint
                                                boxShadow: `0 15px 40px -12px ${item.color}`,
                                                '--hover-shadow': `0 25px 60px -12px ${item.color}40`
                                            }}
                                        >
                                            {/* Photo */}
                                            <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                                                <img
                                                    src={item.image || "/images/timeline-img/coursespageimg/cakebaker3.png"}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>

                                            {/* Title in White Space (Visible on Mobile/Inside) */}
                                            <div className="px-2 text-center lg:hidden">
                                                <h3
                                                    className="text-xl font-bold text-[#4E342E] mb-3 transition-colors"
                                                    style={{ color: '#4E342E' }}
                                                    onMouseEnter={(e) => e.currentTarget.style.color = item.color}
                                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4E342E'}
                                                >
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Desktop Title inside frame */}
                                            <div className="px-2 text-center hidden lg:block">
                                                <h3
                                                    className="text-xl font-bold text-[#4E342E] transition-colors"
                                                    style={{ color: '#4E342E' }}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Decorative Tape */}
                                            <div
                                                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 backdrop-blur-sm -rotate-1 border-x opacity-60"
                                                style={{
                                                    backgroundColor: `${item.color}20`,
                                                    borderColor: `${item.color}30`
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Description Text (Beside on Desktop) */}
                                <motion.div
                                    className={`flex-1 hidden lg:block px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`space-y-4 max-w-lg ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                        <span
                                            className="inline-block px-3 py-1 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-sm"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            {item.year}
                                        </span>
                                        <h3
                                            className="text-3xl font-black text-[#4E342E] transition-colors duration-300"
                                            style={{ color: '#4E342E' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = item.color}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#4E342E'}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Faq />
        </div>
    );
}