// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   Container,
// } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import PlaceIcon from "@mui/icons-material/Place";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"; // plane icon
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"; // quick links arrow
// import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Freight
// import InventoryIcon from "@mui/icons-material/Inventory"; // Warehousing
// import GavelIcon from "@mui/icons-material/Gavel"; // Compliance
// import AssignmentIcon from "@mui/icons-material/Assignment"; // Customs Clearing
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"; // SVB Consulting
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; // Value Added

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         width: "100%",
//         backgroundColor: "#0f3a4c", // dark teal
//         color: "#ffffff",
//         position: "relative",
//         pt: { xs: 8, md: 10 },
//         pb: { xs: 8, md: 10 },
//       }}
//     >
//       {/* Background world map */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: "url('/public/images/footer-v1-pattern.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center center",
//           backgroundSize: "140%",
//           opacity: 0.09,
//         }}
//       />

//       <Container maxWidth={false} sx={{ px: { xs: 3, md: 12 }, position: "relative" }}>
//         <Grid container columnSpacing={{ xs: 4, md: 10 }} rowSpacing={6}>
//           {/* Column 1: Logo + About */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Box display="flex" alignItems="center" gap={2} mb={2}>
//               <Box
//                 component="img"
//                 src="/public/images/Demorgia (1).png"
//                 alt="Company Logo"
//                 sx={{ width: 65, height: 65, objectFit: "contain" }}
//               />
//               <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                 Demorgia Aviation & Logistics
//               </Typography>
//             </Box>
//             <Typography
//               variant="body1"
//               sx={{
//                 mb: 2,
//                 lineHeight: 1.8,
//                 maxWidth: 280, // restrict width so it wraps into 2 lines
//               }}
//             >
//               Govt. Approved CHA & Freight Forwarder providing seamless logistics
//               and supply chain solutions globally.
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{ fontStyle: "italic", color: "#ff4c1c", fontWeight: 600 }}
//             >
//               “Delivering Trust in Every Shipment”
//             </Typography>
//           </Grid>

//           {/* Column 2: Quick Links */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: 700,
//                 mb: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//               }}
//             >
//               Quick Links
//               <FlightTakeoffIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
//             </Typography>
//             <Box display="flex" flexDirection="column" gap={1.8}>
//               {["Home", "About Us", "Services", "Contact Us"].map((item, i) => (
//                 <Box key={i} display="flex" alignItems="center" gap={1}>
//                   <ArrowRightAltIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
//                   <Link
//                     href="#"
//                     underline="none"
//                     color="inherit"
//                     sx={{
//                       fontSize: "1rem",
//                       transition: "color 0.3s ease",
//                       "&:hover": { color: "#ff4c1c" },
//                     }}
//                   >
//                     {item}
//                   </Link>
//                 </Box>
//               ))}
//             </Box>
//           </Grid>

//           {/* Column 3: Services */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: 700,
//                 mb: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//               }}
//             >
//               Services
//               <FlightTakeoffIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
//             </Typography>
//             <Box display="flex" flexDirection="column" gap={1.8}>
//               <Box display="flex" alignItems="center" gap={1.2}>
//                 <AssignmentIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
//                 <Typography variant="body1">Customs Clearing</Typography>
//               </Box>
//               <Box display="flex" alignItems="center" gap={1.2}>
//                 <LocalShippingIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
//                 <Typography variant="body1">Freight Forwarding</Typography>
//               </Box>
//               <Box display="flex" alignItems="center" gap={1.2}>
//                 <InventoryIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
//                 <Typography variant="body1">Warehousing</Typography>
//               </Box>
//               <Box display="flex" alignItems="center" gap={1.2}>
//                 <BusinessCenterIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
//                 <Typography variant="body1">SVB Consulting</Typography>
//               </Box>
//               <Box display="flex" alignItems="center" gap={1.2}>
//                 <GavelIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
//                 <Typography variant="body1">Compliance</Typography>
//               </Box>
//               <Box display="flex" alignItems="center" gap={1.2}>
//                 <AddCircleOutlineIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
//                 <Typography variant="body1">Value Added Services</Typography>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Column 4: Contact */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: 700,
//                 mb: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//               }}
//             >
//               Contact Us
//               <FlightTakeoffIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
//               <PlaceIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
//               <Typography variant="body1">123 Logistics Hub, Mumbai, India</Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
//               <PhoneIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
//               <Typography variant="body1">+91 98765 43210</Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
//               <EmailIcon sx={{ fontSize: 22, color: "#ff4c1c" }} />
//               <Typography variant="body1">info@vikramlogistics.com</Typography>
//             </Box>
//             <Box>
//               <IconButton
//                 aria-label="linkedin"
//                 href="#"
//                 sx={{ color: "#ffffff", mr: 1, transition: "color 0.3s ease", "&:hover": { color: "#ff4c1c" } }}
//               >
//                 <LinkedInIcon />
//               </IconButton>
//               <IconButton
//                 aria-label="whatsapp"
//                 href="#"
//                 sx={{ color: "#ffffff", mr: 1, transition: "color 0.3s ease", "&:hover": { color: "#ff4c1c" } }}
//               >
//                 <WhatsAppIcon />
//               </IconButton>
//               <IconButton
//                 aria-label="twitter"
//                 href="#"
//                 sx={{ color: "#ffffff", mr: 1, transition: "color 0.3s ease", "&:hover": { color: "#ff4c1c" } }}
//               >
//                 <TwitterIcon />
//               </IconButton>
//               <IconButton
//                 aria-label="facebook"
//                 href="#"
//                 sx={{ color: "#ffffff", transition: "color 0.3s ease", "&:hover": { color: "#ff4c1c" } }}
//               >
//                 <FacebookIcon />
//               </IconButton>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Bottom bar */}
//         <Box
//           sx={{
//             borderTop: "1px solid rgba(255,255,255,0.15)",
//             mt: 10,
//             pt: 3,
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 2,
//           }}
//         >
//           <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
//             © 2025 Vikram Aviation & Logistics Pvt Ltd. All Rights Reserved.
//           </Typography>
//           <Box display="flex" gap={3}>
//             <Link
//               href="#"
//               underline="none"
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease",
//                 "&:hover": { color: "#ff4c1c" },
//               }}
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="#"
//               underline="none"
//               color="inherit"
//               sx={{
//                 transition: "color 0.3s ease",
//                 "&:hover": { color: "#ff4c1c" },
//               }}
//             >
//               Terms & Conditions
//             </Link>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
// Footer.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Container,
} from "@mui/material";

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
        pb: 0, // bottom bar will provide final padding
      }}
    >
      {/* Subtle world-map background (absolute) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/public/images/footer-v1-pattern.png')", // replace with your map image
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "140%",
          opacity: 0.09,
          pointerEvents: "none",
        }}
      />

      {/* Top Section: 4 columns */}
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 12 }, position: "relative" }}>
        <Grid container columnSpacing={{ xs: 4, md: 10 }} rowSpacing={6} alignItems="flex-start">
          {/* Column 1: Logo & About */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Box
                component="img"
                src="/public/images/Demorgia (1).png" // replace with your logo path
                alt="Company Logo"
                sx={{ width: 65, height: 65, objectFit: "contain" }}
              />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Demorgia Aviation & Logistics
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                lineHeight: 1.8,
                maxWidth: { xs: "100%", md: 280 }, // restrict on md+ so it wraps into 2 lines
              }}
            >
              Govt. Approved CHA & Freight Forwarder providing seamless logistics
              and supply chain solutions globally.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontStyle: "italic", color: "#ff4c1c", fontWeight: 600 }}>
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
              {["Home", "About Us", "Services", "Contact Us"].map((item, i) => (
                <Box key={i} display="flex" alignItems="center" gap={1}>
                  <ArrowRightAltIcon sx={{ fontSize: 20, color: "#ff4c1c" }} />
                  <Link
                    href="#"
                    underline="none"
                    color="inherit"
                    sx={{
                      fontSize: "1rem",
                      transition: "color 0.28s ease, transform 0.18s ease",
                      "&:hover": { color: "#ff4c1c", transform: "translateX(3px)" },
                    }}
                  >
                    {item}
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

      {/* Bottom bar: separate & pinned at footer bottom */}
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
                sx={{
                  transition: "color 0.28s ease",
                  "&:hover": { color: "#ff4c1c" },
                }}
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{
                  transition: "color 0.28s ease",
                  "&:hover": { color: "#ff4c1c" },
                }}
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