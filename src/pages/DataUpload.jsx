import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/FileUpload/FileUpload';

const DataUpload = () => {
  const navigate = useNavigate();

  const handleUploadSuccess = (data) => {
    // Navigate to dashboard after successful upload
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="md">
      <FileUpload onUploadSuccess={handleUploadSuccess} />
    </Container>
  );
};

export default DataUpload;
