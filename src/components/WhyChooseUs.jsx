// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Button,
//   TextField,
//   MenuItem,
//   Stack,
//   InputAdornment,
// } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// function WhyChooseUs() {
//   return (
//     <Box
//       id="whychooseus"
//       sx={{
//         py: { xs: 6, md: 10 },
//         px: { xs: 3, md: 8 },
//         backgroundColor: "#06323A", // dark teal bg
//         color: "#fff",
//       }}
//     >
//       <Grid
//         container
//         spacing={6}
//         alignItems="center"
//         justifyContent="center"
//         sx={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {/* ---------------- Left Column ---------------- */}
//         <Grid item xs={12} md={6}>
//           {/* Section label */}
//           <Typography
//             sx={{
//               fontSize: "0.95rem",
//               fontWeight: "bold",
//               color: "#ff4c1c",
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//               mb: 2,
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             — Why Choose Us ✈
//           </Typography>

//           {/* Heading */}
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               fontSize: { xs: "2rem", md: "2.6rem" },
//               lineHeight: 1.3,
//               mb: 3,
//             }}
//           >
//             Efficient, Safe, & Swift <br />
//             Logistics{" "}
//             <span style={{ color: "#ff4c1c" }}>SOLUTION!</span>
//           </Typography>

//           {/* Bullet points */}
//           <Stack spacing={2} sx={{ mb: 4 }}>
//             <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <span style={{ color: "#ff4c1c" }}>★</span> Make long term
//               business decisions
//             </Typography>
//             <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <span style={{ color: "#ff4c1c" }}>★</span> Transparent career
//               journey and support.
//             </Typography>
//             <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <span style={{ color: "#ff4c1c" }}>★</span> Be a responsible
//               member of the community
//             </Typography>
//             <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <span style={{ color: "#ff4c1c" }}>★</span> Provide a service we
//               are proud of
//             </Typography>
//           </Stack>

//           {/* Button */}
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#ff4c1c",
//               "&:hover": { backgroundColor: "#e63e10" },
//               px: 4,
//               py: 1.5,
//               fontWeight: "bold",
//               fontSize: "1rem",
//               textTransform: "none",
//               borderRadius: "8px",
//             }}
//           >
//             Contact Us →
//           </Button>
//         </Grid>

//         {/* ---------------- Right Column (Form) ---------------- */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               backgroundColor: "#fff",
//               color: "#000",
//               p: 4,
//               borderRadius: "8px",
//               boxShadow: 3,
//             }}
//           >
//             <Typography
//               variant="h5"
//               fontWeight="bold"
//               sx={{ mb: 3, color: "#0b1c2c" }}
//             >
//               Request a Quote
//             </Typography>

//             <Grid container spacing={2}>
//               {/* Name */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   placeholder="Name"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <PersonIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               {/* Email */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   placeholder="Email"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <EmailIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               {/* Phone */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   placeholder="Phone"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <PhoneIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               {/* Date */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   placeholder="Date"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <CalendarTodayIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>

//               {/* Distance (slider + number box imitation) */}
//               <Grid item xs={12}>
//                 <Typography sx={{ mb: 1, fontWeight: "bold" }}>
//                   Distance (Kilo):
//                 </Typography>
//                 <Stack
//                   direction="row"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ width: "100%" }}
//                 >
//                   <input
//                     type="range"
//                     min="0"
//                     max="3000"
//                     defaultValue="1500"
//                     style={{ flex: 1, accentColor: "#ff4c1c" }}
//                   />
//                   <TextField value="0 - 3000" size="small" />
//                 </Stack>
//               </Grid>

//               {/* Freight type */}
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth select defaultValue="">
//                   <MenuItem value="">Freight Type</MenuItem>
//                   <MenuItem value="air">Air Freight</MenuItem>
//                   <MenuItem value="sea">Sea Freight</MenuItem>
//                   <MenuItem value="land">Land Transport</MenuItem>
//                 </TextField>
//               </Grid>

//               {/* Load type */}
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth select defaultValue="">
//                   <MenuItem value="">Load</MenuItem>
//                   <MenuItem value="small">Small Load</MenuItem>
//                   <MenuItem value="medium">Medium Load</MenuItem>
//                   <MenuItem value="large">Large Load</MenuItem>
//                 </TextField>
//               </Grid>
//             </Grid>

//             {/* Button */}
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 3,
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
//               Contact Us →
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default WhyChooseUs;
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function WhyChooseUs() {
  return (
    <Box
      id="whychooseus"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#06323A",
        color: "#fff",
      }}
    >
      {/* 👇 Inline CSS for slider + dropdown overrides */}
      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: #ddd;
          border-radius: 5px;
          outline: none;
        }
        input[type="range"]::-webkit-slider-runnable-track {
          height: 6px;
          background: #ff4c1c;
          border-radius: 5px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: #fff;
          border: 2px solid #ff4c1c;
          border-radius: 50%;
          cursor: pointer;
          margin-top: -6px;
        }
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: #fff;
          border: 2px solid #ff4c1c;
          border-radius: 50%;
          cursor: pointer;
        }
        /* Dropdown placeholder color */
        .MuiSelect-select {
          color: #555 !important;
        }
      `}</style>

      <Grid
        container
        spacing={6}
        alignItems="stretch"
        justifyContent="center"
        columnSpacing={{ xs: 0, md: 20 }}
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* ---------------- Left Column ---------------- */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: "0.95rem",
              fontWeight: "bold",
              color: "#ff4c1c",
              textTransform: "uppercase",
              letterSpacing: "1px",
              mb: 2,
            }}
          >
            — Why Choose Us ✈
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.6rem" },
              lineHeight: 1.3,
              mb: 3,
            }}
          >
            Efficient, Safe, & Swift <br />
            Logistics <span style={{ color: "#ff4c1c" }}>SOLUTION!</span>
          </Typography>

          <ul style={{ marginBottom: "24px", paddingLeft: "18px", color: "#fff" }}>
            <li>Make long term business decisions</li>
            <li>Transparent career journey and support.</li>
            <li>Be a responsible member of the community</li>
            <li>Provide a service we are proud of</li>
          </ul>

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
              width: "fit-content",
            }}
          >
            Contact Us →
          </Button>
        </Grid>

        {/* ---------------- Right Column (Form) ---------------- */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              p: 4,
              borderRadius: "8px",
              boxShadow: 3,
              width: "100%",
              maxWidth: { md: 600 },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 3, color: "#0b1c2c" }}
            >
              Request a Quote
            </Typography>

            <Grid container spacing={2}>
              {/* Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Name"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Phone */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Phone"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Date */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Date"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Distance */}
              <Grid item xs={12}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Distance (Kilo):
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={8} sm={9}>
                    <input type="range" min="0" max="3000" defaultValue="1500" />
                  </Grid>
                  <Grid item xs={4} sm={3}>
                    <TextField
                      value="0 - 3000"
                      size="small"
                      fullWidth
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Freight Type */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  select
                  defaultValue=""
                  variant="outlined"
                  displayEmpty
                >
                  <MenuItem value="">Freight Type</MenuItem>
                  <MenuItem value="air">Air Freight</MenuItem>
                  <MenuItem value="sea">Sea Freight</MenuItem>
                  <MenuItem value="land">Land Transport</MenuItem>
                </TextField>
              </Grid>

              {/* Load */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  select
                  defaultValue=""
                  variant="outlined"
                  displayEmpty
                >
                  <MenuItem value="">Load</MenuItem>
                  <MenuItem value="small">Small Load</MenuItem>
                  <MenuItem value="medium">Medium Load</MenuItem>
                  <MenuItem value="large">Large Load</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
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
              Contact Us →
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;