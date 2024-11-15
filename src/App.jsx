import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WorkFlow from "./components/WorkFlow";

const App = () => {
  return (
    <>
      <Navbar/> 
      <div className="px-6 pt-20 mx-auto max-w-7xl">
      <Hero/>
      </div>
      <FeatureSection/>
      <WorkFlow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      
    </>
  );
}

export default App;
