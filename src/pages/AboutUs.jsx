import React from "react";
import { Box, Grid, Typography, Container, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import SecurityIcon from "@mui/icons-material/Security";        // Integrity & Transparency
import PeopleIcon from "@mui/icons-material/People";            // Customer First
import GavelIcon from "@mui/icons-material/Gavel";              // Compliance & Reliability
import LightbulbIcon from "@mui/icons-material/Lightbulb";      // Innovation
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"; // Commitment

export default function AboutUs() {
  return (
    <Box sx={{ 
      backgroundColor: "#fff", 
      py: { xs: 6, md: 10 },
      // Fix for navbar overlap - account for navbar height
      pt: { xs: "140px", md: "120px" }, // Add top padding to push content below navbar
    }}>
      <Container maxWidth="xl">
        {/* ---------- Who We Are Section ---------- */}
        <Grid container spacing={6} alignItems="center" justifyContent={"center"}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/logistics.jpg"
              alt="About Us"
              sx={{
                width: "100%",
                height: { xs: 250, md: 450 },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "520px", mx: { xs: "auto", md: 0 } }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  mb: 2,
                  color: "#0c2d48",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Who We Are
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 2,
                  lineHeight: 1.8,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                We are a Government-approved Customs House Agent (CHA) and
                Global Freight Forwarding Company, dedicated to simplifying
                trade and logistics for businesses of all sizes. With years of
                expertise in Customs Clearing, Freight Forwarding, Warehousing,
                SVB consulting, and Bond Section services, we serve as a
                single-window logistics partner for exporters, importers, and
                traders across India and beyond.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                At our core, we believe logistics is more than just moving cargo
                — it’s about building trust, transparency, and long-term
                relationships.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* ---------- Vision & Mission Section ---------- */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 6, textAlign: "center", color: "#0c2d48" }}
          >
            Vision and Mission Statement
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 2 },
              justifyContent: "center",
            }}
          >
            {/* Vision Card */}
            <Paper
              elevation={0}
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                minHeight: 280,
                maxWidth: 480,
                mx: "auto",
                textAlign: "center",
                borderLeft: "6px solid #183d62ff",
                p: { xs: 4, md: 5 },
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                },
                "&:hover .flipIcon": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              <Box
                className="flipIcon"
                sx={{
                  fontSize: 64,
                  color: "#2c68a5ff",
                  mb: 2,
                  transition: "transform 0.6s ease",
                  transformStyle: "preserve-3d",
                }}
              >
                <VisibilityIcon sx={{ fontSize: 64, color: "#2c68a5ff" }} />
              </Box>
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{ color: "#0c2d48", mb: 1 }}
              >
                Vision
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                Our vision is to be recognized as a trusted logistics partner,
                delivering excellence in customs clearance, freight forwarding,
                and global trade solutions with professionalism and integrity.
              </Typography>
            </Paper>

            {/* Mission Card */}
            <Paper
              elevation={0}
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                minHeight: 280,
                maxWidth: 480,
                mx: "auto",
                textAlign: "center",
                borderLeft: "6px solid #183d62ff",
                p: { xs: 4, md: 5 },
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                },
                "&:hover .flipIcon": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              <Box
                className="flipIcon"
                sx={{
                  fontSize: 64,
                  color: "#183d62ff",
                  mb: 2,
                  transition: "transform 0.6s ease",
                  transformStyle: "preserve-3d",
                }}
              >
                <FlagIcon sx={{ fontSize: 64, color: "#2c68a5ff" }} />
              </Box>
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{ color: "#0c2d48", mb: 1 }}
              >
                Mission
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                Our mission is to ensure customer satisfaction by providing
                seamless logistics solutions, reliable services, and fostering
                long-term relationships built on trust and transparency.
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* ---------- Core Values Section ---------- */}
        <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: "center", justifyContent: "center" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 6, color: "#0c2d48" }}
          >
            Core Values
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            {[
              {
                title: "Integrity & Transparency",
                desc: "Clear communication, no hidden costs.",
                icon: <SecurityIcon sx={{ fontSize: 30 }} />,
              },
              {
                title: "Customer First",
                desc: "Every shipment gets our full attention.",
                icon: <PeopleIcon sx={{ fontSize: 30 }} />,
              },
              {
                title: "Compliance & Reliability",
                desc: "100% adherence to laws and practices.",
                icon: <GavelIcon sx={{ fontSize: 30 }} />,
              },
              {
                title: "Innovation",
                desc: "Modern tools for smarter logistics.",
                icon: <LightbulbIcon sx={{ fontSize: 30 }} />,
              },
              {
                title: "Commitment",
                desc: "Delivering on promises with accuracy.",
                icon: <AssignmentTurnedInIcon sx={{ fontSize: 30 }} />,
              },
            ].map((val, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      backgroundColor: "#183d62ff",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                    }}
                  >
                    {val.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    sx={{ color: "#0c2d48", mb: 1 }}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", maxWidth: 250 }}
                  >
                    {val.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ---------- Licenses & Approvals Section ---------- */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            {/* Left column (text) */}
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: "520px", mx: { xs: "auto", md: 0 } }}>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    mb: 3,
                    color: "#0c2d48",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Our Licenses & Approvals
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  We are proud to be a Government-approved Custom Broker (CHA)
                  with valid licenses and certifications to handle international
                  shipments. Our compliance with DGFT, CBIC, IATA, and major
                  international shipping bodies ensures that your cargo moves
                  without unnecessary delays.
                </Typography>
              </Box>
            </Grid>

            {/* Right column (image) */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/license.jpg" // replace with your actual image path
                alt="Licenses & Approvals"
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 400 },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Box>
        {/* ---------- Our Network Section ---------- */}
        <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: "center" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 3, color: "#0c2d48" }}
          >
            Our Network
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 720,
              mx: "auto",
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            With a presence at major Indian ports, airports, and inland depots,
            and partnerships with global freight networks, we provide reliable
            logistics solutions across:
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Air Freight */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  border: "2px solid #183d62ff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#183d62ff", mb: 2 }}
                >
                  Air Freight
                </Typography>
                <Typography variant="body2" sx={{ color: "#0c2d48" }}>
                  Faster deliveries across the globe.
                </Typography>
              </Box>
            </Grid>

            {/* Sea Freight */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  border: "2px solid #183d62ff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#183d62ff", mb: 2 }}
                >
                  Sea Freight
                </Typography>
                <Typography variant="body2" sx={{ color: "#0c2d48" }}>
                  FCL, LCL & specialized cargo.
                </Typography>
              </Box>
            </Grid>

            {/* Inland Transport */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  border: "2px solid #183d62ff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#183d62ff", mb: 2 }}
                >
                  Inland Transport
                </Typography>
                <Typography variant="body2" sx={{ color: "#0c2d48" }}>
                  Road and rail for seamless connectivity.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 720,
              mx: "auto",
              mt: 6,
              lineHeight: 1.8,
            }}
          >
            Our network ensures that your cargo reaches any destination,
            national or international, safely and on time.
          </Typography>
        </Box>
        {/* ---------- Leadership & Team ---------- */}
        <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: "center" }}>
        <Grid container spacing={6} alignItems="center" justifyContent={"center"}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/leadership.png"
              alt="About Us"
              sx={{
                width: "100%",
                height: { xs: 250, md: 450 },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "520px", mx: { xs: "auto", md: 0 } }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  mb: 2,
                  color: "#0c2d48",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Leadership & Team
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 2,
                  lineHeight: 1.8,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Behind our success is a team of logistics experts, 
                customs specialists, and freight consultants who bring 
                years of industry knowledge. Guided by experienced 
                leadership, our team is trained to solve challenges, 
                streamline documentation, and ensure a stress-free experience for our clients.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
        {/* ---------- Why Businesses Trust Us Section ---------- */}
{/* ---------- Why Businesses Trust Us Section ---------- */}
<Box sx={{ mt: { xs: 8, md: 12 }, textAlign: "center" }}>
  <Typography
    variant="h3"
    fontWeight="bold"
    sx={{ mb: 4, color: "#0c2d48" }}
  >
    Why Businesses Trust Us
  </Typography>

  {/* Bullet Points */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 2.5,
      mb: 6,
      mx: "auto",
      maxWidth: 800,
    }}
  >
    {[
      "End-to-end solutions under one roof (Customs, Freight, Warehousing, Consulting).",
      "Proven experience across industries like Manufacturing, Pharma, Retail, Automotive, and Electronics.",
      "24/7 customer support for real-time updates and queries.",
      "Strong compliance framework that protects businesses from penalties and delays.",
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {/* Left column - Icon */}
        <Box
          sx={{
            width: 30, // fixed width so all text aligns
            display: "flex",
            justifyContent: "center",
            mt: "4px", // aligns icon with text first line
          }}
        >
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: "#183d62ff",
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✓
          </Box>
        </Box>

        {/* Right column - Text */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.7,
            flex: 1,
          }}
        >
          {item}
        </Typography>
      </Box>
    ))}
  </Box>

  {/* Final Statement */}
  <Box
    sx={{
      p: { xs: 3, md: 4 },
      borderRadius: 2,
      backgroundColor: "#0c2d48",
      maxWidth: 900,
      mx: "auto",
      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontStyle: "italic",
        fontWeight: 500,
        color: "#fff",
      }}
    >
      “Your business growth is our success. With every shipment, we commit to
      delivering reliability, compliance, and peace of mind.”
    </Typography>
  </Box>
</Box>


      </Container>
    </Box>
  );
}