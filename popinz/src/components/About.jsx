import { motion } from "framer-motion";
import person1 from "/images/person1.png"
import person2 from "/images/person2.png"
import person3 from "/images/person3.png"

export function About() {
    return (
        <section className="bg-[#FFF8F0] py-20 px-6 overflow-x-hidden">
            <div className="max-w-6xl mx-auto ">
                {/* Header & Description */}
                <div className="grid md:grid-cols-2 items-start gap-12 mb-20">
                    {/* Left Column: Title, Intro text, Button */}
                    <div className="flex flex-col text-left space-y-8">
                        <h2 className="pages-headings font-extrabold text-red-500 leading-tight">
                            About us
                        </h2>

                        <motion.p
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-2xl md:text-xl text-[#351e15] font-bold leading-relaxed"
                        >
                            I am Nicole, a professional baker with over 10 years of experience creating sweet moments and delicious treats for every occasion.
                        </motion.p>

                        <div className="pt-4">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <button className="btn-universal hover:bg-red-700 cursor-pointer text-white px-5 py-2 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-white/20">
                                    More About Us
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Purple Quote Card */}
                    <div className="w-full overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="p-10 bg-pink-200 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl relative"
                        >
                            <p className="text-xl text-black leading-relaxed font-light italic">
                                "Baking is not just about ingredients; it's about the love and creativity you pour into every creation. Join us on a journey to master the delicate art of patisserie and discover the joy of creating something truly magical from scratch."
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Images Grid */}
                <div className="grid md:grid-cols-3 gap-8 w-full">
                    {/* Image 1 */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="group flex flex-col rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-1 bg-white h-full"
                    >
                        <div className="h-[350px] overflow-hidden">
                            <img
                                src={person1}
                                alt="Baker portrait"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 flex-grow flex items-center">
                            <p className="text-[#f26833] text-base leading-relaxed font-medium ">
                                A passionate baking teacher with over 10 years of hands-on experience in professional kitchens and classrooms. Skilled in teaching foundational to advanced baking techniques, recipe development, food safety, and creative presentation, while inspiring students to build confidence and successful careers in baking.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image 2 */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="group  flex flex-col rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-1 mt-0 md:mt-12 bg-white h-full"
                    >
                        <div className="h-[350px] overflow-hidden">
                            <img
                                src={person2}
                                alt="Baking in action"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 flex-grow flex items-center">
                            <p className="text-[#93c123] text-base leading-relaxed font-medium">
                                I believe baking is both a skill and an art. I focus on simple methods, clear techniques, and hands-on learning. My teaching style helps students gain confidence, master consistency, and create bakery-quality products with creativity and precision.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image 3 */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="group flex flex-col rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-1 bg-white h-full"
                    >
                        <div className="h-[350px] overflow-hidden">
                            <img
                                src={person3}
                                alt="Our creations"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 flex-grow flex items-center">
                            <p className="text-[#f7adaf] text-base leading-relaxed font-medium">
                                As a dedicated baking mentor, I emphasize practical knowledge, hygiene, and presentation. I enjoy guiding learners step by step, encouraging experimentation, and helping them develop their own baking style while building discipline and passion for professional baking.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}