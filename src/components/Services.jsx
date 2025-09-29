import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import { useNavigate, useLocation } from "react-router-dom";

// slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ================= STYLED (responsive using theme.breakpoints) ================= */
const Section = styled(Box)(({ theme }) => ({
  background: "#F7F8FA",
  padding: "72px 0",
  [theme.breakpoints.down("md")]: { padding: "56px 0" },
  [theme.breakpoints.down("sm")]: { padding: "40px 0" },
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

const ImageWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 4,
  overflow: "hidden",
  height: 280,
  background: "#eee",
  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  zIndex: 1,
  [theme.breakpoints.down("md")]: { height: 220 },
  [theme.breakpoints.down("sm")]: { height: 180 },
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

const ContentPanel = styled(CardContent)(({ theme }) => ({
  background: "#fff",
  borderRadius: 4,
  marginTop: -48, // desktop overlap
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
  [theme.breakpoints.down("md")]: {
    marginTop: -40,
    marginLeft: 12,
    marginRight: 12,
    padding: "20px",
    minHeight: 160,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -28,
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

const Badge = styled("div")(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: { width: 48, height: 48, bottom: -22, right: 12 },
  [theme.breakpoints.down("sm")]: {
    width: 44,
    height: 44,
    bottom: -18,
    right: 10,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
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
/*
 - Desktop/tablet keep previous autoplay behaviour.
 - Mobile (<= 768px) settings below ensure exactly 1 card visible and each swipe moves 1 slide smoothly.
*/
const baseSettings = {
  className: "services-slider",
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerPadding: "0px",
  arrows: false,
  pauseOnHover: true,
  centerMode: false,
  variableWidth: false,
  swipeToSlide: true,
  adaptiveHeight: true,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 3000,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1, autoplaySpeed: 4000 },
    },
    // MOBILE: primary mobile settings
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,         // smoother/visible transition
        cssEase: "ease",
        centerMode: false,
        centerPadding: "0px",
        adaptiveHeight: true,
        variableWidth: false,
        arrows: false,
        swipeToSlide: false, // important: ensures swipe moves exactly slidesToScroll (1)
        touchMove: true,
        draggable: true,
        touchThreshold: 30,  // higher threshold for intentional swipes
        infinite: false,     // avoid clone-jump behavior on tiny screens
        dots: true,
      },
    },
    // VERY SMALL PHONES: same as above
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        cssEase: "ease",
        centerMode: false,
        adaptiveHeight: true,
        variableWidth: false,
        arrows: false,
        swipeToSlide: false,
        touchMove: true,
        draggable: true,
        touchThreshold: 30,
        infinite: false,
        dots: true,
      },
    },
  ],
};

/* ================= COMPONENT ================= */
export default function Services() {
  const navigate = useNavigate();
  const location = useLocation();

  // Keep autoplay enabled only on larger viewports (>768); this just toggles the base autoplay flag
  const [autoplay, setAutoplay] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth > 768;
  });

  useEffect(() => {
    function onResize() {
      setAutoplay(window.innerWidth > 768);
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const sliderSettings = { ...baseSettings, autoplay: autoplay };

  const handleReadMore = (sectionId) => {
    if (location.pathname !== "/servicesection") {
      navigate("/servicesection", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                    <ReadMore
                      as="button"
                      onClick={() => handleReadMore(s.key)}
                      style={{ cursor: "pointer", background: "none", border: "none" }}
                    >
                      Read More →
                    </ReadMore>

                    <Badge className="badgeIcon" aria-hidden>
                      {s.icon}
                    </Badge>
                  </Box>
                </ContentPanel>
              </StyledCard>
            </div>
          ))}
        </Slider>
      </Container>

      {/* CSS tweaks to ensure full-width single slides and prevent partial peeking */}
      <style>{`
        .services-slider .slick-track {
          display: flex !important;
          gap: 20px;
        }
        .services-slider .slick-slide {
          height: inherit !important;
        }
        .services-slider .slick-slide > div {
          height: 100%;
          display: flex;
          align-items: stretch;
          padding: 8px 0;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .services-slider { width: 100% !important; box-sizing: border-box; padding: 0 !important; }
          .services-slider .slick-list { padding: 0 !important; box-sizing: border-box; overflow: hidden; -webkit-overflow-scrolling: touch; }
          .services-slider .slick-track { gap: 0 !important; width: 100% !important; box-sizing: border-box !important; }
          
          .services-slider .slick-slide {
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            box-sizing: border-box !important;
            padding: 0 !important;
            transition: transform 0.5s ease !important;
          }

          .services-slider .slide-card > div {
            width: 100% !important;
            max-width: 520px !important;
            box-sizing: border-box !important;
            margin: 0 auto !important;
            padding: 0 6px !important;
          }

          .services-slider .imageBox {
            width: 100% !important;
            height: 180px !important;
            object-fit: cover !important;
            transform: none !important;
          }

          .services-slider .MuiCardContent-root {
            margin-top: -28px !important;
            padding: 16px !important;
            box-sizing: border-box !important;
          }

          .services-slider .badgeIcon {
            position: static !important;
            transform: none !important;
            margin-left: 8px !important;
            margin-bottom: 0 !important;
            right: auto !important;
            bottom: auto !important;
            width: 44px !important;
            height: 44px !important;
            align-self: flex-end;
          }

          .services-slider .slick-slide > div:hover .imageBox { transform: none !important; }
        }

        @media (max-width: 480px) {
          .services-slider { padding: 0 6px !important; }
          .services-slider .slick-list { padding: 0 4px !important; }
          .services-slider .slide-card > div { max-width: 420px !important; }
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
        .services-slider .slick-slide > div:hover .shine:before { left: 150%; }

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