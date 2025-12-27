import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })))
const AboutUs = lazy(() => import('./pages/AboutUs').then(module => ({ default: module.AboutUs })))
const AllCourses = lazy(() => import('./pages/AllCourses').then(module => ({ default: module.AllCourses })))
const Blog = lazy(() => import('./pages/Blog'))

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-[#FFF8F0]">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
