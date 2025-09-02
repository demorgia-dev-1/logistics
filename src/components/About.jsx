import React from "react";
import { Box, Typography, Button, Grid, Paper, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 10 },
        backgroundColor: "white",
      }}
    >
      <Grid container spacing={6}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#ff4c1c", fontWeight: "bold", mb: 1 }}
          >
            OUR COMPANY ✈
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, lineHeight: 1.2 }}
          >
            Our Expertise Stands in{" "}
            <span style={{ color: "#ff4c1c" }}>LOGISTICS SOLUTIONS</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, maxWidth: 550 }}
          >
            Logistic service provider company plays a pivotal role in the global
            supply chain ecosystem by efficiently managing the movement of goods
            from origin to final destination. These companies offer a diverse.
          </Typography>

          {/* Feature Cards */}
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: "10px",
                  textAlign: "left",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <LocalShippingIcon
                  sx={{
                    backgroundColor: "#fff2ee",
                    color: "#ff4c1c",
                    fontSize: 35,
                    borderRadius: "8px",
                    p: 1,
                    mb: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Worldwide Service
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Logistic service provider company plays a pivotal role in the
                  global
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: "10px",
                  textAlign: "left",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <SupportAgentIcon
                  sx={{
                    backgroundColor: "#fff2ee",
                    color: "#ff4c1c",
                    fontSize: 35,
                    borderRadius: "8px",
                    p: 1,
                    mb: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  24/7 Online Support
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Logistic service provider company plays a pivotal role in the
                  global
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* CTA Button + Phone */}
          <Stack direction="row" spacing={3} alignItems="center">
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
              }}
            >
              More About Us →
            </Button>

            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon sx={{ color: "#ff4c1c" }} />
              <Box>
                <Typography variant="body2" sx={{ color: "#ff4c1c" }}>
                  Make A Phone Call
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  +880 123 456 789
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Plane Image */}
          <Box
            component="img"
            src="/images/plane.jpg"
            alt="Airplane"
            sx={{
              width: "100%",
              borderRadius: "12px",
              display: "block",
            }}
          />

          {/* Worker Image Overlap */}
          <Box
            component="img"
            src="/images/lady.jpg"
            alt="Worker"
            sx={{
              width: "60%",
              borderRadius: "12px",
              position: "absolute",
              bottom: "-40px",
              right: "20px",
              boxShadow: 3,
              border: "6px solid #fff",
            }}
          />

          {/* Circular Badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-70px",
              left: "20px",
              width: 140,
              height: 140,
              borderRadius: "50%",
              backgroundColor: "#ff4c1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "center",
              p: 2,
              lineHeight: 1.4,
              transform: "rotate(-15deg)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            }}
          >
            WELCOME TO OUR <br /> COMPANY <br /> SINCE 2002
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;