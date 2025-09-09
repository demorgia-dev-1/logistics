// import React from "react";
// import Slider from "react-slick";
// import { Box, Container, Typography, Card, CardContent } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
// import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
// import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

// // slick carousel css
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// /* ================= STYLED ================= */
// const Section = styled(Box)(() => ({
//   background: "#F7F8FA",
//   padding: "72px 0",
// }));

// const Label = styled(Typography)(() => ({
//   color: "#ff4c1c",
//   fontWeight: 700,
//   textTransform: "uppercase",
//   letterSpacing: "1px",
//   fontSize: "0.95rem",
//   display: "inline-flex",
//   alignItems: "center",
//   gap: 8,
//   marginBottom: "12px",
// }));

// const Title = styled(Typography)(() => ({
//   color: "#0b2b33",
//   fontWeight: 800,
//   textAlign: "center",
//   lineHeight: 1.3,
//   marginBottom: "40px",
//   fontSize: "2.6rem",
// }));

// const Highlight = styled("span")(() => ({
//   color: "#ff4c1c",
//   borderBottom: "4px solid #ff4c1c",
//   paddingBottom: "4px",
//   marginLeft: "8px",
// }));

// const CarouselWrapper = styled("div")(() => ({
//   ".slick-slide": {
//     padding: "0 18px",
//     boxSizing: "border-box",
//     display: "flex",
//     alignItems: "stretch",
//     paddingBottom: 20, // avoids clipping shadow
//   },
//   ".slick-list": {
//     margin: "0 -18px",
//   },
// }));

// const StyledCard = styled(Card)(() => ({
//   background: "transparent",
//   boxShadow: "none",
//   borderRadius: 12,
//   overflow: "visible",
//   position: "relative",
//   transition: "all 0.35s ease",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "flex-start",
// }));

// const ImageWrapper = styled("div")(() => ({
//   position: "relative",
//   borderRadius: 12,
//   overflow: "hidden",
//   height: 260,
//   background: "#eee",
//   boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
//   zIndex: 1,
// }));

// const ImageBox = styled("img")(() => ({
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   display: "block",
//   transition: "transform 0.6s ease",
// }));

// const ShineOverlay = styled("div")(() => ({
//   position: "absolute",
//   inset: 0,
//   pointerEvents: "none",
// }));

// const ContentPanel = styled(CardContent)(() => ({
//   background: "#fff",
//   borderRadius: 8,
//   marginTop: -48,
//   marginLeft: 16,
//   marginRight: 16,
//   padding: "24px",
//   boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
//   position: "relative",
//   minHeight: 180,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   zIndex: 2,
// }));

// const CardTitle = styled(Typography)(() => ({
//   fontWeight: 800,
//   color: "#0b2b33",
//   fontSize: "1.05rem",
//   marginBottom: "8px",
// }));

// const CardText = styled(Typography)(() => ({
//   color: "rgba(11,43,51,0.7)",
//   fontSize: "0.95rem",
//   lineHeight: 1.6,
// }));

// /* Badge (black box with icon) */
// const Badge = styled("div")(() => ({
//   position: "absolute",
//   right: 16,
//   bottom: -28,
//   width: 56,
//   height: 56,
//   borderRadius: 8,
//   background: "#07282b",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#fff",
//   transition: "all 0.4s ease",
//   zIndex: 3,
// }));

// const ReadMore = styled("a")(() => ({
//   color: "#0b2b33",
//   fontWeight: 700,
//   textDecoration: "none",
//   display: "inline-flex",
//   gap: 8,
//   alignItems: "center",
// }));

// /* ================= DATA ================= */
// const services = [
//   {
//     key: "customs",
//     image: "/images/customs.jpg",
//     title: "Customs Clearing",
//     desc: "Efficient clearance with accurate documentation and compliance.",
//     icon: <LocalShippingOutlinedIcon sx={{ fontSize: 28 }} />,
//   },
//   {
//     key: "freight",
//     image: "/images/freightforwarding.jpg",
//     title: "Freight Forwarding",
//     desc: "Reliable freight management for air, sea, and inland routes with optimized solutions.",
//     icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 28 }} />,
//   },
//   {
//     key: "warehouse",
//     image: "/images/warehousing.jpg",
//     title: "Warehousing",
//     desc: "Cost-effective warehousing solutions ensuring timely operations and coverage.",
//     icon: <DirectionsBoatOutlinedIcon sx={{ fontSize: 28 }} />,
//   },
//   {
//     key: "consulting",
//     image: "/images/consulting.jpg",
//     title: "SVB & Bond Consulting",
//     desc: "Expert consulting for SVB and bonded transactions.",
//     icon: <WarehouseOutlinedIcon sx={{ fontSize: 28 }} />,
//   },
// ];

// /* ================= SLIDER SETTINGS ================= */
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 600,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3500,
//   pauseOnHover: true,
//   responsive: [
//     { breakpoint: 1024, settings: { slidesToShow: 2 } },
//     { breakpoint: 640, settings: { slidesToShow: 1 } },
//   ],
//   arrows: false,
// };

// /* ================= COMPONENT ================= */
// export default function Services() {
//   return (
//     <Section id="services">
//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: "center" }}>
//           <Label>— OUR SERVICE ✈</Label>
//           <Title>
//             Provide Efficient Logistics Solutions
//             <Highlight>BUSINESS</Highlight>
//           </Title>
//         </Box>

//         <CarouselWrapper>
//           <Slider {...sliderSettings}>
//             {services.map((s) => (
//               <div key={s.key}>
//                 <StyledCard>
//                   {/* Image */}
//                   <ImageWrapper>
//                     <ImageBox src={s.image} alt={s.title} className="imageBox" />
//                     <ShineOverlay className="shine" />
//                   </ImageWrapper>

//                   {/* Content */}
//                   <ContentPanel>
//                     <Box>
//                       <CardTitle>{s.title}</CardTitle>
//                       <CardText>{s.desc}</CardText>
//                     </Box>

//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "flex-end",
//                         position: "relative",
//                       }}
//                     >
//                       <ReadMore href={`/services#${s.key}`}>Read More →</ReadMore>
//                       <Badge className="badgeIcon">{s.icon}</Badge>
//                     </Box>
//                   </ContentPanel>
//                 </StyledCard>
//               </div>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//       </Container>

//       {/* Hover Effects */}
//       <style>{`
//         .slick-slide > div {
//           height: 100%;
//           display: flex;
//           align-items: stretch;
//           padding-bottom: 20px;
//         }

//         .slick-slide > div:hover .imageBox {
//           transform: scale(1.08);
//         }

//         .shine:before {
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
//         .slick-slide > div:hover .shine:before {
//           left: 150%;
//         }

//         /* Badge hover: whole box turns orange */
//         .slick-slide > div:hover .badgeIcon {
//           background: #ff4c1c !important;
//           color: #fff !important;
//           transform: translateY(-6px);
//         }

//         /* Icon stays visible and turns white */
//         .slick-slide > div:hover .badgeIcon svg,
//         .slick-slide > div:hover .badgeIcon .MuiSvgIcon-root {
//           color: #fff !important;
//           fill: #fff !important;
//         }
//       `}</style>
//     </Section>
//   );
// }
// Services.jsx
import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import { motion } from "framer-motion";

// slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ================= ANIMATION VARIANTS ================= */
const waveContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const waveItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

/* ================= STYLED ================= */
const Section = styled(Box)(() => ({
  background: "#F7F8FA",
  padding: "72px 0",
}));

const Label = styled(Typography)(() => ({
  color: "#ff4c1c",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "0.95rem",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  marginBottom: "12px",
}));

const Highlight = styled("span")(() => ({
  color: "#ff4c1c",
  borderBottom: "4px solid #ff4c1c",
  paddingBottom: "4px",
  marginLeft: "8px",
}));

const CarouselWrapper = styled("div")(() => ({
  ".slick-slide": {
    padding: "0 18px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "stretch",
    paddingBottom: 20,
  },
  ".slick-list": {
    margin: "0 -18px",
  },
}));

const StyledCard = styled(Card)(() => ({
  background: "transparent",
  boxShadow: "none",
  borderRadius: 12,
  overflow: "visible",
  position: "relative",
  transition: "all 0.35s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));

const ImageWrapper = styled("div")(() => ({
  position: "relative",
  borderRadius: 12,
  overflow: "hidden",
  height: 260,
  background: "#eee",
  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  zIndex: 1,
}));

const ImageBox = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.6s ease",
}));

const ShineOverlay = styled("div")(() => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
}));

const ContentPanel = styled(CardContent)(() => ({
  background: "#fff",
  borderRadius: 8,
  marginTop: -48,
  marginLeft: 16,
  marginRight: 16,
  padding: "24px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  position: "relative",
  minHeight: 180,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  zIndex: 2,
}));

const CardTitle = styled(Typography)(() => ({
  fontWeight: 800,
  color: "#0b2b33",
  fontSize: "1.05rem",
  marginBottom: "8px",
}));

const CardText = styled(Typography)(() => ({
  color: "rgba(11,43,51,0.7)",
  fontSize: "0.95rem",
  lineHeight: 1.6,
}));

const Badge = styled("div")(() => ({
  position: "absolute",
  right: 16,
  bottom: -28,
  width: 56,
  height: 56,
  borderRadius: 8,
  background: "#07282b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  transition: "all 0.4s ease",
  zIndex: 3,
}));

const ReadMore = styled("a")(() => ({
  color: "#0b2b33",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-flex",
  gap: 8,
  alignItems: "center",
}));

/* ================= DATA ================= */
const services = [
  {
    key: "customs",
    image: "/images/customs.jpg",
    title: "Customs Clearing",
    desc: "Efficient clearance with accurate documentation and compliance.",
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    key: "freight",
    image: "/images/freightforwarding.jpg",
    title: "Freight Forwarding",
    desc: "Reliable freight management for air, sea, and inland routes with optimized solutions.",
    icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    key: "warehouse",
    image: "/images/warehousing.jpg",
    title: "Warehousing",
    desc: "Cost-effective warehousing solutions ensuring timely operations and coverage.",
    icon: <DirectionsBoatOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    key: "consulting",
    image: "/images/consulting.jpg",
    title: "SVB & Bond Consulting",
    desc: "Expert consulting for SVB and bonded transactions.",
    icon: <WarehouseOutlinedIcon sx={{ fontSize: 28 }} />,
  },
];

/* ================= SLIDER SETTINGS ================= */
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
  arrows: false,
};

/* ================= COMPONENT ================= */
export default function Services() {
  return (
    <Section id="services">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Label>— OUR SERVICE ✈</Label>

          {/* Animated Heading */}
          <Box sx={{ mb: 5 }}>
            <motion.div
              variants={waveContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              style={{ display: "inline-block" }}
            >
              {"Provide Efficient Logistics".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={waveItem}
                  style={{
                    display: "inline-block",
                    fontWeight: "800",
                    fontSize: "2.6rem",
                    color: "#0b2b33",
                    marginRight: char === " " ? "0.35rem" : 0,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <br />

            <motion.div
              variants={waveContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              style={{ display: "inline-block", position: "relative" }}
            >
              {"SOLUTIONS".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={waveItem}
                  style={{
                    display: "inline-block",
                    fontWeight: "800",
                    fontSize: "2.6rem",
                    color: "#ff4c1c",
                    marginRight: char === " " ? "0.35rem" : 0,
                  }}
                >
                  {char}
                </motion.span>
              ))}

              {/* underline for SOLUTIONS */}
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
        </Box>

        <CarouselWrapper>
          <Slider {...sliderSettings}>
            {services.map((s) => (
              <div key={s.key}>
                <StyledCard>
                  {/* Image */}
                  <ImageWrapper>
                    <ImageBox src={s.image} alt={s.title} className="imageBox" />
                    <ShineOverlay className="shine" />
                  </ImageWrapper>

                  {/* Content */}
                  <ContentPanel>
                    <Box>
                      <CardTitle>{s.title}</CardTitle>
                      <CardText>{s.desc}</CardText>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        position: "relative",
                      }}
                    >
                      <ReadMore href={`/services#${s.key}`}>Read More →</ReadMore>
                      <Badge className="badgeIcon">{s.icon}</Badge>
                    </Box>
                  </ContentPanel>
                </StyledCard>
              </div>
            ))}
          </Slider>
        </CarouselWrapper>
      </Container>

      {/* Hover Effects */}
      <style>{`
        .slick-slide > div {
          height: 100%;
          display: flex;
          align-items: stretch;
          padding-bottom: 20px;
        }

        .slick-slide > div:hover .imageBox {
          transform: scale(1.08);
        }

        .shine:before {
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
        .slick-slide > div:hover .shine:before {
          left: 150%;
        }

        .slick-slide > div:hover .badgeIcon {
          background: #ff4c1c !important;
          color: #fff !important;
          transform: translateY(-6px);
        }

        .slick-slide > div:hover .badgeIcon svg,
        .slick-slide > div:hover .badgeIcon .MuiSvgIcon-root {
          color: #fff !important;
          fill: #fff !important;
        }
      `}</style>
    </Section>
  );
}