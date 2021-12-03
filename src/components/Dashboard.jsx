import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyCard from './Card'
import RatingCard from './RatingCard'
import Marker from './Marker'


export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} wrap="nowrap">
        <Grid item xs={4}>
          <MyCard />
        </Grid>
        <Grid item xs={4}>
          <RatingCard />
        </Grid>
        <Grid item xs={4}>
          <Marker positive={0.5} neutral={0.3} negative={0.2}/>
        </Grid>
      </Grid>
    </Box>
  );
}
