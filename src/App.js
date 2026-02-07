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
import Contact from "./Pages/Contact/Contact";
import Chemical from "./Pages/Chemical/Chemical";
import IT from "./Pages/IT/IT";
import Facility from "./Pages/Facility/Facility";
import Property from "./Pages/Property/Property"



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
        <Route path="/chemical" element={<Chemical />} />
        <Route path="/it" element={<IT />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/property" element={<Property />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
