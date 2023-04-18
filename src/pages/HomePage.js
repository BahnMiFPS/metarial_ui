import React from "react";
import JobCard from "../components/JobCard";
import data from "../data.json";
import { Container, Grid } from "@mui/material";
import PageTabs from "../components/PageTabs";
import { createContext } from "react";
import { useState } from "react";

export const ListContext = createContext();

const HomePage = () => {
  const [listPageStart, setListPageStart] = useState(0);
  const [listPageEnd, setListPageEnd] = useState(5);
  //console.log(listPageStart,listPageEnd)
  const valuePage = { setListPageStart, setListPageEnd };
  return (
    <ListContext.Provider value={valuePage}>
      <Container>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {data.slice(listPageStart, listPageEnd).map((job) => (
            <Grid key={job.id} item xs={12} md={6} lg={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <PageTabs />
        </Container>
      </Container>
    </ListContext.Provider>
  );
};

export default HomePage;
