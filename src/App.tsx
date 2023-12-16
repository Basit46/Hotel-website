import { useState } from "react";
import Booking from "./components/Booking";
import Facility from "./pages/Facility";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Navbar from "./sections/Navbar";
import { Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
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
