import About from "../sections/About";
import Best from "../sections/Best";
import Facilities from "../sections/Facilities";
import Footer from "../sections/Footer";
import Gallery from "../sections/Gallery";
import Hero from "../sections/Hero";
import Rooms from "../sections/Rooms";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Best />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
