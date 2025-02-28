import UploadFileIcon from '@mui/icons-material/UploadFile';
import {
  Alert,
  Button,
  CircularProgress,
  Paper,
  Snackbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const FileUpload = ({ onUploadSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError('');
    try {
      const response = await fetch('your-backend-url/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed. Please try again.');
      }

      const data = await response.json();
      onUploadSuccess(data);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError(error.message || 'Failed to upload file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError('');
  };

  return (
    <Paper
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '0.75rem',
        p: 3,
        mt: 4,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        position: 'relative',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Upload Historical Data
      </Typography>
      <Button
        component="label"
        variant="contained"
        startIcon={
          loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <UploadFileIcon />
          )
        }
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload CSV'}
        <input
          type="file"
          accept=".csv"
          hidden
          onChange={handleFileUpload}
          disabled={loading}
        />
      </Button>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default FileUpload;
