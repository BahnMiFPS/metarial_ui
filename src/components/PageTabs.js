import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ListContext } from '../pages/HomePage';

//import { useNavigate } from 'react-router-dom';

export default function ScrollableTabsButtonAuto() {
//  const navigator =useNavigate()
  const valuePage= React.useContext(ListContext)
  const {setListPageStart,setListPageEnd} = valuePage;

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
        <Tab label="Page 1" onClick={() => {
          setListPageStart(0)
          setListPageEnd(5)
        }} />
        <Tab label="Page 2" onClick={() => {
          setListPageStart(5)
          setListPageEnd(10)
        }}/>
        <Tab label="Page 3" onClick={() => {
          setListPageStart(10)
          setListPageEnd(14)
        }}/>
      </Tabs>
    </Box>
  );
}
/**
 * onClick={()=> navigator(`/`)}
 * onClick={()=> navigator(`/pageTwo`)}
 * onClick={()=> navigator(`/pageThree`)}
 */