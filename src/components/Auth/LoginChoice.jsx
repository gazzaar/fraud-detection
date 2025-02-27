import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginChoice = () => {
  const navigate = useNavigate();

  const handleChoice = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <Paper
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h5" textAlign="center">
          Choose Your Next Step
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => handleChoice('/')}
        >
          Go to Dashboard
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => handleChoice('/upload')}
        >
          Upload Historical Data
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginChoice;
