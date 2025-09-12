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

const StyledCard = styled(Card)(() => ({
  background: "transparent",
  boxShadow: "none",
  borderRadius: 4,
  overflow: "visible",
  position: "relative",
  transition: "all 0.35s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  maxWidth: "100%",
}));

const ImageWrapper = styled("div")(() => ({
  position: "relative",
  borderRadius: 4,
  overflow: "hidden",
  height: 280,
  background: "#eee",
  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  zIndex: 1,
  "@media (max-width: 768px)": { height: 220 },
  "@media (max-width: 480px)": { height: 180 },
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
  "@media (max-width: 768px)": {
    marginLeft: 12,
    marginRight: 12,
    padding: "20px",
    minHeight: 160,
  },
  "@media (max-width: 480px)": {
    marginLeft: 10,
    marginRight: 10,
    padding: "16px",
    minHeight: 150,
  },
}));

const CardTitle = styled(Typography)(() => ({
  fontWeight: 600,
  color: "#0b2b33",
  fontSize: 16,
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
  "@media (max-width: 768px)": { width: 48, height: 48, bottom: -22, right: 12 },
  "@media (max-width: 480px)": { width: 44, height: 44, bottom: -18, right: 10 },
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
  autoplaySpeed: 5000, // Desktop
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // Tablet
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 768, // Mobile landscape
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 600, // Mobile portrait
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
  ],
};

/* ================= COMPONENT ================= */
export default function Services() {
  return (
    <Section id="services">
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 5, lineHeight: 1.2 }}>
          <Label>— OUR SERVICE ✈</Label>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 750,
              fontSize: { xs: 28, sm: 36, md: 56 },
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
              fontSize: { xs: 28, sm: 36, md: 56 },
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

        {/* Carousel */}
        <Slider {...sliderSettings}>
          {services.map((s) => (
            <div key={s.key} className="slide-card">
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
                      gap: 8,
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
      </Container>

      {/* Hover Effects + Gap Fix */}
      <style>{`
        .services-slider .slick-track {
          display: flex !important;
          gap: 20px; /* ✅ gap between cards */
        }

        .services-slider .slick-slide {
          height: inherit !important;
        }

        .services-slider .slick-slide > div {
          height: 100%;
          display: flex;
          align-items: stretch;
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
      `}</style>
    </Section>
  );
}