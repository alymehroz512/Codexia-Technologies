import { Container } from '@mui/material';
import HeaderContentSelection from '../components/HeaderContentSelection.jsx';

function HomePage() {
  return (
    <Container className="container" maxWidth={false}>
      <HeaderContentSelection />
    </Container>
  );
}

export default HomePage;