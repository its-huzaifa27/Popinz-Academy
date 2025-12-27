import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Faq } from "../components/Faq";

const blogPosts = [
    {
        id: 1,
        title: "Mastering the Art of Macarons",
        excerpt: "Learn the secrets to creating perfectly smooth and delicious French macarons every time.",
        date: "Dec 15, 2024",
        category: "Baking Tips",
        image: "/images/blogsimg/macaronblog.png",
        author: "Chef Popinz"
    },
    {
        id: 2,
        title: "Top 5 Frosting Techniques",
        excerpt: "From buttercream to ganache, discover the best ways to finish your cake masterpieces.",
        date: "Dec 10, 2024",
        category: "Decoration",
        image: "/images/blogsimg/frosting.png",
        author: "Chef Jane"
    },
    {
        id: 3,
        title: "The Science of Sourdough",
        excerpt: "Deep dive into the chemistry of fermentation and how to maintain the perfect starter.",
        date: "Dec 5, 2024",
        category: "Bread",
        image: "/images/blogsimg/sourdoughblog.png",
        author: "Chef Popinz"
    },
    {
        id: 4,
        title: "Healthier Alternatives in Baking",
        excerpt: "Swap sugar and flour for wholesome ingredients without compromising on taste.",
        date: "Nov 28, 2024",
        category: "Healthy Living",
        image: "/images/timeline-img/headtimeline.png",
        author: "Chef Sarah"
    },
    {
        id: 5,
        title: "Planning the Perfect Tea Party",
        excerpt: "Everything you need to know about hosting a charming and delicious afternoon tea.",
        date: "Nov 20, 2024",
        category: "Events",
        image: "/images/blogsimg/blogtea.png",
        author: "Chef Popinz"
    },
    {
        id: 6,
        title: "The Ultimate Guide to Chocolate",
        excerpt: "Understanding different types of chocolate and how to temper them for professional results.",
        date: "Nov 12, 2024",
        category: "Ingredients",
        image: "/images/blogsimg/blogchocolate.png",
        author: "Chef Mark"
    }
];

export default function Blog() {
    return (
        <div className="bg-[#FFF8F0] min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-l from-[#b83509] text-white px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            Journal & Stories
                        </span>
                        <h1 className="pages-headings font-black mb-6 leading-tight">
                            The Popinz <br />
                            <span className="">Baking Diary</span>
                        </h1>
                        <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
                            Exploring the world of patisserie, sharing secrets from our kitchen,
                            and celebrating the joy of baking.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                {/* Card Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-xl lg:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <span className="text-sm font-bold bg-red-500 px-3 py-1 rounded-full">Read More</span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
                                        <span className="text-red-500 uppercase tracking-widest">{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-[#4E342E] group-hover:text-red-500 transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-medium line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-black">
                                            {post.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="text-sm font-bold text-gray-700">{post.author}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Newsletter / CTA */}
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 lg:p-20 bg-gradient-to-r from-[#f77c94] to-[#ffb1c1] rounded-[3rem] text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">Stay Updated with Our Baking Secrets</h2>
                            <p className="text-white/90 text-lg font-medium">Join 5,000+ baking enthusiasts and get the latest recipes and tips straight to your inbox.</p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-8 py-5 rounded-full bg-white text-gray-900 font-bold focus:outline-none focus:ring-4 focus:ring-white/30"
                                />
                                <button className="px-10 py-5 bg-[#4E342E] text-white rounded-full font-black hover:bg-black transition-all duration-300 shadow-xl">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </motion.div> */}
                </div>
            </section>

            <Faq />
        </div>
    );
}
