// import React from "react";
// import { Box, Typography, Button, Grid, Avatar, Stack } from "@mui/material";
// import "./Hero.css";

// function Hero() {
//   return (
//     <Box
//       id="hero"
//       sx={{
//         height: "100vh",
//         position: "relative",
//         color: "white",
//         backgroundColor: "#0b1c2c",
//         overflow: "hidden",
//       }}
//     >
//       {/*  Background Map Image */}
//       <Box
//         component="img"
//         src="/images/banner-v1-pattern2.png"
//         alt="World Map"
//         sx={{
//           position: "absolute",
//           top: "10%",
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: "70%", // reduced map size
//           opacity: 0.25,
//           zIndex: 0,
//         }}
//       />

//       {/*  Content aligned bottom center */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: "10%", // adjust spacing from bottom
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: "100%",
//           maxWidth: "1200px",
//           px: { xs: 3, md: 10 },
//           zIndex: 2,
//         }}
//       >
//         <Grid container alignItems="center" justifyContent="center">
//           {/* Left Side (Right-aligned to divider) */}
//           <Grid
//             item
//             xs={12}
//             md={5}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "flex-end", 
//               textAlign: "right", 
//               height: "100%",
//             }}
//           >
//             <Typography variant="h2" fontWeight="bold">
//               Modern Logistic
//             </Typography>
//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               sx={{ color: "#ff4c1c", mb: 2 }}
//             >
//               Transport
//             </Typography>
//             <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//               Specialist In Modern Transportation
//             </Typography>
//           </Grid>

//           {/* Orange Divider */}
//           <Grid
//             item
//             md="auto"
//             sx={{
//               display: { xs: "none", md: "flex" },
//               justifyContent: "center",
//               alignItems: "center",
//               px: 3,
//             }}
//           >
//             <Box
//               sx={{
//                 width: "3px",
//                 height: "220px", // taller divider
//                 backgroundColor: "#ff4c1c",
//               }}
//             />
//           </Grid>

//           {/* Right Side */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               height: "100%",
//             }}
//           >
//             <Typography
//               variant="body1"
//               sx={{ color: "rgba(255,255,255,0.85)", mb: 3, maxWidth: 450 }}
//             >
//               Logistic service provider company plays a pivotal role in the
//               global supply chain ecosystem managing.
//             </Typography>

//             {/* Customer satisfied */}
//             <Stack direction="row" alignItems="center" spacing={2} mb={3}>
//               <Stack direction="row" spacing={-1.2}>
//                 <Avatar src="/images/user1.jpg" />
//                 <Avatar src="/images/user2.jpg" />
//                 <Avatar src="/images/user3.jpg" />
//               </Stack>
//               <Box>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Customer Satisfied
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#ccc" }}>
//                   4.8 (15k Reviews)
//                 </Typography>
//               </Box>
//             </Stack>

//             {/* Button */}
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#ff4c1c",
//                 "&:hover": { backgroundColor: "#e63e10" },
//                 px: 4,
//                 py: 1.5,
//                 fontWeight: "bold",
//                 fontSize: "16px",
//                 textTransform: "none",
//                 borderRadius: "8px",
//                 alignSelf: "flex-start",
//               }}
//             >
//               About Us →
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>

//       {/*  Blinking Circles */}
//       <Box className="blink-circle" sx={{ top: "28%", left: "22%" }} />
//       <Box className="blink-circle" sx={{ top: "32%", left: "45%" }} />
//       <Box className="blink-circle" sx={{ top: "50%", left: "60%" }} />
//       <Box className="blink-circle" sx={{ top: "38%", left: "75%" }} />
//       {/* <Box className="blink-circle" sx={{ top: "65%", left: "35%" }} /> */}

//       {/*  Bottom right box image */}
//       <Box
//         component="img"
//         src="/images/banner-v1-img5.png"
//         alt="Box"
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           right: 20,
//           width: { xs: 100, md: 150 },
//           zIndex: 3,
//         }}
//       />
//     </Box>
//   );
// }

// export default Hero;
// Hero.jsx
// Hero.jsx
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
          width: { xs: "100%", md: "70%" }, // larger on mobile
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "10%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          px: { xs: 3, md: 10 },
          zIndex: 2,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "left", md: "inherit" },
          }}
        >
          {/* Left Side */}
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
            {/* Wrap orange border only around heading block */}
            <Box
              sx={{
                borderLeft: { xs: "3px solid #ff4c1c", md: "none" },
                pl: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "3.2rem", md: "4rem" },
                  lineHeight: 1.2,
                }}
              >
                Modern Logistic
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  color: "#ff4c1c",
                  mb: 1,
                  fontSize: { xs: "3.2rem", md: "4rem" },
                  lineHeight: 1.2,
                }}
              >
                Transport
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  mb: { xs: 2, md: 0 },
                }}
              >
                Specialist In Modern Transportation
              </Typography>
            </Box>
          </Grid>

          {/* Divider - visible only desktop */}
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
                height: "220px",
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
              pl: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 3,
                maxWidth: { xs: "100%", md: 450 },
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              Logistic service provider company plays a pivotal role in the
              global supply chain ecosystem managing.
            </Typography>

            {/* Customer satisfied */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              mb={3}
              sx={{ flexWrap: "wrap" }}
            >
              <Stack direction="row" spacing={-1.2}>
                <Avatar src="/images/user1.jpg" />
                <Avatar src="/images/user2.jpg" />
                <Avatar src="/images/user3.jpg" />
              </Stack>
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                >
                  Customer Satisfied
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#ccc",
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                  }}
                >
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
                fontSize: { xs: "0.95rem", md: "1rem" },
                textTransform: "none",
                borderRadius: "8px",
                alignSelf: { xs: "flex-start", md: "flex-start" },
              }}
            >
              About Us →
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Blinking Circles - repositioned to stay on map only */}
      <Box
        className="blink-circle"
        sx={{ top: { xs: "20%", md: "28%" }, left: { xs: "25%", md: "22%" } }}
      />
      <Box
        className="blink-circle"
        sx={{ top: { xs: "22%", md: "32%" }, left: { xs: "55%", md: "45%" } }}
      />
      <Box
        className="blink-circle"
        sx={{ top: { xs: "35%", md: "50%" }, left: { xs: "65%", md: "60%" } }}
      />
      <Box
        className="blink-circle"
        sx={{ top: { xs: "25%", md: "38%" }, left: { xs: "80%", md: "75%" } }}
      />

      {/* Bottom right box image (hidden on mobile) */}
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