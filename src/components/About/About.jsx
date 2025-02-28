import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const About = () => {
  const benefits = [
    {
      title: 'Advanced Security',
      description:
        'State-of-the-art fraud detection algorithms powered by machine learning',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Real-time Protection',
      description: 'Instant transaction monitoring and fraud detection',
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Compliance Ready',
      description: 'Built to meet industry security standards and regulations',
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Easy Integration',
      description: 'Seamless integration with existing systems and workflows',
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', py: 6, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: 'primary.dark',
            }}
          >
            About Our Platform
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}
          >
            Leading the way in fraud prevention with advanced AI technology
          </Typography>
        </Box>

        {/* Benefits Section */}
        <Grid container spacing={6} sx={{ mb: 12 }} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={5} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '0.75rem',
                  bgcolor: 'white',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
                elevation={0}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{benefit.icon}</Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {benefit.title}
                </Typography>
                <Typography color="text.secondary">
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Timeline Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ mb: 4, textAlign: 'center', color: 'primary.dark' }}
          >
            How It Works
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '0.75rem',
                  }}
                >
                  <Typography variant="h6">Data Collection</Typography>
                  <Typography color="text.secondary">
                    Secure collection and processing of transaction data
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '0.75rem',
                  }}
                >
                  <Typography variant="h6">Real-time Analysis</Typography>
                  <Typography color="text.secondary">
                    Advanced AI algorithms analyze patterns and behaviors
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '0.75rem',
                  }}
                >
                  <Typography variant="h6">Fraud Detection</Typography>
                  <Typography color="text.secondary">
                    Instant identification of suspicious activities
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '0.75rem',
                  }}
                >
                  <Typography variant="h6">Alert Generation</Typography>
                  <Typography color="text.secondary">
                    Immediate notifications and detailed reporting
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        {/* Mission Statement */}
        <Box sx={{ textAlign: 'center' }}>
          <Paper
            sx={{
              p: 6,
              borderRadius: '0.75rem',
              bgcolor: 'primary.main',
              color: 'white',
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto' }}>
              To provide cutting-edge fraud detection solutions that protect
              businesses and their customers, making digital transactions safer
              for everyone.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
