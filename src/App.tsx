import Facility from "./pages/Facility";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Navbar from "./sections/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
    </div>
  );
};

export default App;
