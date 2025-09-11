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
    <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 10 } }}>
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
                borderLeft: "6px solid #ff5722",
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
                  color: "#ff5722",
                  mb: 2,
                  transition: "transform 0.6s ease",
                  transformStyle: "preserve-3d",
                }}
              >
                <VisibilityIcon sx={{ fontSize: 64, color: "#ff5722" }} />
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
                borderLeft: "6px solid #ff5722",
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
                  color: "#ff5722",
                  mb: 2,
                  transition: "transform 0.6s ease",
                  transformStyle: "preserve-3d",
                }}
              >
                <FlagIcon sx={{ fontSize: 64, color: "#ff5722" }} />
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
        <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: "center" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 6, color: "#0c2d48" }}
          >
            Core Values
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Integrity & Transparency */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  borderLeft: "6px solid #ff5722",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <SecurityIcon sx={{ fontSize: 50, color: "#ff5722", mb: 2 }} />
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ color: "#0c2d48", mb: 1 }}
                >
                  Integrity & Transparency
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clear communication, no hidden costs.
                </Typography>
              </Paper>
            </Grid>

            {/* Customer First */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  borderLeft: "6px solid #ff5722",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <PeopleIcon sx={{ fontSize: 50, color: "#ff5722", mb: 2 }} />
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ color: "#0c2d48", mb: 1 }}
                >
                  Customer First
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Every shipment, big or small, gets our complete attention.
                </Typography>
              </Paper>
            </Grid>

            {/* Compliance & Reliability */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  borderLeft: "6px solid #ff5722",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <GavelIcon sx={{ fontSize: 50, color: "#ff5722", mb: 2 }} />
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ color: "#0c2d48", mb: 1 }}
                >
                  Compliance & Reliability
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  100% adherence to laws, regulations, and best practices.
                </Typography>
              </Paper>
            </Grid>

            {/* Innovation */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  borderLeft: "6px solid #ff5722",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <LightbulbIcon sx={{ fontSize: 50, color: "#ff5722", mb: 2 }} />
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ color: "#0c2d48", mb: 1 }}
                >
                  Innovation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Using modern tools and processes to deliver smarter logistics.
                </Typography>
              </Paper>
            </Grid>

            {/* Commitment */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  borderLeft: "6px solid #ff5722",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <AssignmentTurnedInIcon
                  sx={{ fontSize: 50, color: "#ff5722", mb: 2 }}
                />
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ color: "#0c2d48", mb: 1 }}
                >
                  Commitment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Delivering on promises with accuracy and timeliness.
                </Typography>
              </Paper>
            </Grid>
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
      </Container>
    </Box>
  );
}