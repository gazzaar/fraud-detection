import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SecurityIcon from '@mui/icons-material/Security';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Real-time Fraud Detection',
      description:
        'Advanced algorithms to detect suspicious transactions instantly',
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      title: 'Transaction Monitoring',
      description:
        'Comprehensive dashboard for monitoring all transaction activities',
    },
    {
      icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
      title: 'Instant Alerts',
      description: 'Immediate notifications for high-risk transactions',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Analytics',
      description:
        'Detailed insights and trend analysis for better decision making',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: 'primary.dark',
            }}
          >
            Fraud Detection System
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}
          >
            Protect your business with our advanced AI-powered fraud detection
            platform
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/login')}
            sx={{ mr: 2 }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mb: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  bgcolor: 'white',
                  borderRadius: '0.75rem',
                  p: '1.75rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
                elevation={0}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Statistics Section */}
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  bgcolor: 'white',
                  borderRadius: '0.75rem',
                  p: '1.75rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                elevation={0}
              >
                <Typography variant="h3" color="primary.main" sx={{ mb: 1 }}>
                  98%
                </Typography>
                <Typography variant="h6">Detection Accuracy</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  bgcolor: 'white',
                  borderRadius: '0.75rem',
                  p: '1.75rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                elevation={0}
              >
                <Typography variant="h3" color="primary.main" sx={{ mb: 1 }}>
                  24/7
                </Typography>
                <Typography variant="h6">Real-time Monitoring</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  bgcolor: 'white',
                  borderRadius: '0.75rem',
                  p: '1.75rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                elevation={0}
              >
                <Typography variant="h3" color="primary.main" sx={{ mb: 1 }}>
                  1.2M+
                </Typography>
                <Typography variant="h6">Transactions Protected</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
