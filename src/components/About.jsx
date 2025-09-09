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
import { motion } from "framer-motion";

// Wave animation variants
const waveContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // slower reveal
      staggerDirection: -1, // right-to-left animation
    },
  },
};

const waveItem = {
  hidden: { opacity: 0, y: 5 }, // less wavy
  visible: { opacity: 1, y: 0 },
};

function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        columnSpacing={{ xs: 0, md: 20 }}
        sx={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* ---------------- Left Column ---------------- */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
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

            {/* Wavy Heading */}
            <Box sx={{ mb: 3 }}>
              <motion.div
                variants={waveContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
              >
                {"Our Expertise Stands in".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={waveItem}
                    style={{
                      display: "inline-block",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      lineHeight: 1.3,
                      marginRight: char === " " ? "0.25rem" : 0,
                      color: "#0b1c2c",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                variants={waveContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                style={{ position: "relative", display: "inline-block" }}
              >
                {"LOGISTICS SOLUTIONS".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={waveItem}
                    style={{
                      display: "inline-block",
                      fontWeight: "bold",
                      fontSize: "2.6rem",
                      lineHeight: 1.3,
                      marginRight: char === " " ? "0.35rem" : 0,
                      color: "#ff4c1c",
                      textTransform: "uppercase",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}

                {/* Underline */}
                <span
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#ff4c1c",
                  }}
                />
              </motion.div>
            </Box>

            {/* Paragraph */}
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.05rem" },
                mb: 4,
                maxWidth: "600px",
              }}
            >
              Our success is measured by the trust and satisfaction of our
              customers. Every shipment is handled with care, accuracy, and
              transparency — making us one of the most reliable and
              customer-centric logistics partners in the industry.
            </Typography>

            {/* Info Cards */}
            <Grid container spacing={3} mb={4}>
              <Grid item xs={12} sm={6}>
                <motion.div whileHover="hover">
                  <Card
                    elevation={4}
                    sx={{
                      borderLeft: "3px solid #ff4c1c",
                      maxWidth: "320px",
                      "&:hover": { boxShadow: 6 },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <motion.div
                        variants={{
                          hover: { rotateY: 180 },
                        }}
                        transition={{ duration: 0.6 }}
                        style={{ display: "inline-block" }}
                      >
                        <PublicIcon
                          sx={{ color: "#ff4c1c", fontSize: 40, mb: 1 }}
                        />
                      </motion.div>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Worldwide Service
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                      >
                        Delivering shipments across the globe with reliability.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <motion.div whileHover="hover">
                  <Card
                    elevation={3}
                    sx={{
                      borderLeft: "3px solid #ff4c1c",
                      maxWidth: "320px",
                      "&:hover": { boxShadow: 6 },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <motion.div
                        variants={{
                          hover: { rotateY: 180 },
                        }}
                        transition={{ duration: 0.6 }}
                        style={{ display: "inline-block" }}
                      >
                        <SupportAgentIcon
                          sx={{ color: "#ff4c1c", fontSize: 40, mb: 1 }}
                        />
                      </motion.div>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        24/7 Online Support
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                      >
                        Always available to assist you, anytime, anywhere.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
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
                    +123 456 789
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        {/* ---------------- Right Column ---------------- */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
                Welcome To Our Company
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;