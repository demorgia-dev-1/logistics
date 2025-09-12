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
  Phone,
  Email,
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

  //  Mapping tabs to section IDs
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
    // Navigate to homepage and tell it which section to scroll
    navigate("/", { state: { scrollTo: sectionId } });
  } else {
    // Already on homepage → just scroll
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};


  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar */}
      {!isMobile && (
        <Box
          sx={{
            backgroundColor: "#0b2c3d",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            px: 4,
            height: 50,
            fontSize: "14px",
            position: "relative",
            zIndex: 1000,
          }}
        >
          {/* Left Contact Info */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ color: "#ff4c1c", fontSize: 18 }} />
              <Typography>+123 456 789</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email sx={{ color: "#ff4c1c", fontSize: 18 }} />
              <Typography>support@demorgia.com</Typography>
            </Box>
          </Box>

          {/* Right Orange Triangle - Social Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#ff4c1c",
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              px: 4,
              alignSelf: "stretch",
              height: "100%",
            }}
          >
            <IconButton color="inherit" size="small">
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small">
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small">
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small">
              <Search fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* Main Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#0f3a4c",
          boxShadow: "none",
          top: 0,
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            px: 0,
            justifyContent: "space-between",
            minHeight: { xs: 70, md: 100 },
          }}
        >
          {/* Orange Logo Block */}
          <Box
            sx={{
              backgroundColor: "#ff4c1c",
              clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
              display: "flex",
              alignItems: "center",
              px: 4,
              py: 1.5,
              pr: 8,
              mr: 6,
              alignSelf: "stretch",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                ml: -2.8,
              }}
            >
              {/*  Logo  */}
              <Box
                sx={{
                  height: 60, // fixed container height
                  display: "flex",
                  alignItems: "center",
                  mr: -5,
                  ml: -3,
                  mt: 2,
                }}
              >
                <Box
                  component="img"
                  src="/public/images/navbarLogo.png"
                  alt="Demorgia Logo"
                  sx={{
                    height: "320%", // logo fills container height
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Company Name + Tagline */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "white", lineHeight: 1.2 }}
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
              onClick={() => navigate("/contact")}
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
            <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
              <MenuIcon sx={{ color: "white" }} />
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