// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Stack
// } from '@mui/material';
// import { ArrowForward, PlayArrow } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';
// import { motion } from 'framer-motion';

// // Wave animation variants
// const waveContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.04,
//       staggerDirection: -1,
//     },
//   },
// };

// const waveItem = {
//   hidden: { opacity: 0, y: 6 },
//   visible: { opacity: 1, y: 0 },
// };

// const StyledSection = styled(Box)(({ theme }) => ({
//   backgroundColor: '#1e293b', // Dark slate fallback
//   backgroundImage: 'url(/images/why-choose-v1-pattern.png)', // path in public/images/
//   backgroundSize: '70% auto',
//   backgroundPosition: 'right center',
//   backgroundRepeat: 'no-repeat',
//   color: 'white',
//   padding: '80px 0',
//   position: 'relative',
//   minHeight: '100vh',
//   display: 'flex',
//   alignItems: 'center',

//   // dark overlay to mute the image
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(30, 41, 59, 0.78)', // tweak alpha to lighten/darken
//     zIndex: 1
//   },

//   // ensure content sits above overlay
//   '& > *': {
//     position: 'relative',
//     zIndex: 2
//   }
// }));

// const SectionHeader = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '12px',
//   marginBottom: '8px', // reduced gap
//   '&::before': {
//     content: '""',
//     width: '40px',
//     height: '2px',
//     backgroundColor: '#ff4c1c',
//   }
// }));

// const MainTitle = styled(Typography)(({ theme }) => ({
//   // container style; actual characters rendered via motion spans
//   fontSize: '3.5rem',
//   fontWeight: '700',
//   lineHeight: 1.05,
//   marginBottom: '12px',
//   [theme.breakpoints.down('md')]: {
//     fontSize: '2.5rem',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '2rem',
//   }
// }));

// const HighlightText = styled('span')({
//   color: '#ff4c1c'
// });

// const Subtitle = styled(Typography)(({ theme }) => ({
//   fontSize: '1.1rem',
//   fontStyle: 'italic',
//   marginBottom: '12px', // reduced gap
//   opacity: 0.95,
//   display: 'flex',
//   alignItems: 'center',
//   gap: '12px',
//   textAlign: 'left'
// }));

// const StyledListItem = styled(ListItem)(({ theme }) => ({
//   padding: '6px 0', // reduced padding
//   alignItems: 'flex-start'
// }));

// const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
//   color: '#ff4c1c',
//   minWidth: '32px',
//   marginTop: '6px'
// }));

// const ContactButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#ff4c1c',
//   color: 'white',
//   padding: '10px 28px',
//   borderRadius: '25px',
//   fontSize: '16px',
//   fontWeight: 600,
//   marginTop: '12px', // reduced gap
//   textTransform: 'none',
//   '&:hover': {
//     backgroundColor: '#ea580c',
//     transform: 'translateY(-2px)',
//     boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)'
//   },
//   transition: 'all 0.3s ease'
// }));

// const WhyChooseUs = () => {
//   const handleContactClick = () => {
//     // Redirect to contact form - customize as needed
//     console.log('Navigate to contact form');
//     // Example: navigate('/contact') or window.location.href = '/contact'
//   };

//   const benefits = [
//     "Government-approved Custom Broker (CHA)",
//     "Global network of partners & agents",
//     "24/7 customer support & real-time updates",
//     "Proven expertise in Customs, SVB, Bond Sections & Consulting"
//   ];

//   return (
//     <StyledSection>
//       <Container maxWidth="lg">
//         <Box sx={{ maxWidth: '700px' /* keep left-aligned text layout */ }}>
//           {/* Section Header */}
//           <Stack direction="row" alignItems="center" spacing={1} mb={1}>
//             <Typography
//               sx={{
//                 fontSize: "0.95rem",
//                 fontWeight: "bold",
//                 color: "#ff4c1c",
//                 textTransform: "uppercase",
//                 letterSpacing: "1px",
//               }}
//             >
//               Why Choose Us
//             </Typography>
//             <Typography sx={{ color: "#ff4c1c" }}>✈</Typography>
//           </Stack>

//           {/* Animated Main Title - two parts with underline only under SOLUTIONS */}
//           <Box sx={{ mb: 1 }}>
//             {/* First line: Efficient, Safe and Swift Logistics */}
//             <motion.div
//               variants={waveContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.6 }}
//               style={{ display: 'inline-block', lineHeight: 1.05 }}
//             >
//               {"Efficient, Safe and Swift Logistics".split("").map((char, i) => (
//                 <motion.span
//                   key={`p1-${i}`}
//                   variants={waveItem}
//                   style={{
//                     display: 'inline-block',
//                     fontWeight: 700,
//                     fontSize: '3.5rem',
//                     lineHeight: 1.05,
//                     marginRight: char === " " ? "0.38rem" : 0,
//                     color: '#ffffff',
//                     verticalAlign: 'top'
//                   }}
//                 >
//                   {char === " " ? '\u00A0' : char}
//                 </motion.span>
//               ))}
//             </motion.div>

//             {/* Second line: SOLUTIONS (highlighted with underline only here) */}
//             <motion.div
//               variants={waveContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.6 }}
//               style={{ display: 'inline-block', position: 'relative', marginTop: 6 }}
//             >
//               {"SOLUTIONS".split("").map((char, i) => (
//                 <motion.span
//                   key={`p2-${i}`}
//                   variants={waveItem}
//                   style={{
//                     display: 'inline-block',
//                     fontWeight: 700,
//                     fontSize: '3.5rem',
//                     lineHeight: 1.05,
//                     marginRight: char === " " ? "0.38rem" : 0,
//                     color: '#ff4c1c',
//                     textTransform: 'uppercase',
//                   }}
//                 >
//                   {char === " " ? '\u00A0' : char}
//                 </motion.span>
//               ))}

//               {/* Underline ONLY under SOLUTIONS */}
//               <span
//                 style={{
//                   position: 'absolute',
//                   bottom: -8,
//                   left: 0,
//                   width: '100%',
//                   height: '4px',
//                   backgroundColor: '#ff4c1c',
//                 }}
//               />
//             </motion.div>
//           </Box>

//           {/* Subtitle */}
//           <Subtitle variant="h6">
//             {/* <span style={{ fontSize: '22px' }}>🚛</span> */}
//             "Your cargo, our responsibility. Together, we move the world."
//           </Subtitle>

//           {/* Benefits List */}
//           <List sx={{ marginBottom: '8px' }}>
//             {benefits.map((benefit, index) => (
//               <StyledListItem key={index} disablePadding>
//                 <StyledListItemIcon>
//                   <PlayArrow />
//                 </StyledListItemIcon>
//                 <ListItemText
//                   primary={benefit}
//                   sx={{
//                     '& .MuiListItemText-primary': {
//                       fontSize: '16px',
//                       lineHeight: '1.5',
//                       color: 'rgba(255, 255, 255, 0.92)'
//                     }
//                   }}
//                 />
//               </StyledListItem>
//             ))}
//           </List>

//           {/* Contact Button */}
//           <ContactButton
//             variant="contained"
//             endIcon={<ArrowForward />}
//             onClick={handleContactClick}
//           >
//             Contact Us
//           </ContactButton>
//         </Box>
//       </Container>
//     </StyledSection>
//   );
// };

// export default WhyChooseUs;
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack
} from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Wave animation variants
const waveContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const waveItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

const StyledSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e293b', // Dark slate fallback
  backgroundImage: 'url(/images/why-choose-v1-pattern.png)', // path in public/images/
  backgroundSize: '70% auto',
  backgroundPosition: 'right center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  padding: '80px 0',
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',

  // dark overlay to mute the image
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(30, 41, 59, 0.78)', // tweak alpha to lighten/darken
    zIndex: 1
  },

  // ensure content sits above overlay
  '& > *': {
    position: 'relative',
    zIndex: 2
  },

  // small-screen adjustments (no desktop changes)
  [theme.breakpoints.down('md')]: {
    padding: '56px 0',
    backgroundSize: '50% auto',
    minHeight: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 0',
    backgroundSize: '40% auto',
  }
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '8px', // reduced gap
  '&::before': {
    content: '""',
    width: '40px',
    height: '2px',
    backgroundColor: '#ff4c1c',
  }
}));

const HighlightText = styled('span')({
  color: '#ff4c1c'
});

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontStyle: 'italic',
  marginBottom: '12px', // reduced gap
  opacity: 0.95,
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textAlign: 'left'
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '6px 0', // reduced padding
  alignItems: 'flex-start'
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: '#ff4c1c',
  minWidth: '32px',
  marginTop: '6px'
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff4c1c',
  color: 'white',
  padding: '10px 28px',
  borderRadius: '25px',
  fontSize: '16px',
  fontWeight: 600,
  marginTop: '12px', // reduced gap
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#ea580c',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)'
  },
  transition: 'all 0.3s ease'
}));

const WhyChooseUs = () => {
  const handleContactClick = () => {
    // Redirect to contact form - customize as needed
    console.log('Navigate to contact form');
  };

  const benefits = [
    "Government-approved Custom Broker (CHA)",
    "Global network of partners & agents",
    "24/7 customer support & real-time updates",
    "Proven expertise in Customs, SVB, Bond Sections & Consulting"
  ];

  // Render sentence by words to avoid mid-letter breaks on small screens.
  const renderWordWavy = (sentence, large = false) => {
    const words = sentence.split(' ');
    return (
      <motion.div
        variants={waveContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        style={{ display: 'inline-block', lineHeight: 1.05 }}
      >
        {words.map((word, wIdx) => (
          <span
            key={`w-${wIdx}-${word}`}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap', // keep each word intact
              marginRight: '0.35rem',
              verticalAlign: 'top'
            }}
          >
            {word.split('').map((ch, cIdx) => (
              <motion.span
                key={`c-${wIdx}-${cIdx}`}
                variants={waveItem}
                style={{
                  display: 'inline-block',
                  fontWeight: 700,
                  // use responsive CSS variable --h1 for consistent desktop values and smaller on xs
                  fontSize: 'var(--h1, 3.5rem)',
                  lineHeight: 1.05,
                  marginRight: ch === ' ' ? '0.38rem' : 0,
                  color: large ? '#ff4c1c' : '#ffffff',
                  textTransform: large ? 'uppercase' : 'none',
                }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    );
  };

  return (
    <StyledSection>
      <Container maxWidth="lg">
        {/* set CSS variable --h1 responsively without changing desktop values */}
        <Box
          sx={{
            maxWidth: '700px',
            // CSS variable for heading size:
            // - Desktop (md and up) keeps original 3.5rem
            // - md down: scaled to 2.5rem (matches your previous md breakpoint behavior)
            // - sm/xs: scaled smaller so words wrap nicely
            '--h1': { xs: '2rem', sm: '2.2rem', md: '3.5rem' },
            // ensure words can wrap to next line (wrap between words only)
            overflowWrap: 'break-word',
            wordBreak: 'normal',
            hyphens: 'auto',
          }}
        >
          {/* Section Header */}
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: "bold",
                color: "#ff4c1c",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Why Choose Us
            </Typography>
            <Typography sx={{ color: "#ff4c1c" }}>✈</Typography>
          </Stack>

          {/* Animated Main Title - rendered word-by-word to avoid mid-letter wrap */}
          <Box sx={{ mb: 1 }}>
            {/* First line: Efficient, Safe and Swift Logistics */}
            <Box sx={{ display: 'block', lineHeight: 1.05 }}>
              {/* use non-large style for first line */}
              {renderWordWavy('Efficient, Safe and Swift Logistics', false)}
            </Box>

            {/* Second line: SOLUTIONS (highlighted with underline only here) */}
            <Box
              sx={{
                display: 'inline-block',
                position: 'relative',
                mt: 1,
                // give it full width on xs so underline matches wrapped text
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              {/* render SOLUTIONS as large to get orange color */}
              {renderWordWavy('SOLUTIONS', true)}

              {/* Underline ONLY under SOLUTIONS */}
              <span
                style={{
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#ff4c1c',
                }}
              />
            </Box>
          </Box>

          {/* Subtitle */}
          <Subtitle variant="h6">
            "Your cargo, our responsibility. Together, we move the world."
          </Subtitle>

          {/* Benefits List */}
          <List sx={{ marginBottom: '8px' }}>
            {benefits.map((benefit, index) => (
              <StyledListItem key={index} disablePadding>
                <StyledListItemIcon>
                  <PlayArrow />
                </StyledListItemIcon>
                <ListItemText
                  primary={benefit}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'rgba(255, 255, 255, 0.92)'
                    }
                  }}
                />
              </StyledListItem>
            ))}
          </List>

          {/* Contact Button */}
          <ContactButton
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={handleContactClick}
          >
            Contact Us
          </ContactButton>
        </Box>
      </Container>
    </StyledSection>
  );
};

export default WhyChooseUs;