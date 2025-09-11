// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import WhyChooseUs from "./components/WhyChooseUs";
// //import OurSkills from "./components/OurSkills";
// import Services from "./components/Services";
// //import Solutions from "./components/Solutions";
// //import Clients from "./components/Clients";
// //import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import { Box } from "@mui/material";

// // Import your AboutUs full page
// import AboutUs from "./pages/AboutUs";

// function App() {
//   return (
//     <Router>
//       <Box component="main" sx={{ scrollBehavior: "smooth" }}>
//         <Navbar />

//         <Routes>
//           {/* Homepage with all sections */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <section id="hero"><Hero /></section>
//                 <section id="about"><About /></section>
//                 <section id="whyChooseUs"><WhyChooseUs /></section>
//                 <section id="services"><Services /></section>
//                 {/* <section id="ourSkills"><OurSkills /></section>
//                 <section id="solutions"><Solutions /></section>
//                 <section id="clients"><Clients /></section>
//                 <section id="contact"><Contact /></section> */}
//                 <Footer />
//               </>
//             }
//           />

//           {/* About Us Full Page */}
//           <Route path="/about" element={<AboutUs />} />
//         </Routes>
//       </Box>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

// Import your AboutUs full page
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

// ✅ Wrapper to handle scroll behavior
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
                  
                </>
              }
            />

            {/* About Us Full Page */}
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