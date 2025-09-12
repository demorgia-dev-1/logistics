import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

//  Wrapper to handle scroll behavior
function ScrollToSectionWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return children;
}

function App() {
  return (
    <Router>
      <Box component="main" sx={{ scrollBehavior: "smooth" }}>
        <Navbar />

        <ScrollToSectionWrapper>
          <Routes>
            {/* Homepage with all sections */}
            <Route
              path="/"
              element={
                <>
                  <section id="hero"><Hero /></section>
                  <section id="about"><About /></section>
                  <section id="why-choose-us"><WhyChooseUs /></section>
                  <section id="services"><Services /></section>
                  <section id="blogs"><Blogs /></section>
                </>
              }
            />

            
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToSectionWrapper>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;