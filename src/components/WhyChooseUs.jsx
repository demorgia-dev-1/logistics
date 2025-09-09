import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Grid,
  TextField,
} from "@mui/material";
import { ArrowForward, PlayArrow } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// Wave animation variants
const waveContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};
const waveItem = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } };

// Styled section (full width)
const StyledSection = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: "#1e293b",
  backgroundImage: "url(/images/why-choose-v1-pattern.png)", // replace if needed
  backgroundSize: "90% auto",
  backgroundPosition: "right center",
  backgroundRepeat: "no-repeat",
  color: "white",
  paddingTop: 80,
  paddingBottom: 40,
  position: "relative",
  minHeight: "720px",
  display: "flex",
  alignItems: "center",
  // overlay
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(30,41,59,0.78)",
    zIndex: 1,
  },
  "& > *": { position: "relative", zIndex: 2 },

  [theme.breakpoints.down("md")]: {
    backgroundSize: "50% auto",
    paddingTop: 56,
    minHeight: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundSize: "40% auto",
    paddingTop: 40,
  },
}));

const Subtitle = styled(Typography)({
  fontSize: "1.1rem",
  fontStyle: "italic",
  marginBottom: 12,
  opacity: 0.95,
  display: "flex",
  alignItems: "center",
  gap: 12,
  textAlign: "left",
});

const StyledListItem = styled(ListItem)({
  padding: "6px 0",
  alignItems: "flex-start",
});

const StyledListItemIcon = styled(ListItemIcon)({
  color: "#ff4c1c",
  minWidth: "32px",
  marginTop: 6,
});

const ContactButton = styled(Button)({
  backgroundColor: "#ff4c1c",
  color: "white",
  padding: "10px 28px",
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 600,
  marginTop: 12,
  textTransform: "none",
  "&:hover": { backgroundColor: "#ea580c", transform: "translateY(-2px)" },
  transition: "all 0.3s ease",
});

const FormButton = styled(Button)({
  backgroundColor: "#ff4c1c",
  color: "#fff",
  padding: "12px 24px",
  fontWeight: 600,
  borderRadius: 8,
  textTransform: "none",
  fontSize: 16,
  "&:hover": { backgroundColor: "#ea580c", transform: "translateY(-2px)" },
  transition: "all 0.3s ease",
});

const WhyChooseUs = () => {
  const benefits = [
    "Government-approved Custom Broker (CHA)",
    "Global network of partners & agents",
    "24/7 customer support & real-time updates",
    "Proven expertise in Customs, SVB, Bond Sections & Consulting",
  ];

  const renderWordWavy = (sentence, large = false) => {
    const words = sentence.split(" ");
    return (
      <motion.div
        variants={waveContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        style={{ display: "inline-block", lineHeight: 1.05 }}
      >
        {words.map((word, wIdx) => (
          <span
            key={`w-${wIdx}-${word}`}
            style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.35rem", verticalAlign: "top" }}
          >
            {word.split("").map((ch, cIdx) => (
              <motion.span
                key={`c-${wIdx}-${cIdx}`}
                variants={waveItem}
                style={{
                  display: "inline-block",
                  fontWeight: 700,
                  fontSize: "var(--h1, 3.5rem)",
                  lineHeight: 1.05,
                  marginRight: ch === " " ? "0.38rem" : 0,
                  color: large ? "#ff4c1c" : "#ffffff",
                  textTransform: large ? "uppercase" : "none",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    );
  };

  return (
    <StyledSection>
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6 }, position: "relative" }}>
        <Grid container spacing={4} alignItems="center" justifyContent={"center"}>
          {/* LEFT: content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "680px" },
                pr: { xs: 0, md: 6 },
                "--h1": { xs: "2rem", sm: "2.2rem", md: "3.5rem" },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <Typography sx={{ fontSize: "0.95rem", fontWeight: "bold", color: "#ff4c1c", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Why Choose Us
                </Typography>
                <Typography sx={{ color: "#ff4c1c" }}>✈</Typography>
              </Stack>

              {/* Title: Logistics + SOLUTIONS side by side */}
              <Box sx={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 1, mb: 1 }}>
                {renderWordWavy("Efficient, Safe and Swift Logistics", false)}
                {renderWordWavy("SOLUTIONS", true)}
              </Box>

              <Subtitle variant="h6">"Your cargo, our responsibility. Together, we move the world."</Subtitle>

              <List sx={{ marginBottom: "8px" }}>
                {benefits.map((benefit, index) => (
                  <StyledListItem key={index} disablePadding>
                    <StyledListItemIcon>
                      <PlayArrow />
                    </StyledListItemIcon>
                    <ListItemText
                      primary={benefit}
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontSize: "16px",
                          lineHeight: "1.5",
                          color: "rgba(255, 255, 255, 0.92)",
                        },
                      }}
                    />
                  </StyledListItem>
                ))}
              </List>

              <ContactButton variant="contained" endIcon={<ArrowForward />}>
                Contact Us
              </ContactButton>
            </Box>
          </Grid>

          {/* RIGHT: form card */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box
              sx={{
                width: { xs: "100%", md: 560 },
                backgroundColor: "white",
                borderRadius: 2,
                padding: { xs: 3, md: 4 },
                boxShadow: "0px 6px 25px rgba(0,0,0,0.15)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#0f172a" }}>
                Request a Quote
              </Typography>

              <Grid container spacing={2}>
                {/* Row 1: Name + Email */}
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="outlined" size="medium" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" size="medium" />
                </Grid>

                {/* Row 2: Phone + Date */}
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone" variant="outlined" size="medium" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    size="medium"
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "56px",             // match other fields
                        display: "flex",
                        alignItems: "center",
                      },
                      "& input": {
                        width: "100%",              // ✅ force full stretch
                        padding: "14px",            // same padding as text inputs
                        boxSizing: "border-box",    // prevent overflow
                      },
                    }}
                  />

                </Grid>

                {/* Row 3: Message */}
                <Grid item xs={12} sx={{ flexBasis: "100%", maxWidth: "100%" }}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ display: "block", width: "100%" }}
                  />
                </Grid>
              </Grid>

              <Box mt={3}>
                <FormButton fullWidth>Submit Request</FormButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default WhyChooseUs;