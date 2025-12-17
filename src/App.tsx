import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CozyNest from "./pages/CozyNest";
import CozyNestGallery from "./pages/CozyNestGallery";
import MangroveNest from "./pages/MangroveNest";
import MangroveNestGallery from "./pages/MangroveNestGallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cozy-nest" element={<CozyNest />} />
        <Route path="/cozy-nest/gallery" element={<CozyNestGallery />} />
        <Route path="/mangrove-nest" element={<MangroveNest />} />
        <Route path="/mangrove-nest/gallery" element={<MangroveNestGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
