// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   IconButton,
//   Button,
// } from "@mui/material";
// import {
//   Facebook,
//   Instagram,
//   LinkedIn,
//   Search,
//   LocalShipping,
// } from "@mui/icons-material";

// function Navbar() {
//   const [active, setActive] = useState("Home");

//   const menuItems = [
//     "Home",
//     "About Us",
//     "Services",
//     "Pages",
//     "Shop",
//     "Blog",
//     "Contact",
//   ];

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/*  Top Bar */}
//       <Box
//         sx={{
//           backgroundColor: "#0b2c3d",
//           color: "white",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           px: 4,
//           py: 1,
//           fontSize: "14px",
//         }}
//       >
//         <Box sx={{ display: "flex", gap: 3 }}>
//           <Typography>📞 +123 456 789</Typography>
//           <Typography>📧 support@logistra.com</Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1,
//             backgroundColor: "#ff4c1c",
//             clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             px: 4,
//             py: 0.5,
//           }}
//         >
//           <IconButton color="inherit" size="small">
//             <Facebook fontSize="small" />
//           </IconButton>
//           <IconButton color="inherit" size="small">
//             <Instagram fontSize="small" />
//           </IconButton>
//           <IconButton color="inherit" size="small">
//             <LinkedIn fontSize="small" />
//           </IconButton>
//           <IconButton color="inherit" size="small">
//             <Search fontSize="small" />
//           </IconButton>
//         </Box>
//       </Box>

//       {/*  Main Navbar */}
//       <AppBar
//         position="static"
//         sx={{ backgroundColor: "#0f3a4c", boxShadow: "none" }}
//       >
//         <Toolbar sx={{ px: 0 }}>
//           {/* Left orange background with logo */}
//           <Box
//             sx={{
//               backgroundColor: "#ff4c1c",
//               clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               px: 3,
//               py: 1,
//               mr: 6,
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <LocalShipping sx={{ fontSize: 32, color: "white" }} />
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: "bold", color: "white" }}
//               >
//                 Logistiq
//               </Typography>
//             </Box>
//             <Typography
//               variant="caption"
//               sx={{ color: "white", fontSize: "12px", mt: 0.5 }}
//             >
//               Transport Solution
//             </Typography>
//           </Box>

//           {/* Menu Items with spacing */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: "flex",
//               justifyContent: "center",
//               gap: 5, 
//             }}
//           >
//             {menuItems.map((item) => (
//               <Button
//                 key={item}
//                 onClick={() => setActive(item)}
//                 sx={{
//                   color: active === item ? "#ff4c1c" : "white",
//                   fontWeight: active === item ? "bold" : "normal",
//                   fontSize: "15px",
//                   letterSpacing: "0.5px",
//                 }}
//               >
//                 {item}
//               </Button>
//             ))}
//           </Box>

//           {/* Track Order Button */}
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#ff4c1c",
//               "&:hover": { backgroundColor: "#e63e10" },
//               fontWeight: "bold",
//               px: 3,
//             }}
//           >
//             Track Order
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Navbar;
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
  LocalShipping,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      {/* Top Bar */}
      {!isMobile && (
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
      )}

      {/* Main Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#0f3a4c", boxShadow: "none" }}>
        <Toolbar sx={{ px: 0, justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            sx={{
              backgroundColor: "#ff4c1c",
              clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: 3,
              py: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalShipping sx={{ fontSize: 32, color: "white" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
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

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 5 }}>
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
          )}

          {/* Track Order (Desktop) */}
          {!isMobile && (
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
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Mobile */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
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
                  setActive(item);
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
            sx={{ backgroundColor: "#ff4c1c", "&:hover": { backgroundColor: "#e63e10" } }}
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