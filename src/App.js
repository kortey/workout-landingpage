
import './App.css';
import Header from "./components/Header"
import Banner from './components/Banner';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import Pricing from "./components/Pricing"
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Slider } from './components/Slider';


function App() {
  return (
    <div>
      <Banner />
      <Programs />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
