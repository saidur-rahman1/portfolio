import './App.css';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Profile} from './components/Profile/Profile';
import Resume from './pages/Resume/Resume';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
      <Container className="top_60">
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} md={4}>
              <Profile />
            </Grid>
            <BrowserRouter>
              <Grid container item xs={12} md={8} className='browser_router'>
                <div container item xs={12} className="header">
                  <Header />
                </div>
                <div container item className="body_content container_shadow">
                    <Routes>
                      <Route path='/' element={<Home />} /> 
                      <Route path='/portfolio' element={<Portfolio />} />
                      <Route path='/resume' element={<Resume />} />
                      <Route path='/contact' element={<Contact />} />
                    </Routes>
                </div>
                <div container item className="footer">
                  <Footer />
                </div>
              </Grid>
            </BrowserRouter>
          </Grid>
      </Container>
  );
}

export default App;
