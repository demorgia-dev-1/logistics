import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

// slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ================= STYLED ================= */
const Section = styled(Box)(() => ({ background: "#F7F8FA", padding: "72px 0" }));
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

const CarouselWrapper = styled("div")(() => ({
  ".services-slider .slick-slide": {
    padding: "0 18px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "stretch",
    paddingBottom: 20,
  },
  ".services-slider .slick-list": {
    margin: "0 -18px",
  },

  "@media (max-width: 1024px)": {
    ".services-slider .slick-slide": {
      padding: "0 12px",
    },
    ".services-slider .slick-list": {
      margin: "0 -12px",
    },
  },

  "@media (max-width: 600px)": {
    ".services-slider .slick-slide": {
      padding: "0 8px",
    },
    ".services-slider .slick-list": {
      margin: "0 -8px",
    },
  },
}));

const StyledCard = styled(Card)(() => ({
  background: "transparent",
  boxShadow: "none",
  borderRadius: 4,
  overflow: "visible",
  position: "relative",
  transition: "all 0.35s ease",
  height: "120%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",

  "@media (max-width: 480px)": {
    maxWidth: "94%",
    margin: "0 auto",
  },
  "@media (min-width: 481px) and (max-width: 768px)": {
    maxWidth: "88%",
    margin: "0 auto",
  },
}));

const ImageWrapper = styled("div")(() => ({
  position: "relative",
  borderRadius: 4,
  overflow: "hidden",
  height: 280,
  background: "#eee",
  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  zIndex: 1,
  "@media (max-width: 480px)": { height: 180 },
  "@media (min-width: 481px) and (max-width: 768px)": { height: 200 },
}));

const ImageBox = styled("img")(() => ({
  width: "120%",
  height: "120%",
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
  borderRadius: 4,
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

  "@media (max-width: 480px)": {
    marginLeft: 12,
    marginRight: 12,
    padding: "18px",
    minHeight: 160,
  },
  "@media (min-width: 481px) and (max-width: 768px)": {
    marginLeft: 12,
    marginRight: 12,
    padding: "20px",
    minHeight: 165,
  },
}));

const CardTitle = styled(Typography)(() => ({
  fontWeight: 600,
  color: "#0b2b33",
  fontSize: 16,
  marginBottom: "8px",
  "@media (max-width: 480px)": { fontSize: "1.05rem" },
}));

const CardText = styled(Typography)(() => ({
  color: "rgba(11,43,51,0.7)",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  "@media (max-width: 480px)": { fontSize: "0.95rem", lineHeight: 1.5 },
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
  "@media (max-width: 768px)": { right: 12, width: 48, height: 48, bottom: -22 },
  "@media (max-width: 480px)": { right: 10, width: 46, height: 46, bottom: -18 },
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
  className: "services-slider",
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  swipeToSlide: true,
  draggable: true,
  adaptiveHeight: true,
  arrows: false,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
      },
    },
  ],
};

/* ================= COMPONENT ================= */
export default function Services() {
  return (
    <Section id="services">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 2, lineHeight: 1.2 }}>
          <Label>— OUR SERVICE ✈</Label>

          {/* Plain Heading */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 750,
                fontSize: { xs: 32, md: 56 },
                color: "#0b2b33",
                lineHeight: 1.2,
              }}
            >
              Provide Efficient Logistics
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 750,
                fontSize: { xs: 32, md: 56 },
                color: "#ff4c1c",
                textTransform: "uppercase",
                position: "relative",
                display: "inline-block",
              }}
            >
              SOLUTIONS
              <span
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: "#ff4c1c",
                }}
              />
            </Typography>
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

      <style>{`
        .services-slider .slick-slide > div {
          height: 100%;
          display: flex;
          align-items: stretch;
          padding-bottom: 20px;
        }

        .services-slider .slick-slide > div:hover .imageBox {
          transform: scale(1.08);
        }

        .services-slider .shine:before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: left 0.9s ease;
          pointer-events: none;
        }
        .services-slider .slick-slide > div:hover .shine:before {
          left: 150%;
        }

        .services-slider .slick-slide > div:hover .badgeIcon {
          background: #ff4c1c !important;
          color: #fff !important;
          transform: translateY(-6px);
        }

        .services-slider .slick-slide > div:hover .badgeIcon svg,
        .services-slider .slick-slide > div:hover .badgeIcon .MuiSvgIcon-root {
          color: #fff !important;
          fill: #fff !important;
        }

        @media (max-width: 1024px) and (min-width: 601px) {
          .services-slider .slick-slide { width: 50% !important; }
          .services-slider .slick-list, .services-slider .slick-track { display: block !important; }
          .services-slider .slick-dots li button:before { font-size: 11px; opacity: 0.95; }
        }

        @media (max-width: 600px) {
          .services-slider .slick-slide { display: block !important; float: none !important; width: 100% !important; }
          .services-slider .slick-list, .services-slider .slick-track { display: block !important; }
          .services-slider .slick-slide > div { margin: 0 auto; }
          .services-slider .slick-dots { margin-top: 14px; }
          .services-slider .slick-dots li { margin: 0 8px; }
          .services-slider .slick-dots li button:before { font-size: 12px; opacity: 0.95; color: #07282b; }
          .services-slider .MuiCardContent-root { margin-left: 12px !important; margin-right: 12px !important; padding: 16px !important; }
        }

        @media (min-width: 769px) {
          .services-slider .slick-arrow { display: none !important; }
        }
      `}</style>
    </Section>
  );
}