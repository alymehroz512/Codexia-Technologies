import { Container, Button, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ContentDisplay from '../components/ContentDisplay.jsx';

function ContentPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <Container className="container" maxWidth={false}>
      <ContentDisplay contentType={type} wordCount={1000} />
      <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          onClick={() => navigate('/')}
          sx={{ padding: '10px 20px' }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate(`/content/${type}`)}
          sx={{ padding: '10px 20px' }}
        >
          Select
        </Button>
      </Box>
    </Container>
  );
}

export default ContentPage;