import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { Person, Comment } from "@mui/icons-material";

const blogData = [
  {
    image: "/images/blog1.jpg",
    date: "05 FEB",
    author: "Robert Fox",
    comments: "2 Comments",
    title: "How Will You Know Success When it Show Up?",
    desc: "Success in logistics isn’t always defined by numbers—it’s about efficiency, customer satisfaction, and long-term sustainability. This article explores how to recognize true success.",
  },
  {
    image: "/images/blog2.jpg",
    date: "05 FEB",
    author: "Robert Fox",
    comments: "2 Comments",
    title: "Mastering Last Mile Delivery Strategies for Success",
    desc: "The last mile is the most critical and challenging step in delivery. Learn strategies to optimize last mile logistics, reduce costs, and ensure faster, more reliable customer experiences.",
  },
  {
    image: "/images/blog3.jpg",
    date: "05 FEB",
    author: "Robert Fox",
    comments: "2 Comments",
    title: "Logistics Announces Launch of Greenhouse Gas",
    desc: "Sustainability in logistics is no longer optional. Discover how companies are adopting eco-friendly operations and reducing greenhouse gas emissions while keeping efficiency high.",
  },
];

const Blogs = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#183d62ff", fontWeight: 600, letterSpacing: 1 }}
          >
            — OUR BLOGS ✈
          </Typography>

          {/* Plain Heading */}
          <Box sx={{ lineHeight: 1.1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 750,
                fontSize: { xs: 28, sm: 36, md: 56 },
                color: "#0c2c3d",
                lineHeight: 1.2,
              }}
            >
              Logistics Insights &
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 750,
                fontSize: { xs: 28, sm: 36, md: 56 },
                color: "#183d62ff",
                textTransform: "uppercase",
                position: "relative",
                display: "inline-block",
              }}
            >
              INDUSTRY UPDATES
              <span
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: "#183d62ff",
                }}
              />
            </Typography>
          </Box>
        </Box>

        {/* Blog Cards */}
        <Grid container spacing={6} justifyContent="center">
          {blogData.map((blog, index) => (
            <Grid
              item
              xs={12}       // 1 per row on mobile
              sm={6}        // 2 per row on tablets
              md={4}        // 3 per row on desktop
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Card
                className="cardWithShine"
                sx={{
                  width: "100%",
                  maxWidth: 350,
                  height: "100%",
                  boxShadow: 3,
                  borderRadius: 1,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                {/* Image with Zoom + Shine */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: 200,
                  }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blogImage"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* Shine Overlay */}
                  <Box className="shine" />

                  {/* Date Badge */}
                  {/* <Box
                    sx={{
                      mb: -1,
                      position: "absolute",
                      bottom: 12,
                      left: 16,
                      backgroundColor: "#183d62ff",
                      color: "#fff",
                      px: 2,
                      py: 0.5,
                      borderRadius: "4px",
                      fontWeight: "bold",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    {blog.date}
                  </Box> */}
                </Box>

                <CardContent sx={{ pt: 4 }}>
                  {/* Author + Comments */}
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 1, fontSize: "14px", color: "#555" }}
                  >
                    <Person sx={{ fontSize: "18px", color: "#183d62ff" }} />
                    {/* <Typography variant="body2">{blog.author}</Typography> */}
                    <Comment sx={{ fontSize: "18px", color: "#183d62ff" }} />
                    {/* <Typography variant="body2">{blog.comments}</Typography> */}
                  </Stack>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#0c2c3d", mb: 1 }}
                  >
                    {blog.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", mb: 2, lineHeight: 1.6 }}
                  >
                    {blog.desc}
                  </Typography>

                  {/* Read More Button */}
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#183d62ff",
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      textTransform: "none",
                    }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Shine + Zoom Effect CSS */}
      <style>{`
        .cardWithShine {
          position: relative;
          overflow: hidden;
        }

        /* Image zoom only when card hovered */
        .cardWithShine:hover .blogImage {
          transform: scale(1.08);
        }

        .cardWithShine .shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .cardWithShine .shine:before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-25deg);
          transition: left 0.9s ease;
          pointer-events: none;
        }
        .cardWithShine:hover .shine:before {
          left: 150%;
        }
      `}</style>
    </Box>
  );
};

export default Blogs;