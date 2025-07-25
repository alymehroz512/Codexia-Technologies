import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const contentTypes = ['Fun', 'Education', 'Sports', 'News', 'Investment', 'Facts'];

function ContentTypeSelection({ onSelect }) {
  const navigate = useNavigate();

  const handleSelect = (type) => {
    onSelect(type);
    navigate(`/content/${type.toLowerCase()}`);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {contentTypes.map((type) => (
        <Grid item xs={12} sm={6} md={4} key={type}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleSelect(type)}
            sx={{ padding: '15px', fontSize: '1.2rem' }}
          >
            {type}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentTypeSelection;