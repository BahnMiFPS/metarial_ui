import React from 'react'
import  JobCard  from '../components/JobCard';
import data from '../data.json';
import { Container, Grid } from '@mui/material';
import PageTabs from '../components/PageTabs'


const PageTow = () => {
  return (
      <Container>
    <Grid container spacing={2} sx={{mt:1}}>
      {data.slice(5,10).map((job) => (
      <Grid key={job.id} item xs={12} md={6} lg={4}> 
      <JobCard  job={job}/>  
      </Grid>
      ))} 
      </Grid>
      <Container sx={{display:'flex',justifyContent:'center'}}>
        <PageTabs/>
      </Container>
    </Container>
  )
}

export default PageTow