// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import WhyChooseUs from "./components/WhyChooseUs";
// //import OurSkills from "./components/OurSkills";
// import Services from "./components/Services";
// //import Solutions from "./components/Solutions";
// //import Clients from "./components/Clients";
// //mport Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import { Box } from "@mui/material";

// function App() {
//   return (
//     <Box component="main" sx={{ scrollBehavior: "smooth" }}>
//       <Navbar />
//       <section id="hero"><Hero /></section>
//       <section id="about"><About /></section>
//       <section id="whyChooseUs"><WhyChooseUs /></section>
//       <section id="services"><Services /></section>
//       {/* <section id="ourSkills"><OurSkills /></section> */}
//       {/* <section id="services"><Services /></section>
//       <section id="solutions"><Solutions /></section>
//       <section id="clients"><Clients /></section>
//       <section id="contact"><Contact /></section>
//       <Footer /> */}
//       <Footer />
//     </Box>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
//import OurSkills from "./components/OurSkills";
import Services from "./components/Services";
//import Solutions from "./components/Solutions";
//import Clients from "./components/Clients";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

// Import your AboutUs full page
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Box component="main" sx={{ scrollBehavior: "smooth" }}>
        <Navbar />

        <Routes>
          {/* Homepage with all sections */}
          <Route
            path="/"
            element={
              <>
                <section id="hero"><Hero /></section>
                <section id="about"><About /></section>
                <section id="whyChooseUs"><WhyChooseUs /></section>
                <section id="services"><Services /></section>
                {/* <section id="ourSkills"><OurSkills /></section>
                <section id="solutions"><Solutions /></section>
                <section id="clients"><Clients /></section>
                <section id="contact"><Contact /></section> */}
                <Footer />
              </>
            }
          />

          {/* About Us Full Page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;