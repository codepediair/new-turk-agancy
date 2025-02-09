import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App