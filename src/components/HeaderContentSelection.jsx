import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Divider, Grid, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const contentTypes = ['Fun', 'Education', 'Sports', 'News', 'Investment', 'Facts'];

const subOptions = {
  Fun: [
    'Board games revival',
    'Comedy trends',
    'Amusement parks',
    'Escape rooms',
    'Street performances',
    'Online challenges',
    'Festivals impact',
    'Crafting movement',
    'Social gaming',
    'Virtual reality'
  ],
  Education: [
    'Gamified learning',
    'Education systems',
    'Bilingual benefits',
    'Standardized testing',
    'Arts in schools',
    'Tech bootcamps',
    'Homeschooling dynamics',
    'Mentorship importance',
    'Educational equity',
    'Mobile learning'
  ],
  Sports: [
    'Sports medicine',
    'Team sociology',
    'Olympic economics',
    'Gender parity',
    'Fandom psychology',
    'Extreme sports',
    'Sports business',
    'Youth athletics',
    'Data analytics',
    'Doping ethics'
  ],
  News: [
    'Citizen journalism',
    'Whistleblower influence',
    'Fake news',
    'Print media survival',
    'Social media news',
    'Cybersecurity news',
    'Democratic media',
    'News deserts',
    'News economics',
    'Broadcast evolution'
  ],
  Investment: [
    'Robo-advising',
    'Geopolitical impacts',
    'Index funds',
    'Real estate trends',
    'Startup funding',
    'Social trading',
    'Tax strategies',
    'Emerging markets',
    'Financial literacy',
    'Pension futures'
  ],
  Facts: [
    'Animal oddities',
    'Everyday science',
    'Historical obscurities',
    'Science myths',
    'Human body facts',
    'Oceanic discoveries',
    'Space exploration',
    'Ancient tech',
    'World laws',
    'Bizarre news'
  ]
};

function HeaderContentSelection() {
  const [selectedType, setSelectedType] = useState('Fun');
  const [selectedSubOption, setSelectedSubOption] = useState(subOptions['Fun'][0]);
  const navigate = useNavigate();

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedSubOption(subOptions[type][0]); // Reset sub-option to first item when type changes
  };

  const handleSubOptionChange = (event) => {
    setSelectedSubOption(event.target.value);
  };

  const handleNext = () => {
    navigate(`/content/${selectedType.toLowerCase()}`);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#000000', width: '900px', maxWidth: '90%', margin: '0 auto' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: '#ffffff' }}>
              Media Management
            </Typography>
            <Typography variant="body2" sx={{ color: '#ffffff' }}>
              Draft campaign
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              sx={{ color: '#ffffff', marginRight: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Ali Mehroz
            </Typography>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 4, textAlign: 'center', width: '100%', maxWidth: '800px' }}>
        <Typography variant="h4" gutterBottom>
          Content Type
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Choose a content type that best fits your needs.
        </Typography>
        <Divider sx={{ marginY: 2, backgroundColor: '#ffffff' }} />
        <Typography variant="h6" gutterBottom>
          What type of content are you creating?
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 3 }}>
          {contentTypes.map((type) => (
            <Grid item xs={12} sm={6} md={4} key={type}>
              <Button
                variant={selectedType === type ? 'contained' : 'outlined'}
                fullWidth
                onClick={() => handleTypeSelect(type)}
                sx={{ padding: '10px', fontSize: '1rem' }}
              >
                {type}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" gutterBottom>
          Which type of “{selectedType}” content do you want to create?
        </Typography>
        <FormControl sx={{ width: '100%', maxWidth: '400px', marginBottom: 3, marginTop: 3 }}>
          <InputLabel id="sub-option-select-label">Select {selectedType} Type</InputLabel>
          <Select
            labelId="sub-option-select-label"
            value={selectedSubOption}
            label={`Select ${selectedType} Type`}
            onChange={handleSubOptionChange}
            sx={{ textAlign: 'left' }}
          >
            {subOptions[selectedType].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
            sx={{ padding: '10px 20px' }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ padding: '10px 20px' }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderContentSelection;