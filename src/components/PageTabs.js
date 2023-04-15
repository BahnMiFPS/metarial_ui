import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function ScrollableTabsButtonAuto() {
  const navigator =useNavigate()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' , mt:5}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Page 1" onClick={()=> navigator(`/`)}/>
        <Tab label="Page 2" onClick={()=> navigator(`/pageTwo`)}/>
        <Tab label="Page 3" onClick={()=> navigator(`/pageThree`)}/>
      </Tabs>
    </Box>
  );
}
/**
 * onClick={()=> navigator(`/`)}
 * onClick={()=> navigator(`/pageTwo`)}
 * onClick={()=> navigator(`/pageThree`)}
 */