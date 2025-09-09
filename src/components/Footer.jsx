import React from "react";
import { Box, Grid, Typography, TextField, Button, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#06323A",
        color: "#ddd",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* -------- Column 1: Logo & About -------- */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#ffffff", mb: 2 }}
          >
            Demorgia Aviation & Logistics Pvt Ltd.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
            Logistic service provider company plays a pivotal role in the
            global supply chain.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontStyle: "italic", color: "#aaa" }}
          >
            “Delivering Trust in Every Shipment”
          </Typography>
        </Grid>

        {/* -------- Column 2: Quick Links -------- */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
          >
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ "&:hover": { color: "#ff4c1c" }, cursor: "pointer" }}>
              Home
            </Typography>
            <Typography variant="body2" sx={{ "&:hover": { color: "#ff4c1c" }, cursor: "pointer" }}>
              About
            </Typography>
            <Typography variant="body2" sx={{ "&:hover": { color: "#ff4c1c" }, cursor: "pointer" }}>
              Services
            </Typography>
            <Typography variant="body2" sx={{ "&:hover": { color: "#ff4c1c" }, cursor: "pointer" }}>
              Contact
            </Typography>
          </Stack>
        </Grid>

        {/* -------- Column 3: Services -------- */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
          >
            Services
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">Customs Clearing</Typography>
            <Typography variant="body2">Freight Forwarding</Typography>
            <Typography variant="body2">Warehousing</Typography>
            <Typography variant="body2">Transport Solutions</Typography>
          </Stack>
        </Grid>

        {/* -------- Column 4: Contact & Social -------- */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
          >
            Get In Touch
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            3060 Commercial Street Road,
            <br /> Fratton, Australia
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Phone: +880 123 456 789
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Email: support@logistiq.com
          </Typography>

          <Stack direction="row" spacing={2}>
            <IconButton sx={{ color: "#fff", "&:hover": { color: "#ff4c1c" } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", "&:hover": { color: "#ff4c1c" } }}>
              <WhatsAppIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", "&:hover": { color: "#ff4c1c" } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", "&:hover": { color: "#ff4c1c" } }}>
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      {/* -------- Bottom Bar -------- */}
      <Box
        sx={{
          textAlign: "center",
          mt: 6,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          pt: 3,
          fontSize: "14px",
          color: "#aaa",
        }}
      >
        © Copyright 2025 Logistiq. All Rights Reserved
      </Box>
    </Box>
  );
}

export default Footer;