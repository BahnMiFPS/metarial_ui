import React from 'react'
import  JobCard  from '../components/JobCard';
import data from '../data.json';
import { Container, Grid } from '@mui/material';

const PageThree = () => {
  return (
    <Container>
    <Grid container spacing={2} sx={{mt:1}}>
      {data.slice(10).map((job) => (
      <Grid key={job.id} item xs={12} md={6} lg={4}> 
      <JobCard  job={job}/>  
      </Grid>
      ))} 

      </Grid>
    </Container>
  )
}

export default PageThree
