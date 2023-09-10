import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Telegram } from '@mui/icons-material';

import {resumeData} from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';

const pages = ['Resume', 'Portfolio'];

function Header() {
  // const pathName = props?.location?.pathname;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);

  };

  return (
    // <AppBar position="static" className='header'>
      <Container maxWidth="xl" className='header'>
        <Toolbar disableGutters>

          {/* Code for header title and logo in big screens */}
          <div className='header_home'>
            <Link 
                to={"/"}
                style={{ textDecoration: 'none' }} >
                <HomeIcon className='homeIcon' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
            </Link>
          </div>
          
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          {/* Code for header items in small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link
                to={"/"}
                style={{ textDecoration: 'none' }} >
                  <Typography textAlign="center">Home</Typography>
              </Link>
              <div className='menu_mobile'>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      to={"/" + page.toLowerCase()}
                      style={{ textDecoration: 'none' }} >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Box>

          {/* Code for header title and logo in small screens */}
          {/* <Link
            to={"/"}
            style={{ textDecoration: 'none' }}>
            <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />
          </Link> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          {/* Code for header items in big screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Link 
                  to={"/" + page.toLowerCase()}
                  style={{ textDecoration: 'none' }} >
                  <Button className='button_hover'
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                    style={{ backgroundColor: 'transparent' }}
                  >
                    {page}
                  </Button>
                </Link>
            ))}
          </Box>

          {/* Code for image */}
          <Box sx={{ flexGrow: 0 }} className="header_right">
          
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            {Object.keys(resumeData.socials).map((key) => (
              <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">
                {resumeData.socials[key].icon}
              </a>
            ))}
            <Link 
              to={"/contact"}
              style={{ textDecoration: 'none' }} >
              <CustomButton text={"Contact"} icon={<Telegram />} />
            </Link>
          
          </Box>
        </Toolbar>
      </Container>
    // </AppBar>
  );
}
export default Header;


