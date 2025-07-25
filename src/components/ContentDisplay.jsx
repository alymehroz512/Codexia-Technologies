import { Typography, Box, LinearProgress } from '@mui/material';

function ContentDisplay({ contentType, wordCount }) {
  // Placeholder content based on content type
  const content = {
    fun: 'Set the number of words for output text.',
    education: 'Set the number of words for output text.',
    sports: 'Set the number of words for output text.',
    news: 'Set the number of words for output text.',
    investment: 'Set the number of words for output text.',
    facts: 'Set the number of words for output text.'
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
      <Typography variant="h4" gutterBottom>
        {contentType.charAt(0).toUpperCase() + contentType.slice(1)} Content
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        {content[contentType.toLowerCase()]} (Target: {wordCount} words)
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 1 }}>
          <Typography variant="body2" sx={{ color: '#ffffff' }}>100</Typography>
          <Typography variant="body2" sx={{ color: '#ffffff' }}>1000</Typography>
        </Box>
        <LinearProgress variant="determinate" value={70} sx={{ height: 10, borderRadius: 5, width: '100%' }} />
      </Box>
    </Box>
  );
}

export default ContentDisplay;