import AboutUs from "../pages/About";
import CardSection from "../pages/CardSection";
import CTA from "../pages/CTA";
import Footer from "../pages/footer";
import HeroSection from "../pages/heroSection";
import TestominalSection from "../pages/testmoinalSection";
import TrainersSection from "../pages/TrainerSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <AboutUs />
      <TrainersSection />
      <TestominalSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
