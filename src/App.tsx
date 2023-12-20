import Booking from "./components/Booking";
import Facility from "./pages/Facility";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Navbar from "./sections/Navbar";
import { Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import { useGlobalContext } from "./context/globalContext";

const App = () => {
  const { isOpen } = useGlobalContext();
  return (
    <div
      className={` ${
        isOpen && "h-[100vh] overflow-hidden"
      } max-w-[1400px] mx-auto`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/facility/:facilityId" element={<Facility />} />
      </Routes>

      {/* Modals */}
      <Booking />
      <MusicPlayer />
    </div>
  );
};

export default App;
