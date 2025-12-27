import { useState, useEffect } from "react";
import image1 from "/images/image1.png"; // Background
import person1 from "/images/person1.png";
import person2 from "/images/person2.png";
import person3 from "/images/person3.png";

const testimonials = [
    {
        id: 1,
        name: "Sara Ansari",
        role: "House Wife",
        image: person1,
        text: "I never thought I could bake a perfect macaron until I took Nicole's masterclass. Her patience and detailed instructions made all the difference. Now I'm taking orders for weddings!"
    },
    {
        id: 2,
        name: "Dr.Himanshu",
        role: "Physiotherapist",
        image: person2,
        text: "The Artisan Bread course changed my life. Understanding the science behind sourdough has elevated my baking to a professional level. The community here is just amazing."
    },
    {
        id: 3,
        name: "Fatima Shaikh",
        role: "Student",
        image: person3,
        text: "From simple sponges to gravity-defying structures, this is the best learning investment I've made. The techniques I learned helped me launch my own custom cake business."
    }
];

export function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full py-24 px-6 overflow-hidden min-h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <img src={image1} alt="Bakery Background" loading="lazy" decoding="async" className="w-full h-full object-cover scale-110 blur-[2px]" />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-red-400 font-bold tracking-widest uppercase text-sm">
                        Student Success Stories
                    </span>
                    <h2 className="pages-headings font-extrabold text-white">
                        What Our Students Say
                    </h2>
                </div>
                <div className="relative h-[400px] flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl max-w-3xl w-full flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-red-500 shadow-xl">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-6">
                            <svg className="w-10 h-10 text-red-500/50 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.298 14.992 14.991C16.353 14.364 17.514 11.238 10.984 10.334C11.516 10.63 5.752 4.205 5.752 4.205H9.791C9.791 4.205 13.923 11.026 13.513 15.65C13.513 18.006 14.017 21 14.017 21ZM22.404 20.957L22.404 17.957C22.404 16.853 22.709 15.255 23.38 14.948C24.741 14.322 25.902 11.196 19.373 10.291C19.905 10.587 14.139 4.161 14.139 4.161H18.179C18.179 4.161 22.311 10.982 21.901 15.606C21.901 17.962 22.404 20.957 22.404 20.957Z" transform="translate(-6 -4)" />
                            </svg>
                            <p className="text-xl md:text-2xl text-gray-100 italic leading-relaxed font-light">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold text-red-400">{testimonials[currentIndex].name}</h4>
                                <p className="text-gray-400 uppercase text-xs tracking-widest">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:-px-12 pointer-events-none">
                        <button
                            onClick={prevTestimonial}
                            className="pointer-events-auto bg-white/10 hover:bg-red-500 text-white p-3 rounded-full backdrop-blur-sm transition-all transform hover:scale-110 hover:shadow-lg group cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="pointer-events-auto bg-white/10 hover:bg-red-500 text-white p-3 rounded-full backdrop-blur-sm transition-all transform hover:scale-110 hover:shadow-lg group cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute -bottom-16 flex space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-red-500 w-8" : "bg-white/30 hover:bg-white"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}