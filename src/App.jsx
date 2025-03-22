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
import About from "./components/About"; // The About component you just created





const App = () => {
  return (

    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        {/* <Project /> */}

        <Testimonials/>
        <Roadmap />
        <FAQs/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Include Footer if it should appear on all pages */}
    </Router>
  );
};

export default App;
