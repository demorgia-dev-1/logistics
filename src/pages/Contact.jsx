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
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#0f172a", "&:hover": { color: "#2c68a5ff" } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener"
                  sx={{ color: "#0f172a", "&:hover": { color: "#2c68a5ff" } }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                href="https://twitter.com/"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#0f172a", "&:hover": { color: "#2c68a5ff" } }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                href="https://www.linkedin.com/company/demorgia-consulting-services-pvt-ltd/"
                  target="_blank"
                  rel="noopener"
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
  alignItems="stretch"
  sx={{ mt: 10 }}
>
  {[
    {
      icon: <Place sx={{ fontSize: 48, color: "#183d62ff" }} />,
      title: "Location",
      text: `2nd Floor, Plot No. 02, \nKhasra No. 348/02, Sahabad, Muhammadpur,Near Bansal Farm,\nNew Delhi - 110061`,
    },
    {
      icon: <AccessTime sx={{ fontSize: 48, color: "#183d62ff" }} />,
      title: "Working Hours",
      text: "Mon - Sat, 9:00 AM - 7:00 PM",
    },
    {
      icon: <Email sx={{ fontSize: 48, color: "#183d62ff" }} />,
      title: "Email",
      text: "support@demorgialogistics.com",
    },
    {
      icon: <Phone sx={{ fontSize: 48, color: "#183d62ff" }} />,
      title: "Phones",
      text: "+91 1146078736",
    },
  ].map((item, i) => (
    <Grid
      key={i}
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Paper
        elevation={2}
        sx={{
          width: { xs: "320px", sm: "320px", md: "320px" }, // fixed equal width
          height: "270px", // fixed equal height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 3,
          borderRadius: 3,
          boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
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
            sx={{
              color: "#475569",
              lineHeight: 1.6,
              fontSize: "0.95rem",
              whiteSpace: "pre-line", // Enables line breaks in address
            }}
          >
            {item.text}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  ))}
</Grid>

        {/* --------- Google Map --------- */}
        <Box sx={{ mt: 6 }}>
          <iframe
            title="Demorgia Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.927099745345!2d77.08136625!3d28.52859465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f8c4e2d2b5b%3A0x123456789abcdef!2s2nd%20Floor%2C%20Plot%20No.%2002%2C%20Khasra%20No.%20348%2F02%2C%20Sahabad%2C%20Muhammadpur%2C%20Near%20Bansal%20Farm%2C%20New%20Delhi%20-%20110061!5e0!3m2!1sen!2sin!4v1699955550000!5m2!1sen!2sin"
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