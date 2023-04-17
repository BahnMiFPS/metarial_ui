import React from 'react'
import SearchAppBar from './components/SearchAppBar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import PageTow from './pages/PageTow';
import PageThree from './pages/PageThree';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DetailPage from './pages/DetailPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="pageTwo" element={<PageTow/>}/>
        <Route path="pageThree" element={<PageThree/>}/>
        <Route path="pageDetail/:id" element={<DetailPage/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
