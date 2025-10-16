import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Fade,
  Stack,
} from "@mui/material";
import {
  PrecisionManufacturing,
  Medication,
  ShoppingCart,
  DirectionsCar,
  Devices,
  LocalDining,
} from "@mui/icons-material";

function ServicesSection() {
  const services = [
    {
      key: "customs",
      title: "Customs Clearing",
      intro:
        "We ensure smooth customs operations with expert documentation and regulatory compliance.",
      description:
        "Our customs team works proactively with port authorities and carriers to clear shipments quickly.\nWe use electronic filing, pre-arrival processing and risk assessment to reduce hold-ups and keep your supply chain moving.",
      details: [
        "Complete documentation & clearance at ports and airports",
        "Expertise in duty drawbacks, HS classification, EPCG, MEIS, and SEIS schemes",
        "Pre-arrival filing & faster release processes",
        "Support with appeals, post-clearance audits and rectifications",
        "Dedicated compliance liaison to minimize penalties and delays",
      ],
    },
    {
      key: "freight",
      title: "Freight Forwarding",
      intro:
        "Our freight solutions cover air, sea, and inland transport for efficient global trade.",
      description:
        "We design cost-effective routing and carrier selection based on transit times, cargo type and budget.\nReal-time tracking, consolidation options and multimodal planning keep your shipments reliable and transparent.",
      details: [
        "Air Freight: Fast, reliable solutions for urgent shipments",
        "Sea Freight: FCL, LCL and project cargo management",
        "Inland Transport: Trucking, rail & multimodal connectivity",
        "Cargo consolidation & deconsolidation for cost savings",
        "Real-time tracking and exception management",
      ],
    },
    {
      key: "warehousing",
      title: "Warehousing",
      intro:
        "Modern and secure warehousing solutions to optimize your supply chain.",
      description:
        "Our facilities provide scalable storage, inventory visibility and value-added operations like pick & pack, kitting and labeling.\nWe operate bonded and non-bonded options and integrate WMS for accurate stock control.",
      details: [
        "Secure storage facilities with modern infrastructure",
        "Inventory management and WMS integration",
        "Pick & pack, kitting and value-added operations",
        "Cross-docking and just-in-time handling",
        "Bonded & non-bonded warehousing solutions",
      ],
    },
    {
      key: "svb",
      title: "SVB (Special Valuation Branch)",
      intro:
        "We assist businesses with compliance in related-party transactions and customs valuation.",
      description:
        "Our valuation specialists help prepare transparent documentation, cost build-ups and transfer pricing references to support customs valuation.\nWe help minimize valuation disputes and expedite clearances.",
      details: [
        "Assistance with related party transactions",
        "Import valuation compliance with customs regulations",
        "Preparation of commercialization/transfer pricing support",
        "Representation for valuation queries and audits",
      ],
    },
    {
      key: "bond",
      title: "Bond Sections Work",
      intro:
        "Comprehensive support for executing and managing warehousing and license bonds.",
      description:
        "We manage the lifecycle of warehousing and license bonds (EPCG, advance licenses etc.), including documentation, renewals and redemption.\nOur experts ensure all regulatory conditions are met.",
      details: [
        "Execution of warehousing bonds",
        "Handling EPCG bonds, advance license bonds and related compliance",
        "Bond filing, tracking and renewal management",
        "Assistance with bond-related claims and rectifications",
      ],
    },
    {
      key: "consulting",
      title: "Consulting in Customs & Compliance",
      intro:
        "Expert consulting services tailored to simplify compliance for global trade.",
      description:
        "We deliver practical compliance programs, DGFT licensing support, and tailored advisory for complex regulatory scenarios.\nOur audits and training help reduce risk and improve customs governance.",
      details: [
        "Trade compliance advisory and risk assessments",
        "DGFT consultation for import/export licenses",
        "Tariff classification and duty optimization advice",
        "Customs process audits and team training",
      ],
    },
    {
      key: "value",
      title: "Value-added Services",
      intro:
        "Additional services designed to provide complete logistics support for our clients.",
      description:
        "From professional packaging to cargo insurance and last-mile delivery, our value-added services ensure your cargo is protected and delivered with care.\nWe can build tailored solutions around your product needs.",
      details: [
        "Cargo insurance for peace of mind",
        "Professional packaging & labeling",
        "Last-mile delivery solutions for end-to-end service",
        "Reverse logistics and returns management",
        "Dedicated customer success support for each shipment",
      ],
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <>
      {/* ✅ Original Section (unchanged) */}
      <Box sx={{ py: 10, bgcolor: "#f9f9f9", pt: { xs: 20, md: 22 } }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent={"center"}
          >
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/services.jpg"
                alt="Services"
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 450 },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: "520px", mx: { xs: "auto", md: 0 } }}>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    mb: 2,
                    color: "#0c2d48",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Our Services
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    lineHeight: 1.8,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  We provide end-to-end logistics solutions designed to simplify
                  trade, ensure compliance, and move your business forward.
                  Whether it’s customs clearance, freight forwarding,
                  warehousing, or compliance consulting, our team ensures your
                  cargo reaches its destination safely, on time, and
                  cost-effectively.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ✅ New Section (Tabs + Multi-line Paragraphs) */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} alignItems="center">
            {/* Left Side: Tabs */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 3, color: "#0c2d48" }}
                >
                  Service We Provide
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {services.map((s) => (
                    <Button
                      key={s.key}
                      onClick={() => setActiveService(s)}
                      sx={{
                        justifyContent: "space-between",
                        px: 3,
                        py: 2,
                        fontWeight: 600,
                        borderRadius: 1,
                        textTransform: "uppercase",
                        backgroundColor:
                          activeService.key === s.key ? "#0c2d48" : "#f1f5f9",
                        color:
                          activeService.key === s.key ? "#fff" : "#0c2d48",
                        "&:hover": {
                          backgroundColor:
                            activeService.key === s.key
                              ? "#0a1f33"
                              : "#e2e8f0",
                        },
                      }}
                    >
                      {s.title}
                      <span style={{ marginLeft: "auto" }}>→</span>
                    </Button>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Right Side: Details */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mt: 10,
                }}
              >
                <Fade in key={activeService.key} timeout={600}>
                  <Box sx={{ maxWidth: "700px" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: "#183d62ff",
                      }}
                    >
                      {activeService.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        color: "#444",
                        lineHeight: 1.8,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {activeService.intro}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: "#555",
                        lineHeight: 1.8,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {activeService.description}
                    </Typography>

                    <Box
                      component="ul"
                      sx={{
                        pl: 3,
                        color: "#444",
                        lineHeight: 1.8,
                        mb: 2,
                        fontSize: "0.98rem",
                      }}
                    >
                      {activeService.details.map((point, idx) => (
                        <li key={idx} style={{ marginBottom: 8 }}>
                          <Typography variant="body1">{point}</Typography>
                        </li>
                      ))}
                    </Box>
                  </Box>
                </Fade>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ✅ Industries We Serve Section */}
      <Box sx={{ py: 10, bgcolor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 4,
              color: "#0c2d48",
              textAlign: "center",
            }}
          >
            Industries We Serve
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: "#444",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            We understand the unique needs of different industries and customize
            logistics solutions accordingly.
          </Typography>

          <Grid container spacing={4} sx={{ pl: { xs: 2, md: 6, mr: 6, justifyContent: "center"} }}>
            {[
              {
                icon: <PrecisionManufacturing sx={{ color: "#183d62ff" }} />,
                text: "Manufacturing & Engineering – Import/export of raw materials, equipment, and machinery",
              },
              {
                icon: <Medication sx={{ color: "#183d62ff" }} />,
                text: "Pharmaceuticals & Healthcare – Temperature-controlled shipping & regulatory compliance",
              },
              {
                icon: <ShoppingCart sx={{ color: "#183d62ff" }} />,
                text: "E-commerce & Retail – Faster clearances, warehousing, and last-mile delivery",
              },
              {
                icon: <DirectionsCar sx={{ color: "#183d62ff" }} />,
                text: "Automotive & Spare Parts – JIT logistics & oversized shipments",
              },
              {
                icon: <Devices sx={{ color: "#183d62ff" }} />,
                text: "Electronics & High-Value Goods – Secure, bonded warehousing & customs valuation",
              },
              {
                icon: <LocalDining sx={{ color: "#183d62ff" }} />,
                text: "Perishables & Food Industry – Cold chain logistics & priority clearance",
              },
            ].map((item, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  {item.icon}
                  <Typography variant="body1" sx={{ color: "#333" }}>
                    {item.text}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h6"
            sx={{
              mt: 6,
              textAlign: "center",
              color: "#183d62ff",
              fontWeight: "600",
            }}
          >
            From documentation to delivery, we handle everything so you can
            focus on growing your business.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default ServicesSection;