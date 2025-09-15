import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  styled,
  stepConnectorClasses
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle
} from '@mui/icons-material';

// Custom styled components
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#ff6b35',
      height: 4,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#ff6b35',
      height: 4,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 1,
  },
}));

const CustomStepIcon = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: ownerState.completed 
    ? '#ff6b35' 
    : ownerState.active 
    ? '#ff6b35' 
    : '#fca5a5',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
}));

const StyledStepper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0f3a4c, #0f3a4c)',
  padding: '30px',
  borderRadius: '10px',
  marginBottom: '32px',
}));

const TrackButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ff6b35, #ff8a50)',
  color: 'white',
  padding: '15px 30px',
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: '8px',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg, #e55a2b, #e5743d)',
    transform: 'translateY(-2px)',
  },
  transition: 'transform 0.2s ease'
}));

const FAQAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: '1px solid #e2e8f0',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    padding: '20px 0',
    minHeight: 'auto',
    '& .MuiAccordionSummary-content': {
      margin: 0,
    }
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#ff6b35',
  }
}));

function CustomStepIconComponent(props) {
  const { active, completed, className, icon } = props;
  return (
    <CustomStepIcon ownerState={{ completed, active }} className={className}>
      {completed ? <CheckCircle /> : icon}
    </CustomStepIcon>
  );
}

const TrackShipmentSection = () => {
  const [trackingId, setTrackingId] = useState('');
  const [activeStep, setActiveStep] = useState(2);
  const [expanded, setExpanded] = useState('panel1');

  const steps = [
    'Confirmed Order',
    'Processing Order',
    'Quality Check',
    'Dispatched from',
    'Product Delivered'
  ];

  const faqData = [
    {
      id: 'panel1',
      question: 'How Do You Handle Returns Or Exchanges?',
      answer: 'We have a comprehensive returns and exchanges policy. Items can be returned within 30 days of delivery in their original condition.'
    },
    {
      id: 'panel2',
      question: 'What Does Business Consulting Do?',
      answer: 'We help businesses bring ideas to life in the digital world designing & implementing the technology tools that they need to win. We help business bring ideas to life in the digital world.'
    },
    {
      id: 'panel3',
      question: 'Can I Cancel A Shipment After It\'s Been Booked?',
      answer: 'Yes, shipments can be cancelled before they are dispatched. Once dispatched, modifications may be limited based on the shipping method and destination.'
    },
    {
      id: 'panel4',
      question: 'Can You Assist With Customs Clearance Procedures?',
      answer: 'Absolutely! We provide full customs clearance assistance for international shipments, including documentation and compliance support.'
    }
  ];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTrackShipment = () => {
    console.log('Tracking ID:', trackingId);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5, minHeight: '100vh', bgcolor: '#ffffff' }}>
      
      {/* === Main Heading Section === */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="subtitle1"
          sx={{ color: "#f85a40", fontWeight: 600, letterSpacing: 1 }}
        >
          — TRACK YOUR ORDERS ✈
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: 1.5,
            lineHeight: 1.1,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 750,
              fontSize: { xs: 28, sm: 36, md: 56 },
              color: "#0c2c3d",
            }}
          >
            Track
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 750,
              fontSize: { xs: 28, sm: 36, md: 56 },
              color: "#f85a40",
              textTransform: "uppercase",
              position: "relative",
              display: "inline-block",
            }}
          >
            SHIPMENTS
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

      {/* Tracking Input */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <TextField
            variant="outlined"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            sx={{
              flex: 1,
              maxWidth: 400,
              '& .MuiOutlinedInput-root': {
                padding: '4px 14px',
                fontSize: '16px',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff6b35',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff6b35',
                }
              },
              '& .MuiOutlinedInput-input': {
                padding: '15px 20px',
              }
            }}
          />
          <TrackButton onClick={handleTrackShipment} size="large">
            TRACK ORDER
          </TrackButton>
        </Box>

        {/* Progress Container */}
        <StyledStepper>
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
              ORDER TRACKING, ORDER NO.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              maxWidth: 500, 
              mx: 'auto',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1, sm: 0 }
            }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Shipped Via : Local Courier
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Status : In transit
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Expected Date : Nov 25th
              </Typography>
            </Box>
          </Box>
          
          <Stepper 
            activeStep={activeStep} 
            alternativeLabel
            connector={<CustomStepConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={index < activeStep}>
                <StepLabel
                  StepIconComponent={CustomStepIconComponent}
                  sx={{
                    '& .MuiStepLabel-label': {
                      color: 'white !important',
                      fontSize: '12px',
                      fontWeight: 500,
                      marginTop: '8px',
                      maxWidth: '80px',
                      lineHeight: 1.2
                    },
                    '& .MuiStepLabel-label.Mui-active': {
                      color: 'white !important',
                    },
                    '& .MuiStepLabel-label.Mui-completed': {
                      color: 'white !important',
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </StyledStepper>
      </Paper>

      {/* Content Columns */}
      <Grid container spacing={5}>
        {/* FAQ Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, height: 'fit-content' }}>
            <Box textAlign="left" mb={6}>
              <Typography
                variant="subtitle1"
                sx={{ color: "#f85a40", fontWeight: 600, letterSpacing: 1 }}
              >
                — COMPANY'S FAQ ✈
              </Typography>

              <Box sx={{ lineHeight: 1.1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 750,
                    fontSize: { xs: 28, sm: 36, md: 46 },
                    color: "#0c2c3d",
                    lineHeight: 1.2,
                  }}
                >
                  Frequently Asked{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#f85a40",
                      textTransform: "uppercase",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    QUESTION?
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
                  </Box>
                </Typography>
              </Box>
            </Box>

            {faqData.map((faq) => (
              <FAQAccordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleAccordionChange(faq.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0',
                    }
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#2c5282',
                      fontSize: '16px'
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.6
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </FAQAccordion>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrackShipmentSection;