import { About } from "../components/About";
import { Courses } from "../components/courses";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Questions } from "../components/Questions";
import { Testimonial } from "../components/Testimonial";
import { CakeProduct } from "../components/CakeProduct";
import { Faq } from "../components/Faq";

export function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Courses />
            <CakeProduct />
            <Testimonial />
            <Questions />
            <Faq />
        </div>
    )
}