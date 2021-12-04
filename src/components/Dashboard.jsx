import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyCard from './Card'
import RatingCard from './RatingCard'
import SuperCard from './SuperCard'
import Marker from './Marker'


export default function Dashboard(props) {
  const { data } = props;

  console.log(data)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} wrap="nowrap">
        <Grid item xs={4}>
          <MyCard image={data.image_user} name={`${data.given_name} ${data.family_name}`} mobile={data.mobile} birthdate={data.birthdate}/>
        </Grid>
        <Grid item xs={4}>
          <RatingCard image={data.image_wordcount} negative={data.negat}/>
        </Grid>
        <Grid item xs={4}>
          <Marker positive={data.posit} neutral={data.netral} negative={data.negat}/>
        </Grid>
      </Grid>
      <Grid container spacing={2} wrap="nowrap">
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <SuperCard image={data.image_rad} />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </Box>
  );
}
