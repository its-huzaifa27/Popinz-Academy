import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Faq } from "../components/Faq";
import { categories, productsData as products } from "../data/productsData";

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-l from-red-500 to-[#d84315] text-white px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            Popinz Patisserie
                        </span>
                        <h1 className="pages-headings font-black mb-6 leading-tight">
                            Freshly Baked <br />
                            <span className="text-amber-200">Daily Delights</span>
                        </h1>
                        <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
                            Explore our artisanal range of cakes, pastries, and breads.
                            Handcrafted with love and the finest ingredients.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${activeCategory === cat
                                    ? "bg-red-500 text-white shadow-lg scale-105"
                                    : "bg-gray-100 text-[#5D4037] hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl h-[500px] flex flex-col cursor-pointer border border-gray-50"
                                >
                                    {/* Image Container */}
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-black text-red-500 uppercase tracking-widest">
                                            {product.category}
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-8 flex flex-col flex-1 justify-between">
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-black text-[#5D4037] group-hover:text-red-500 transition-colors leading-tight">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-2 italic">
                                                "{product.description}"
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Price</span>
                                                <span className="text-3xl font-black text-red-500">{product.price}</span>
                                            </div>
                                            <button
                                                onClick={() => window.open(`https://wa.me/919373284417?text=${encodeURIComponent("Hey i am interested and would like to buy " + product.name)}`, '_blank')}
                                                className="bg-[#5D4037] text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-red-500 shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-2 group/btn"
                                            >
                                                <span>Buy Now</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Faq />
        </div>
    );
}
