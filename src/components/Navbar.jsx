import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Search,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = ["Home", "About Us", "Services", "Blog", "Contact"];

  // Mapping tabs to section IDs
  const sectionIds = {
    Home: "hero",
    "About Us": "about",
    Services: "services",
    Contact: "contact",
    Blog: "blogs",
  };

  const handleScroll = (item) => {
    setActive(item);
    const sectionId = sectionIds[item];
    if (item === "Contact") {
      navigate("/contact");
      return;
    }
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Main Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#0f3a4c",
          boxShadow: "none",
          top: 0,
          zIndex: 1200,
          overflow: "visible",
        }}
      >
        <Toolbar
          sx={{
            px: 0,
            justifyContent: "space-between",
            minHeight: { xs: 70, md: 100 },
            maxHeight: { xs: 120, md: 100 }, 
          }}
        >
          {/* Orange Logo Block */}
          <Box
            sx={{
              backgroundColor: "#ff4c1c",
              clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
              display: "flex",
              alignItems: "center",
              px: { xs: 2, md: 4 },
              py: { xs: 1, md: 1.5 },
              pr: { xs: 4, md: 8 },
              mr: { xs: 2, md: 6 },
              alignSelf: "stretch",
              flexShrink: 0,
              maxWidth: { xs: 260, md: 420 },
              height: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                ml: -1.5,
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 0,
                  ml: 0,
                  mt: 0.5,
                }}
              >
                <Box
                  component="img"
                  src="/images/navbarLogo.png"
                  alt="Demorgia Logo"
                  sx={{
                    ml: -2,
                    maxHeight: "100%",
                    height: { xs: 140, md: 160 }, // slightly smaller on mobile
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>

              {/* Company Name */}
              <Box sx={{ display: "flex", flexDirection: "column", ml: -1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    lineHeight: 1.2,
                    fontSize: { xs: "20px", md: "24px" }, // smaller on mobile
                  }}
                >
                  Demorgia Aviation & Logistics
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                gap: 5,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => handleScroll(item)}
                  sx={{
                    color: active === item ? "#ff4c1c" : "white",
                    fontWeight: active === item ? "bold" : "normal",
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* Track Order Button */}
          {!isMobile && (
            <Button
              variant="contained"
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/", { state: { scrollTo: "shipment" } });
                } else {
                  const section = document.getElementById("shipment");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              sx={{
                backgroundColor: "#ff4c1c",
                "&:hover": { backgroundColor: "#e63e10" },
                fontWeight: "bold",
                fontSize: "14px",
                px: 3,
                alignSelf: "stretch",
              }}
            >
              Track Order
            </Button>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={() => setOpenDrawer(true)}
              sx={{
                ml: "auto",
                position: "relative",
                zIndex: 1300,
                mr: 1,
              }}
              aria-label="open menu"
            >
              <MenuIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Menu
          </Typography>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  handleScroll(item);
                  setOpenDrawer(false);
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    color: active === item ? "#ff4c1c" : "black",
                    fontWeight: active === item ? "bold" : "normal",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: "shipment" } });
              } else {
                const section = document.getElementById("shipment");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            sx={{
              backgroundColor: "#ff4c1c",
              "&:hover": { backgroundColor: "#e63e10" },
            }}
          >
            Track Order
          </Button>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <Facebook />
            <Instagram />
            <LinkedIn />
            <Search />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;