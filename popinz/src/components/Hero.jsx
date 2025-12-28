import v1 from "/videos/v1.mp4";
import v2 from "/videos/v2.mp4";
import v3 from "/videos/v3.mp4";
import v4 from "/videos/v4.mp4";
import { useNavigate } from "react-router-dom";

export function Hero() {
    const navigate = useNavigate();
    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            {/* Background Videos Grid */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 w-full h-full">
                <video src={v1} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
                <video src={v2} autoPlay loop muted playsInline className="w-full h-full object-cover hidden md:block"></video>
                <video src={v3} autoPlay loop muted playsInline className="w-full h-full object-cover hidden md:block"></video>
                <video src={v4} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blu]"></div>

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
                <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-8 text-center md:text-left">
                        <div>
                            <h1 className="pages-headings font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                                Where <span className="text-purple-400">Passion</span> <br />
                                <span className="text-red-400">Meets</span> the <br />
                                Art of <span className="text-amber-400">Baking</span>
                            </h1>
                        </div>

                        <div>
                            <p className="text-2xl md:text-xl font-medium text-gray-200 drop-shadow-md">
                                Learn baking <span className="text-red-700 font-bold">cookies</span>, <span className="text-[#93c123] font-bold">pastries</span>
                                ,<span className="text-amber-700 font-bold">cakes</span> & more.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button
                                onClick={() => navigate('/signup')}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-base transition-all transform hover:-translate-y-1 hover:shadow-lg border-2 border-transparent cursor-pointer"
                            >
                                Enroll Today
                            </button>
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-6 py-2.5 rounded-full font-bold text-base transition-all border-2 border-white/30 hover:border-white cursor-pointer"
                            >
                                Login
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}