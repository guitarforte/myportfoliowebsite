import './App.css';
import Navbar from "../src/components/Navbar/Navbar"
import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './components/Work/work';
import Skills from './components/Skills/Skills';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './container/Footer/Footer';
function App() {
  return (
    <div className="app">
     <Navbar/>
     <Header/>
     <About/>
     <Work/>
     <Skills/>
     <Testimonial/>
     <Footer/>
    </div>
  );
}

export default App;
