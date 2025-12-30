import { motion } from "framer-motion";

export function Faq() {
    const footerLinks = {
        courses: [
            { name: "Foundation", href: "/all-courses" },
            { name: "Advance", href: "/all-courses" }
        ]
    };

    return (
        <footer className="bg-[#2D1B15] text-[#FDF5E6] pt-10 pb-4 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
                    {/* Column 1: Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full border-2 border-red-400 overflow-hidden">
                                <img src="/images/logo.png" alt="Popinz Logo" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black tracking-tight leading-none">Popinz</h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-400">Academy</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-[#FDF5E6]/60 font-medium text-justify">
                            Empowering bakers with professional techniques and creative inspiration. Join our community of pastry enthusiasts and transform your baking journey.
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    name: "Instagram",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    )
                                },
                                {
                                    name: "WhatsApp",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                    )
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 group cursor-pointer text-[#FDF5E6]/40 shadow-inner"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2: Popular Courses */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h4 className="text-lg font-bold pb-4 inline-block">Popular Courses</h4>
                        <ul className="space-y-4">
                            {footerLinks.courses.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-[#FDF5E6]/70 hover:text-red-400 transition-colors flex items-center gap-2 group cursor-pointer">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 scale-0 group-hover:scale-100 transition-transform" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>



                    {/* Column 4: Contact Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h4 className="text-lg font-bold pb-4 inline-block">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 text-red-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-[#FDF5E6]/70 italic">Nizampur</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 text-red-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <p className="text-sm text-[#FDF5E6]/70">popinzbakers@gmail.com</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 text-red-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-[#FDF5E6]/70">+91 9373284417</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="pt-0 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-[#FDF5E6]/50">
                        &copy; {new Date().getFullYear()} Popinz Academy. All rights reserved.
                    </p>
                    <p className="text-xs text-[#FDF5E6]/30 flex items-center gap-1 group">
                        Made with <span className="text-red-500 group-hover:scale-125 transition-transform duration-300">♥</span> for bakers everywhere
                    </p>
                </div>
            </div>
        </footer>
    );
}
