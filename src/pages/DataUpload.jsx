import { Container } from '@mui/material';
import FileUpload from '../components/FileUpload/FileUpload';

const DataUpload = () => {
  const handleUploadSuccess = (data) => {
    // Handle the successful upload here
    console.log('Upload successful:', data);
    // You might want to:
    // - Show a success message
    // - Update the UI with the processed data
    // - Navigate to another page
  };

  return (
    <Container maxWidth="md">
      <FileUpload onUploadSuccess={handleUploadSuccess} />
    </Container>
  );
};

export default DataUpload;
