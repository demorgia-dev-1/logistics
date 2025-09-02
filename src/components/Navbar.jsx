import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Search,
  LocalShipping,
} from "@mui/icons-material";

function Navbar() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Pages",
    "Shop",
    "Blog",
    "Contact",
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 🔹 Top Bar */}
      <Box
        sx={{
          backgroundColor: "#0b2c3d",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          py: 1,
          fontSize: "14px",
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography>📞 +123 456 789</Typography>
          <Typography>📧 support@logistra.com</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#ff4c1c",
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
            px: 4,
            py: 0.5,
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

      {/* 🔹 Main Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0f3a4c", boxShadow: "none" }}
      >
        <Toolbar sx={{ px: 0 }}>
          {/* Left orange background with logo */}
          <Box
            sx={{
              backgroundColor: "#ff4c1c",
              clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: 3,
              py: 1,
              mr: 6,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalShipping sx={{ fontSize: 32, color: "white" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Logistiq
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{ color: "white", fontSize: "12px", mt: 0.5 }}
            >
              Transport Solution
            </Typography>
          </Box>

          {/* Menu Items with spacing */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 5, // 🔹 bigger gap for spacing like reference
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item}
                onClick={() => setActive(item)}
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

          {/* Track Order Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff4c1c",
              "&:hover": { backgroundColor: "#e63e10" },
              fontWeight: "bold",
              px: 3,
            }}
          >
            Track Order
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;