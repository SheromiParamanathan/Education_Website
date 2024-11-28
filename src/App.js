import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/EducationalPartners";
import Counter from "./components/Counter";
import About from "./components/About";
import Course from "./components/Course";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <Counter />
      <About />
      <Course />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
 
