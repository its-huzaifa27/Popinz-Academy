import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Faq } from "../components/Faq";

export default function Contact() {
    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-24 bg-gradient-to-l from-red-500 o-[#d84315] text-white px-6 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            Let's Connect
                        </span>
                        <h1 className="pages-headings font-black mb-6 leading-tight">
                            We'd Love to <br />
                            <span className="text-[#fb2c36]">Hear From You</span>
                        </h1>
                        <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
                            Whether you have a question about our classes, need help with an order,
                            or just want to say hi, we're here for you.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Icons Decor */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-[10%] opacity-20 hidden lg:block"
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </section>

            {/* Contact Information & Form Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-4xl font-black text-[#4E342E] mb-6">Get in Touch</h2>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed">
                                    Have questions about our baking courses or want to discuss a custom order?
                                    Reach out to us through any of these channels.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Phone Info */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest font-black text-gray-400 mb-1">Call Us</p>
                                        <p className="text-xl font-bold text-[#4E342E]">+91 9373284417</p>
                                    </div>
                                </div>

                                {/* Email Info */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#d84315] group-hover:bg-[#d84315] group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest font-black text-gray-400 mb-1">Email Us</p>
                                        <p className="text-xl font-bold text-[#4E342E]">popinzbakers@gmail.com</p>
                                    </div>
                                </div>

                                {/* Location Info */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest font-black text-gray-400 mb-1">Visit Us</p>
                                        <p className="text-xl font-bold text-[#4E342E]">123 Baker Street, Bhiwandi, Thane</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-[#FFF8F0] p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-[#b83509]/5"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-[#4E342E] uppercase tracking-widest px-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your Name "
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-red-500 focus:outline-none transition-all shadow-sm font-medium"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-[#4E342E] uppercase tracking-widest px-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="popinz@example.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-red-500 focus:outline-none transition-all shadow-sm font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-[#4E342E] uppercase tracking-widest px-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-red-500 focus:outline-none transition-all shadow-sm font-medium"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-[#4E342E] uppercase tracking-widest px-1">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-red-500 focus:outline-none transition-all shadow-sm font-medium resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#b83509] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#d84315] shadow-xl hover:shadow-[#b83509]/20 transition-all active:scale-95 cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Faq />
        </div>
    );
}
