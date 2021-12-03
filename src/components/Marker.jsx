import * as React from 'react';
import Box from '@mui/material/Box';

export default function Marker(props) {

  const { positive, neutral, negative } = props;



  return (
    <div>
      <Box
      sx={{
        marginTop: 2,
        width: 300,
        height: Math.round(positive*480),
        bgcolor: 'green',
        '&:hover': {
          backgroundColor: 'green',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      />
      <Box
      sx={{
        width: 300,
        height: Math.round(neutral*480),
        bgcolor: 'yellow',
        '&:hover': {
          backgroundColor: 'yellow',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    <Box
      sx={{
        width: 300,
        height: Math.round(negative*480),
        bgcolor: 'red',
        '&:hover': {
          backgroundColor: 'red',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </div>
  );
}