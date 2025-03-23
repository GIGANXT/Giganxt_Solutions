import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Project from "./components/Project";
import About from "./Pages/About"; // Import the About page




const App = () => {
  return (
    <>
    

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          
          {/* Define routes for the application */}
          <Route path="/" element={
            <>
              <Hero />
              <Benefits />
              <Testimonials />
              <Roadmap />
              <FAQs />
            </>
          } />
          
          <Route path="/about" element={<About />} /> {/* About page route */}
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

