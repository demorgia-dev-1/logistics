// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Stack,
// } from "@mui/material";
// import PublicIcon from "@mui/icons-material/Public";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import PhoneIcon from "@mui/icons-material/Phone";

// function AboutSection() {
//   return (
//     <Box
//       id="about"
//       sx={{
//         py: { xs: 6, md: 10 },
//         px: { xs: 3, md: 8 },
//         backgroundColor: "#fff",
//       }}
//     >
//       <Grid container spacing={6} alignItems="center" columnSpacing={{ xs: 0, md: 20 }}>
//         {/* ---------------- Left Column ---------------- */}
//         <Grid item xs={12} md={6}>
//           {/* Section label */}
//           <Stack direction="row" alignItems="center" spacing={1} mb={2}>
//             <Typography
//               sx={{
//                 fontSize: "0.95rem",
//                 fontWeight: "bold",
//                 color: "#ff4c1c",
//                 textTransform: "uppercase",
//                 letterSpacing: "1px",
//               }}
//             >
//               Our Company
//             </Typography>
//             <Typography sx={{ color: "#ff4c1c" }}>✈</Typography>
//           </Stack>

//           {/* =========================
//               Heading with responsive underline
//               ========================= */}
//           <Box sx={{ mb: 3 }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: { xs: "2rem", md: "2.6rem" },
//                 lineHeight: 1.3,
//               }}
//             >
//               Our Expertise Stands in
//             </Typography>

//             {/* CHANGED: Wrapped LOGISTICS SOLUTIONS inside <span> with custom underline */}
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: { xs: "2rem", md: "2.6rem" },
//                 lineHeight: 1.3,
//                 color: "#ff4c1c",
//                 textTransform: "uppercase",
//               }}
//             >
//               <span
//                 style={{
//                   display: "inline-block", // keeps underline tight to text
//                   position: "relative",
//                   paddingBottom: "6px", // space for underline
//                 }}
//               >
//                 LOGISTICS SOLUTIONS
//                 <span
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     width: "100%", // underline matches text width
//                     height: "3px",
//                     backgroundColor: "#ff4c1c",
//                   }}
//                 />
//               </span>
//             </Typography>
//           </Box>
//           {/* ========================= */}

//           {/* Paragraph */}
//           <Typography
//             sx={{
//               color: "text.secondary",
//               fontSize: { xs: "1rem", md: "1.05rem" },
//               mb: 4,
//               maxWidth: "600px",
//             }}
//           >
//             Logistic service provider company plays a pivotal role in the global
//             supply chain ecosystem by efficiently managing the movement of goods
//             from origin to final destination. These companies offer a diverse.
//           </Typography>

//           {/* Info Cards */}
//           <Grid container spacing={3} mb={4}>
//             <Grid item xs={12} sm={6}>
//               <Card
//                 elevation={4}
//                 sx={{
//                   borderLeft: "3px solid #ff4c1c",
//                   maxWidth: "320px",
//                 }}
//               >
//                 <CardContent sx={{ p: 3 }}>
//                   <PublicIcon sx={{ color: "#ff4c1c", fontSize: 40, mb: 1 }} />
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     Worldwide Service
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "text.secondary", fontSize: "0.9rem" }}
//                   >
//                     Logistic service provider company plays a pivotal role in
//                     the global.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <Card
//                 elevation={3}
//                 sx={{
//                   borderLeft: "3px solid #ff4c1c",
//                   maxWidth: "320px",
//                 }}
//               >
//                 <CardContent sx={{ p: 3 }}>
//                   <SupportAgentIcon
//                     sx={{ color: "#ff4c1c", fontSize: 40, mb: 1 }}
//                   />
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     24/7 Online Support
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "text.secondary", fontSize: "0.9rem" }}
//                   >
//                     Logistic service provider company plays a pivotal role in
//                     the global.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>

//           {/* Button + Phone */}
//           <Stack
//             direction={{ xs: "column", sm: "row" }}
//             spacing={3}
//             alignItems={{ xs: "flex-start", sm: "center" }}
//           >
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#ff4c1c",
//                 "&:hover": { backgroundColor: "#e63e10" },
//                 px: 4,
//                 py: 1.5,
//                 fontWeight: "bold",
//                 fontSize: "1rem",
//                 textTransform: "none",
//                 borderRadius: "8px",
//               }}
//             >
//               More About Us →
//             </Button>
//             <Stack>
//               <Typography
//                 variant="body2"
//                 sx={{ color: "#ff4c1c", fontWeight: "bold" }}
//               >
//                 Make A Phone Call
//               </Typography>
//               <Stack direction="row" spacing={1} alignItems="center">
//                 <PhoneIcon sx={{ color: "#ff4c1c" }} />
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: "bold", color: "#0b1c2c" }}
//                 >
//                   +880 123 456 789
//                 </Typography>
//               </Stack>
//             </Stack>
//           </Stack>
//         </Grid>

//         {/* ---------------- Right Column ---------------- */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ position: "relative" }}>
//             {/* Plane Image */}
//             <Box
//               component="img"
//               src="/images/plane.jpg"
//               alt="Plane"
//               sx={{
//                 width: "100%",
//                 borderRadius: "8px",
//               }}
//             />

//             {/* Woman Image Overlay */}
//             <Box
//               component="img"
//               src="/images/lady.jpg"
//               alt="Worker"
//               sx={{
//                 width: { xs: "75%", md: "65%" },
//                 borderRadius: "8px",
//                 position: "absolute",
//                 bottom: { xs: "-15%", md: "-20%" },
//                 right: { xs: "10%", md: "15%" },
//                 boxShadow: 3,
//               }}
//             />

//             {/* Circular Badge */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: { xs: "-20%", md: "-10%" },
//                 left: { xs: "0%", md: "-10%" },
//                 backgroundColor: "#ff4c1c",
//                 color: "#fff",
//                 borderRadius: "50%",
//                 width: { xs: 120, md: 160 },
//                 height: { xs: 120, md: 160 },
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontWeight: "bold",
//                 fontSize: { xs: "0.75rem", md: "0.9rem" },
//                 textAlign: "center",
//                 p: 2,
//               }}
//             >
//               Welcome To Our Company <br /> Since 2002
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default AboutSection;
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";

function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: "#fff",
        display: "flex",              // ✅ Added for centering
        justifyContent: "center",     // ✅ Centers the grid
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        columnSpacing={{ xs: 0, md: 20 }}
        sx={{
          maxWidth: "1200px",         // ✅ Prevents full-width stretch
          width: "100%",
        }}
      >
        {/* ---------------- Left Column ---------------- */}
        <Grid item xs={12} md={6}>
          {/* Section label */}
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: "bold",
                color: "#ff4c1c",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Our Company
            </Typography>
            <Typography sx={{ color: "#ff4c1c" }}>✈</Typography>
          </Stack>

          {/* =========================
              Heading with responsive underline
              ========================= */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "2.6rem" },
                lineHeight: 1.3,
              }}
            >
              Our Expertise Stands in
            </Typography>

            {/* CHANGED: Wrapped LOGISTICS SOLUTIONS inside <span> with custom underline */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "2.6rem" },
                lineHeight: 1.3,
                color: "#ff4c1c",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  display: "inline-block", // keeps underline tight to text
                  position: "relative",
                  paddingBottom: "6px", // space for underline
                }}
              >
                LOGISTICS SOLUTIONS
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%", // underline matches text width
                    height: "3px",
                    backgroundColor: "#ff4c1c",
                  }}
                />
              </span>
            </Typography>
          </Box>
          {/* ========================= */}

          {/* Paragraph */}
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.05rem" },
              mb: 4,
              maxWidth: "600px",
            }}
          >
            Logistic service provider company plays a pivotal role in the global
            supply chain ecosystem by efficiently managing the movement of goods
            from origin to final destination. These companies offer a diverse.
          </Typography>

          {/* Info Cards */}
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6}>
              <Card
                elevation={4}
                sx={{
                  borderLeft: "3px solid #ff4c1c",
                  maxWidth: "320px",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <PublicIcon sx={{ color: "#ff4c1c", fontSize: 40, mb: 1 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Worldwide Service
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                  >
                    Logistic service provider company plays a pivotal role in
                    the global.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card
                elevation={3}
                sx={{
                  borderLeft: "3px solid #ff4c1c",
                  maxWidth: "320px",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <SupportAgentIcon
                    sx={{ color: "#ff4c1c", fontSize: 40, mb: 1 }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    24/7 Online Support
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                  >
                    Logistic service provider company plays a pivotal role in
                    the global.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Button + Phone */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff4c1c",
                "&:hover": { backgroundColor: "#e63e10" },
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: "8px",
              }}
            >
              More About Us →
            </Button>
            <Stack>
              <Typography
                variant="body2"
                sx={{ color: "#ff4c1c", fontWeight: "bold" }}
              >
                Make A Phone Call
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ color: "#ff4c1c" }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#0b1c2c" }}
                >
                  +880 123 456 789
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        {/* ---------------- Right Column ---------------- */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }}>
            {/* Plane Image */}
            <Box
              component="img"
              src="/images/plane.jpg"
              alt="Plane"
              sx={{
                width: "100%",
                borderRadius: "8px",
              }}
            />

            {/* Woman Image Overlay */}
            <Box
              component="img"
              src="/images/lady.jpg"
              alt="Worker"
              sx={{
                width: { xs: "75%", md: "65%" },
                borderRadius: "8px",
                position: "absolute",
                bottom: { xs: "-15%", md: "-20%" },
                right: { xs: "10%", md: "15%" },
                boxShadow: 3,
              }}
            />

            {/* Circular Badge */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "-20%", md: "-10%" },
                left: { xs: "0%", md: "-10%" },
                backgroundColor: "#ff4c1c",
                color: "#fff",
                borderRadius: "50%",
                width: { xs: 120, md: 160 },
                height: { xs: 120, md: 160 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: { xs: "0.75rem", md: "0.9rem" },
                textAlign: "center",
                p: 2,
              }}
            >
              Welcome To Our Company <br /> Since 2002
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;