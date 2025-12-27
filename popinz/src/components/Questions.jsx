import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        id: 1,
        question: "Do I need any prior baking experience?",
        answer: "Not at all! Our courses are designed for all skill levels. Whether you're a complete beginner or looking to refine your skills, we guide you step-by-step through every technique."
    },
    // {
    //     id: 2,
    //     question: "What equipment do I need for the classes?",
    //     answer: "For most courses, basic kitchen tools like a mixer, bowls, and an oven are sufficient. We provide a detailed list of specific equipment needed for advanced modules upon enrollment."
    // },
    // {
    //     id: 3,
    //     question: "Are the ingredients easy to find?",
    //     answer: "Yes! We focus on recipes that use accessible ingredients found in local supermarkets. For specialty items, we provide recommendations on where to source them easily."
    // },
    {
        id: 4,
        question: "Do you offer a certificate upon completion?",
        answer: "Absolutely. Upon successfully completing a course, you will receive a digital certificate from Popinz Academy to celebrate your baking journey and achievements."
    },
    {
        id: 8,
        question: "How long does it take to complete a course?",
        answer: "Course duration varies by program, but most courses can be completed within a few weeks. You can learn at a comfortable pace without any pressure."
    },
    {
        id: 9,
        question: "Will I get hands-on practice during the classes?",
        answer: "Yes, our courses focus on practical learning. You will bake along with the instructor and practice real recipes to build confidence."
    },
    {
        id: 10,
        question: "Can I start my own baking business after completing the course?",
        answer: "Absolutely. Our courses are designed to help you gain the skills and confidence needed to start home baking or take baking professionally."
    }
];

export function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block relative mb-4">
                        <h2 className="pages-headings font-extrabold text-[#5D4037]">
                            Frequently Asked Questions
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-red-500 rounded-full"></div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Questions */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="bg-[#FFF8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#fdece4]"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none cursor-pointer"
                                >
                                    <span className={`text-xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-red-500' : 'text-[#5D4037]'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 transform transition-transform duration-300 text-red-400 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-8 pt-0">
                                                <p className="text-gray-600 text-lg leading-relaxed border-t border-red-100 pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Overlapping Video Cards */}
                    <div className="relative h-[600px] w-full mt-10 lg:mt-0 px-4">
                        {/* Main Video Card (Bottom/Right) */}
                        <motion.div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="absolute bottom-0 right-0 w-[85%] h-[420px] rounded-[3rem] overflow-hidden shadow-2xl bg-white border-8 border-[#8e4487] z-10 cursor-pointer"
                        >
                            <video
                                src="/videos/cakemaking2.mp4"
                                className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                muted
                                loop
                                playsInline
                                ref={(el) => {
                                    if (el) {
                                        if (isHovered) el.play();
                                        else { el.pause(); el.currentTime = 0; }
                                    }
                                }}
                            />
                            <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                                <img
                                    src="/images/chefs2.png"
                                    alt="Baking Class"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-xl font-bold text-white">Live Masterclasses</h3>
                                    <p className="text-white/80">Experience professional baking</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Secondary Video Card (Top/Left - Overlapping) */}
                        <motion.div
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                            initial={{ x: -20, y: -20 }}
                            whileHover={{ scale: 1.05, zIndex: 30 }}
                            className="absolute top-0 left-0 w-[70%] h-[350px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white border-8 border-[#f7adaf] z-20 cursor-pointer transition-all duration-300"
                        >
                            <video
                                src="/videos/cakemaking1.mp4"
                                className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered2 ? 'opacity-100' : 'opacity-0'}`}
                                muted
                                loop
                                playsInline
                                ref={(el) => {
                                    if (el) {
                                        if (isHovered2) el.play();
                                        else { el.pause(); el.currentTime = 0; }
                                    }
                                }}
                            />
                            <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered2 ? 'opacity-0' : 'opacity-100'}`}>
                                <img
                                    src="/images/chefs1.png"
                                    alt="Professional Baking"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-lg font-bold text-white">Advanced Skills</h3>
                                    <p className="text-white/80">Master every recipe</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}