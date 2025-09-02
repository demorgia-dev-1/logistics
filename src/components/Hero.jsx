import React from "react";
import { Box, Typography, Button, Grid, Avatar, Stack } from "@mui/material";
import "./Hero.css";

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        position: "relative",
        color: "white",
        backgroundColor: "#0b1c2c",
        overflow: "hidden",
      }}
    >
      {/* 🌍 Background Map Image */}
      <Box
        component="img"
        src="/images/banner-v1-pattern2.png"
        alt="World Map"
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%", // reduced map size
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      {/* 🔽 Content aligned bottom center */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%", // adjust spacing from bottom
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          px: { xs: 3, md: 10 },
          zIndex: 2,
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          {/* Left Side (Right-aligned to divider) */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end", // 👈 right align
              textAlign: "right", // 👈 text aligned right
              height: "100%",
            }}
          >
            <Typography variant="h2" fontWeight="bold">
              Modern Logistic
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ color: "#ff4c1c", mb: 2 }}
            >
              Transport
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Specialist In Modern Transportation
            </Typography>
          </Grid>

          {/* Orange Divider */}
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
                height: "220px", // taller divider
                backgroundColor: "#ff4c1c",
              }}
            />
          </Grid>

          {/* Right Side */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.85)", mb: 3, maxWidth: 450 }}
            >
              Logistic service provider company plays a pivotal role in the
              global supply chain ecosystem managing.
            </Typography>

            {/* Customer satisfied */}
            <Stack direction="row" alignItems="center" spacing={2} mb={3}>
              <Stack direction="row" spacing={-1.2}>
                <Avatar src="/images/user1.jpg" />
                <Avatar src="/images/user2.jpg" />
                <Avatar src="/images/user3.jpg" />
              </Stack>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Customer Satisfied
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  4.8 (15k Reviews)
                </Typography>
              </Box>
            </Stack>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff4c1c",
                "&:hover": { backgroundColor: "#e63e10" },
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
                alignSelf: "flex-start",
              }}
            >
              About Us →
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* 🔴 Blinking Circles */}
      <Box className="blink-circle" sx={{ top: "28%", left: "22%" }} />
      <Box className="blink-circle" sx={{ top: "32%", left: "45%" }} />
      <Box className="blink-circle" sx={{ top: "50%", left: "60%" }} />
      <Box className="blink-circle" sx={{ top: "38%", left: "75%" }} />
      {/* <Box className="blink-circle" sx={{ top: "65%", left: "35%" }} /> */}

      {/* 📦 Bottom right box image */}
      <Box
        component="img"
        src="/images/box.png"
        alt="Box"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 20,
          width: { xs: 100, md: 150 },
          zIndex: 3,
        }}
      />
    </Box>
  );
}

export default Hero;