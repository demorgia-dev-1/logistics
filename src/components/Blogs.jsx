// import React from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Stack,
// } from "@mui/material";
// import { Person, Comment } from "@mui/icons-material";
// import { motion } from "framer-motion";

// const waveContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
// };
// const waveItem = {
//   hidden: { opacity: 0, y: 6 },
//   visible: { opacity: 1, y: 0 },
// };

// const blogData = [
//   {
//     image: "/images/blog1.jpg",
//     date: "05 FEB",
//     author: "Robert Fox",
//     comments: "2 Comments",
//     title: "How Will You Know Success When it Show Up?",
//     desc: "Success in logistics isn’t always defined by numbers—it’s about efficiency, customer satisfaction, and long-term sustainability. This article explores how to recognize true success.",
//   },
//   {
//     image: "/images/blog2.jpg",
//     date: "05 FEB",
//     author: "Robert Fox",
//     comments: "2 Comments",
//     title: "Mastering Last Mile Delivery Strategies for Success",
//     desc: "The last mile is the most critical and challenging step in delivery. Learn strategies to optimize last mile logistics, reduce costs, and ensure faster, more reliable customer experiences.",
//   },
//   {
//     image: "/images/blog3.jpg",
//     date: "05 FEB",
//     author: "Robert Fox",
//     comments: "2 Comments",
//     title: "Logistics Announces Launch of Greenhouse Gas",
//     desc: "Sustainability in logistics is no longer optional. Discover how companies are adopting eco-friendly operations and reducing greenhouse gas emissions while keeping efficiency high.",
//   },
// ];

// const Blogs = () => {
//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
//       <Container maxWidth="lg">
//         {/* Heading Section with Wave Animation */}
//         <Box textAlign="center" mb={6}>
//           <Typography
//             variant="subtitle1"
//             sx={{ color: "#f85a40", fontWeight: 600, letterSpacing: 1 }}
//           >
//             — OUR BLOGS ✈
//           </Typography>

//           {/* Animated Heading Part 1 */}
//           <Box sx={{ lineHeight: 1.1 }}>
//           <motion.div
//             variants={waveContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.6 }}
//             style={{ display: "inline-block" }}
//           >
//             {"Logistics Insights &".split("").map((char, idx) => (
//               <motion.span
//                 key={idx}
//                 variants={waveItem}
//                 style={{
//                   display: "inline-block",
//                   fontWeight: "750",
//                   fontSize: 56,
//                   color: "#0c2c3d",
//                   marginRight: char === " " ? "0.35rem" : 0,
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.div>

//           <br />

//           {/* Animated Heading Part 2 */}
//           <motion.div
//             variants={waveContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.6 }}
//             style={{ display: "inline-block", position: "relative" }}
//           >
//             {"INDUSTRY UPDATES".split("").map((char, idx) => (
//               <motion.span
//                 key={idx}
//                 variants={waveItem}
//                 style={{
//                   display: "inline-block",
//                   fontWeight: "750",
//                   fontSize: 56,
//                   color: "#f85a40",
//                   marginRight: char === " " ? "0.35rem" : 0,
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}

//             <span
//               style={{
//                 position: "absolute",
//                 bottom: 4,
//                 left: 0,
//                 width: "100%",
//                 height: "4px",
//                 backgroundColor: "#f85a40",
//               }}
//             />
//           </motion.div>
//         </Box>
//         </Box>

//         {/* Blog Cards */}
//         <Grid container spacing={6}>
//           {blogData.map((blog, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={index}
//               display="flex"
//               justifyContent="center"
//             >
//               <Card
//                 className="cardWithShine"
//                 sx={{
//                   width: "100%",
//                   maxWidth: 350,
//                   height: "100%",
//                   boxShadow: 3,
//                   borderRadius: 1,
//                   overflow: "hidden",
//                   position: "relative",
//                   cursor: "pointer",
//                 }}
//               >
//                 {/* Image with Zoom + Shine (triggered by card hover) */}
//                 <Box
//                   sx={{
//                     position: "relative",
//                     overflow: "hidden",
//                     height: 200,
//                   }}
//                 >
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="blogImage"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       display: "block",
//                       transition: "transform 0.6s ease",
//                     }}
//                   />

//                   {/* Shine Overlay */}
//                   <Box className="shine" />

//                   {/* Date Badge */}
//                   <Box
//                     sx={{
//                       mb: -1,
//                       position: "absolute",
//                       bottom: 12,
//                       left: 16,
//                       backgroundColor: "#f85a40",
//                       color: "#fff",
//                       px: 2,
//                       py: 0.5,
//                       borderRadius: "4px",
//                       fontWeight: "bold",
//                       fontSize: "13px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {blog.date}
//                   </Box>
//                 </Box>

//                 <CardContent sx={{ pt: 4 }}>
//                   {/* Author + Comments */}
//                   <Stack
//                     direction="row"
//                     spacing={2}
//                     alignItems="center"
//                     sx={{ mb: 1, fontSize: "14px", color: "#555" }}
//                   >
//                     <Person sx={{ fontSize: "18px", color: "#f85a40" }} />
//                     <Typography variant="body2">{blog.author}</Typography>
//                     <Comment sx={{ fontSize: "18px", color: "#f85a40" }} />
//                     <Typography variant="body2">{blog.comments}</Typography>
//                   </Stack>

//                   {/* Title */}
//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: 700, color: "#0c2c3d", mb: 1 }}
//                   >
//                     {blog.title}
//                   </Typography>

//                   {/* Description */}
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "#666", mb: 2, lineHeight: 1.6 }}
//                   >
//                     {blog.desc}
//                   </Typography>

//                   {/* Read More Button */}
//                   <Button
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#f85a40",
//                       borderRadius: 2,
//                       px: 3,
//                       py: 1,
//                       fontWeight: 600,
//                       textTransform: "none",
//                     }}
//                   >
//                     Read More →
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Shine + Zoom Effect CSS */}
//       <style>{`
//         .cardWithShine {
//           position: relative;
//           overflow: hidden;
//         }

//         /* Image zoom only when card hovered */
//         .cardWithShine:hover .blogImage {
//           transform: scale(1.08);
//         }

//         .cardWithShine .shine {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//         }
//         .cardWithShine .shine:before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -75%;
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             120deg,
//             rgba(255,255,255,0) 0%,
//             rgba(255,255,255,0.45) 50%,
//             rgba(255,255,255,0) 100%
//           );
//           transform: skewX(-25deg);
//           transition: left 0.9s ease;
//           pointer-events: none;
//         }
//         /* Shine runs only on image when card hovered */
//         .cardWithShine:hover .shine:before {
//           left: 150%;
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default Blogs;
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
            sx={{ color: "#f85a40", fontWeight: 600, letterSpacing: 1 }}
          >
            — OUR BLOGS ✈
          </Typography>

          {/* Plain Heading */}
          <Box sx={{ lineHeight: 1.1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 750,
                fontSize: { xs: 32, md: 56 },
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
                fontSize: { xs: 32, md: 56 },
                color: "#f85a40",
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
                  backgroundColor: "#f85a40",
                }}
              />
            </Typography>
          </Box>
        </Box>

        {/* Blog Cards */}
        <Grid container spacing={6}>
          {blogData.map((blog, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
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
                {/* Image with Zoom + Shine (triggered by card hover) */}
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
                  <Box
                    sx={{
                      mb: -1,
                      position: "absolute",
                      bottom: 12,
                      left: 16,
                      backgroundColor: "#f85a40",
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
                  </Box>
                </Box>

                <CardContent sx={{ pt: 4 }}>
                  {/* Author + Comments */}
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 1, fontSize: "14px", color: "#555" }}
                  >
                    <Person sx={{ fontSize: "18px", color: "#f85a40" }} />
                    <Typography variant="body2">{blog.author}</Typography>
                    <Comment sx={{ fontSize: "18px", color: "#f85a40" }} />
                    <Typography variant="body2">{blog.comments}</Typography>
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
                      backgroundColor: "#f85a40",
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
        /* Shine runs only on image when card hovered */
        .cardWithShine:hover .shine:before {
          left: 150%;
        }
      `}</style>
    </Box>
  );
};

export default Blogs;