import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';

const FileUpload = ({ onUploadSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const response = await fetch('your-backend-url/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      onUploadSuccess(data);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
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
      }}
    >
      <Typography variant="h6" gutterBottom>
        Upload Historical Data
      </Typography>
      <Button
        component="label"
        variant="contained"
        startIcon={<UploadFileIcon />}
        disabled={loading}
      >
        Upload CSV
        <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
      </Button>
    </Paper>
  );
};

export default FileUpload;
