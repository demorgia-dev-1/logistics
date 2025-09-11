import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Container,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#0f3a4c",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 10 },
        pb: 0,
      }}
    >
      {/* Subtle world-map background (absolute) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/public/images/footer-v1-pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "140%",
          opacity: 0.09,
          pointerEvents: "none",
        }}
      />

      {/* Top Section: 4 columns */}
      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, md: 12 }, position: "relative" }}
      >
        <Grid
          container
          columnSpacing={{ xs: 4, md: 10 }}
          rowSpacing={6}
          alignItems="flex-start"
        >
          {/* Column 1: Logo & About */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              {/* Logo */}
              <Box
                sx={{
                  height: 70,
                  width: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  mr: 1,
                  mt: -1,
                }}
              >
                <Box
                  component="img"
                  src="/public/images/demo4.png"
                  alt="Company Logo"
                  sx={{
                    height: "290%",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Typography
                variant="h5"
                sx={{ fontWeight: 720, mt: -4.6 }}
              >
                Demorgia Aviation & Logistics
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                lineHeight: 1.8,
                maxWidth: { xs: "100%", md: 280 },
              }}
            >
              Govt. Approved CHA & Freight Forwarder providing seamless logistics
              and supply chain solutions globally.
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontStyle: "italic",
                color: "#ff4c1c",
                fontWeight: 600,
              }}
            >
              “Delivering Trust in Every Shipment”
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Quick Links
              <FlightTakeoffIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
            </Typography>

            <Box display="flex" flexDirection="column" gap={1.8}>
              {[
                { label: "Home", id: "hero" },
                { label: "About Us", id: "about" },
                { label: "Services", id: "services" },
                { label: "Contact Us", id: "why-choose-us" },
              ].map((item, i) => (
                <Box key={i} display="flex" alignItems="center" gap={1}>
                  <ArrowRightAltIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                  <Link
                    component="button"
                    underline="none"
                    color="inherit"
                    sx={{
                      fontSize: "1rem",
                      transition:
                        "color 0.28s ease, transform 0.18s ease",
                      textAlign: "left",
                      "&:hover": {
                        color: "#ff4c1c",
                        transform: "translateX(3px)",
                      },
                    }}
                    onClick={() => {
                      if (location.pathname !== "/") {
                        navigate("/", { state: { scrollTo: item.id } });
                      } else {
                        const section = document.getElementById(item.id);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Services
              <FlightTakeoffIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
            </Typography>

            <Box display="flex" flexDirection="column" gap={1.8}>
              <Box display="flex" alignItems="center" gap={1.2}>
                <AssignmentIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                <Typography variant="body1">Customs Clearing</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1.2}>
                <LocalShippingIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                <Typography variant="body1">Freight Forwarding</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1.2}>
                <InventoryIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                <Typography variant="body1">Warehousing</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1.2}>
                <BusinessCenterIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                <Typography variant="body1">SVB Consulting</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1.2}>
                <GavelIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                <Typography variant="body1">Compliance</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1.2}>
                <AddCircleOutlineIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                <Typography variant="body1">Value Added Services</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Column 4: Contact & Social */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Contact Us
              <FlightTakeoffIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
              <PlaceIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
              <Typography variant="body1">123 Logistics Hub, Mumbai, India</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
              <PhoneIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
              <Typography variant="body1">+91 98765 43210</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <EmailIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
              <Typography variant="body1">support@demorgia.com</Typography>
            </Box>

            <Box>
              <IconButton
                aria-label="linkedin"
                href="#"
                sx={{ color: "#ffffff", mr: 1, transition: "color 0.28s ease", "&:hover": { color: "#ff4c1c" } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="whatsapp"
                href="#"
                sx={{ color: "#ffffff", mr: 1, transition: "color 0.28s ease", "&:hover": { color: "#ff4c1c" } }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                aria-label="twitter"
                href="#"
                sx={{ color: "#ffffff", mr: 1, transition: "color 0.28s ease", "&:hover": { color: "#ff4c1c" } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="facebook"
                href="#"
                sx={{ color: "#ffffff", transition: "color 0.28s ease", "&:hover": { color: "#ff4c1c" } }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom bar */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          mt: 6,
          pt: 3,
          pb: { xs: 6, md: 6 },
          px: { xs: 3, md: 12 },
          backgroundColor: "transparent",
        }}
      >
        <Container maxWidth={false} sx={{ px: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
              © 2025 Vikram Aviation & Logistics Pvt Ltd. All Rights Reserved.
            </Typography>

            <Box display="flex" gap={3}>
              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{ transition: "color 0.28s ease", "&:hover": { color: "#ff4c1c" } }}
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{ transition: "color 0.28s ease", "&:hover": { color: "#ff4c1c" } }}
              >
                Terms & Conditions
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;