import { TextField } from '@mui/material';
import { useState } from 'react';

function WordCountInput({ onChange }) {
  const [wordCount, setWordCount] = useState(1000);

  const handleChange = (e) => {
    const value = e.target.value;
    setWordCount(value);
    onChange(value);
  };

  return (
    <TextField
      label="Number of Words"
      type="number"
      value={wordCount}
      onChange={handleChange}
      variant="outlined"
      sx={{ marginBottom: 3, width: '200px' }}
      inputProps={{ min: 1 }}
    />
  );
}

export default WordCountInput;