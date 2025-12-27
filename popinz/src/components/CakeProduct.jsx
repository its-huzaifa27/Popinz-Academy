import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Cakes", "Pastries", "Cupcakes", "Breads"];

const products = [
    {
        id: 1,
        name: "Luxury Wedding Cake",
        category: "Cakes",
        price: "₹150",
        description: "Three-tier vanilla sponge with buttercream icing and gold leaf accents.",
        image: "/images/cake1.png"
    },
    {
        id: 2,
        name: "Chocolate Truffle Cake",
        category: "Cakes",
        price: "₹45",
        description: "Rich dark chocolate cake with velvety ganache and fresh raspberries.",
        image: "/images/cake2.png"
    },
    {
        id: 3,
        name: "Gourmet French Pastries",
        category: "Pastries",
        price: "₹25",
        description: "Assorted platter of eclairs, tarts, and delicate mille-feuille.",
        image: "/images/pastry1.png"
    },
    {
        id: 4,
        name: "Artisan Macaron Set",
        category: "Pastries",
        price: "₹18",
        description: "A dozen hand-crafted macarons in seasonal fruit and floral flavors.",
        image: "/images/pastry2.png"
    },
    {
        id: 5,
        name: "Colorful Cupcake Box",
        category: "Cupcakes",
        price: "₹22",
        description: "Box of 6 artisan cupcakes with unique frostings and gourmet toppings.",
        image: "/images/cupcake1.png"
    },
    {
        id: 6,
        name: "Sourdough Bread",
        category: "Breads",
        price: "₹12",
        description: "Naturally leavened sourdough with a signature crispy crust and soft airy crumb.",
        image: "/images/bread1.png"
    }
];

export function CakeProduct() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section className="bg-[#FFF8F0] py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="pages-headings font-extrabold text-[#5D4037] mb-6">
                        Our Sweet Creations
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer ${activeCategory === cat
                                    ? "bg-red-500 text-white shadow-lg scale-105"
                                    : "bg-white text-[#5D4037] hover:bg-red-50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl h-[450px] cursor-pointer"
                            >
                                {/* Base Content: Image and Info */}
                                <div className="h-full w-full">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end">
                                        <div className="flex justify-between items-end gap-2">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{product.name}</h3>
                                                <p className="text-white/70 text-sm font-medium">{product.category}</p>
                                            </div>
                                            <button className="bg-red-500 text-white px-4 py-1.5 rounded-xl font-bold text-xs shadow-lg whitespace-nowrap hover:bg-[#5D4037] transition-all duration-300 transform active:scale-95 cursor-pointer">
                                                Price {product.price}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Scroll-Style Unrolling Overlay (Completely Hidden Initially) */}
                                <div className="absolute inset-x-0 bottom-0 h-full z-20 pointer-events-none group-hover:pointer-events-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-[#fdf5e6] transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 flex flex-col items-center text-center overflow-hidden">

                                        <div className="flex-1 flex flex-col justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                            <h3 className="text-3xl font-black text-[#5D4037] mb-2 tracking-tight">{product.name}</h3>
                                            <div className="w-20 h-1 bg-red-400/30 mx-auto mb-6 rounded-full" />

                                            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium italic border-x-2 border-red-50/20 px-4">
                                                "{product.description}"
                                            </p>

                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-gray-400 text-sm uppercase tracking-widest font-bold">Price</span>
                                                <div className="text-5xl font-black text-red-500">{product.price}</div>
                                            </div>
                                        </div>

                                        <div className="w-full px-8 pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                                            <button className="w-full bg-[#5D4037] text-white py-3 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-red-500 hover:shadow-[0_15px_30px_rgba(239,68,68,0.4)] transition-all duration-300 cursor-pointer hover:-translate-y-1 active:scale-95 group/btn">
                                                <span>Order Now</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}