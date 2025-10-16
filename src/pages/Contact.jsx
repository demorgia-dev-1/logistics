import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Place,
  AccessTime,
  Email,
  Phone,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f9fafb",
        py: { xs: 8, md: 12 },
        // Fix for navbar overlap - account for navbar height
        pt: { xs: "140px", md: "120px" }, // Add top padding to push content below navbar
      }}
    >
      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, md: 6 }, position: "relative" }}
      >
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent={"center"}
        >
          {/* LEFT COLUMN: Text + Social */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "620px" },
                pr: { xs: 0, md: 6 },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: "bold",
                  color: "#183d62ff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                Contact Us ✈
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  color: "#0f172a",
                  mb: 2,
                }}
              >
                Get in Touch And We’ll Help Your Business
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#64748b",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Our dedicated team of experts is here to guide you through every
                step of your logistics journey, ensuring you make informed
                choices tailored to your unique needs.
              </Typography>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  sx={{ color: "#0f172a", "&:hover": { color: "#2c68a5ff" } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{ color: "#0f172a", "&:hover": { color: "#2c68a5ff" } }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{ color: "#0f172a", "&:hover": { color: "#2c68a5ff" } }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  sx={{ color: "#0f172a", "&:hover": { color: "#2c68a5ff" } }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT COLUMN: Contact Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: 560 },
                backgroundColor: "white",
                borderRadius: 2,
                padding: { xs: 3, md: 4 },
                boxShadow: "0px 6px 25px rgba(0,0,0,0.15)",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 3, color: "#0f172a" }}
              >
                Send Us a Message
              </Typography>

              <Grid container spacing={2}>
                {/* Row 1: Name + Email */}
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="outlined" size="medium" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" size="medium" />
                </Grid>

                {/* Row 2: Phone + Subject */}
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone" variant="outlined" size="medium" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Subject" variant="outlined" size="medium" />
                </Grid>

                {/* Row 3: Message */}
                <Grid item xs={12} sx={{ flexBasis: "100%", maxWidth: "93%" }}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box mt={3}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#183d62ff",
                    color: "#fff",
                    fontWeight: 600,
                    flexBasis: "100%",
                    maxWidth: "93%",
                    fontSize: "1rem",
                    py: 1.5,
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#2c68a5ff" },
                  }}
                >
                  Submit Now →
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* --------- Info Cards --------- */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems={"stretch"}
          // Ensure all cards have equal height
          sx={{ 
            mt: 10,
            "& .MuiGrid-item": {
              display: "flex",
              flexDirection: "column",
              minHeight: "200px" // Ensure minimum height for all grid items
            }
          }}
        >
          {[
            {
              icon: <Place sx={{ fontSize: 48, color: "#183d62ff" }} />,
              title: "Location",
              text: "Sector 62, Noida, Delhi NCR, India",
            },
            {
              icon: <AccessTime sx={{ fontSize: 48, color: "#183d62ff" }} />,
              title: "Working Hours",
              text: "Mon - Sat, 9:00 AM - 7:00 PM",
            },
            {
              icon: <Email sx={{ fontSize: 48, color: "#183d62ff" }} />,
              title: "Email",
              text: "support@demorgia.com",
            },
            {
              icon: <Phone sx={{ fontSize: 48, color: "#183d62ff" }} />,
              title: "Phones",
              text: "+91 98765 43210",
            },
          ].map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
              <Paper
                sx={{
                  textAlign: "center",
                  p: 5,
                  borderRadius: 3,
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
                  width: "100%", // Ensure full width
                  height: "100%", 
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Distribute content evenly
                  alignItems: "center",
                  minHeight: "200px", // Set minimum height
                }}
              >
                {item.icon}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mt: 2, mb: 1, color: "#0f172a" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#475569", lineHeight: 1.6 }}
                >
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* --------- Google Map --------- */}
        <Box sx={{ mt: 6 }}>
          <iframe
            title="Demorgia Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.9403653489346!2d77.36387427523044!3d28.62721128488662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a7bb5f6d9b%3A0x2d8b2f1d40b9f19e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1694359483452!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;