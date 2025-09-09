import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { motion } from "framer-motion";

const skills = [
  { title: "Shipping", value: 85 },
  { title: "Management", value: 90 },
  { title: "Warehousing", value: 70 },
];

export default function OurSkills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Grid
        container
        spacing={20}
        alignItems="center"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* -------- Left Images -------- */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Background image */}
            <Card
              sx={{
                maxWidth: 400,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image="/images/skillLady1.jpg" 
                alt="Logistics"
              />
            </Card>

            {/* Overlay image */}
            <Card
              sx={{
                maxWidth: 250,
                borderRadius: 2,
                boxShadow: 4,
                border: "4px solid #ff4c1c",
                position: "absolute",
                bottom: -30,
                right: -30,
                backgroundColor: "#fff",
              }}
            >
              <CardMedia
                component="img"
                image="/images/skillLady2.jpg" 
                alt="Delivery Worker"
              />
            </Card>
          </Box>
        </Grid>

        {/* -------- Right Skills -------- */}
        <Grid item xs={12} md={6}>
          {/* <Typography
            variant="overline"
            sx={{ fontWeight: 600, color: "#ff4c1c", letterSpacing: 1 }}
          >
            Our Skills ✈
          </Typography> */}
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
                       Our Skills ✈
                    </Typography>

          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mt: 1, mb: 3 }}
          >
            Transportation Services <br /> We Are Often{" "}
            <span style={{ color: "#ff4c1c" }}>CONSIDERED</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 5, maxWidth: 600, color: "#555" }}
          >
            A logistic service provider company plays a pivotal role in the
            global supply chain ecosystem by efficiently managing the movement
            of goods from point of origin to final destination. These companies
            offer a diverse range.
          </Typography>

          {/* Progress Bars */}
          {skills.map((skill, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                {skill.title}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  height: 8,
                  backgroundColor: "#e5e7eb",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                {/* Progress Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: animate ? `${skill.value}%` : 0 }}
                  transition={{ duration: 2, delay: index * 0.5 }}
                  style={{
                    height: "100%",
                    backgroundColor: "#ff4c1c",
                    borderRadius: 4,
                  }}
                />

                {/* Airplane Icon
                    <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: animate ? (skill.value * 3) : 0 }} 
                    // multiply % by pixel value to match bar width (adjust factor if needed)
                    transition={{ duration: 2, delay: index * 0.5 }}
                    style={{
                        position: "absolute",
                        top: "-8px",       // closer to bar
                        left: 0,
                    }}
                    >
                    <AirplanemodeActiveIcon sx={{ color: "#ff4c1c", fontSize: 24 }} />
                    </motion.div> */}

              </Box>

              {/* Percentage Label */}
              <Typography
                variant="body2"
                sx={{ mt: 1, fontWeight: 600, color: "#ff4c1c" }}
              >
                {skill.value}%
              </Typography>
            </Box>
          ))}

          {/* CTA Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff4c1c",
              "&:hover": { backgroundColor: "#ea580c" },
              borderRadius: "50px",
              mt: 2,
            }}
          >
            Book Your Parcel →
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}