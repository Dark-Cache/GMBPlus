import React from "react";
import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from './Components/Scroll/Scroll';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Chemical from "./Pages/Chemical/Chemical";
import Facility from "./Pages/Facility/Facility";
import Digital from "./Pages/Digital/Digital"
import Property from "./Pages/Property/Property"
import Work from "./Pages/Work/Work"
import Contact from "./Pages/Contact/Contact";



function App() {

  return (
    <BrowserRouter>

      <ScrollToTop />
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/chemical" element={<Chemical />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/property" element={<Property />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
