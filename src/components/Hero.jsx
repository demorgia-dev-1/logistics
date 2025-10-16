import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        position: "relative",
        color: "white",
        backgroundColor: "#0b1c2c",
        overflow: "hidden",
        // Fix for navbar overlap - account for navbar height
        mt: { xs: "120px", md: "100px" }, // Add top margin to push content below navbar
        //border: "5px solid red", // TEMPORARY: This should be visible if changes are working
      }}
    >
      {/* Background Map Image */}
      <Box
        component="img"
        src="/images/banner-v1-pattern2.png"
        alt="World Map"
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "10%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "100%", md: "70%" },
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "10%" },
          left: { xs: "5%", md: "50%" },
          transform: { xs: "none", md: "translateX(-50%)" },

          width: { xs: "92%", md: "100%" },
          maxWidth: "1200px",
          px: { xs: 0, md: 10 },
          zIndex: 2,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Column - Headings */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "flex-start", md: "flex-end" },
              textAlign: { xs: "left", md: "right" },

              height: "100%",
              mb: { xs: 3, md: 0 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2.6rem", md: "3.5rem" }, 
                  lineHeight: 1.1,
                }}
              >
                Seamless Logistic
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  color: "#2c68a5ff",
                  mb: 1,
                  fontSize: { xs: "3.4rem", md: "3.5rem" }, 
                  lineHeight: 1.05,
                }}
              >
                Transport
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Across Air, Sea and Land
              </Typography>
            </motion.div>
          </Grid>

          {/* Divider (hidden on xs already) */}
          <Grid
            item
            md="auto"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              px: 3,
            }}
          >
            <Box
              sx={{
                width: "3px",
                height: "200px",
                backgroundColor: "#17437aff",
              }}
            />
          </Grid>

          {/* Right Column - Paragraph + Button */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
              pl: { xs: 0, md: 0 },
              pt: { xs: 1, md: 0 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 3,
                  maxWidth: { xs: "100%", md: 500 },
                  fontSize: { xs: "1.05rem", md: "1rem" }, 
                  lineHeight: { xs: 1.6, md: 1.6 },
                }}
              >
                As a leading logistics service provider, we play a pivotal role
                in the global supply chain ecosystem from customs clearance and
                freight forwarding to warehousing and last-mile delivery.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#183d62ff",
                  "&:hover": { backgroundColor: "#2c68a5ff" },
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  textTransform: "none",
                  borderRadius: "8px",

                  
                  alignSelf: { xs: "flex-start", md: "flex-start" },
                }}
                onClick={() => {
                  const section = document.getElementById("about");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About Us →
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Blinking Circles */}
      <Box className="blink-circle" sx={{ top: "28%", left: "22%" }} />
      <Box className="blink-circle" sx={{ top: "32%", left: "45%" }} />
      <Box className="blink-circle" sx={{ top: "50%", left: "60%" }} />
      <Box className="blink-circle" sx={{ top: "38%", left: "75%" }} />

      {/* Bottom Right Box Image (hidden on xs) */}
      <Box
        component="img"
        src="/images/banner-v1-img5.png"
        alt="Box"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 20,
          width: { xs: 0, md: 150 },
          zIndex: 3,
          display: { xs: "none", md: "block" },
        }}
      />
    </Box>
  );
}

export default Hero;