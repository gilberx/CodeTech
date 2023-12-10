// UserProfilePage.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Settings from './Settings';
import Progress from './Progress';
import Achievements from './Achievements';
import Goals from './Goals';
import CreateGoals from './CreateGoals';
import EditGoals from './EditGoals';
import ViewGoals from './ViewGoals';
import './App.css';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Join a Class', 'Courses', 'How it Works', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const App = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const faviconPath = process.env.PUBLIC_URL + '/favicon.ico';

  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: '#212121',
            width: '80%',
            borderRadius: '40px',
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '30px',
          }}
        >
          <Container maxWidth="100%">
            <Toolbar disableGutters>
              <img
                src={faviconPath}
                alt="Favicon"
                style={{
                  display: { xs: 'none', md: 'flex' },
                  marginRight: 0,
                  height: '50px',
                  width: '50px',
                  marginRight: '10px',
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600',
                  color: 'inherit',
                  fontSize: '30px',
                  textDecoration: 'none',
                  mr: 60,
                }}
              >
                CodeTech
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600',
                  color: 'inherit',
                  fontSize: '30px',
                  textDecoration: 'none',
                }}
              >
                CodeTech
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      color: 'inherit',
                      fontSize: '18px',
                      my: 2,
                      display: 'block',
                      mr: 6,
                      textTransform: 'none',
                      borderRadius: '25px',
                      width: '150px',
                      height: '50px',
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'white',
                    display: 'block',
                    mr: 4,
                    border: '2px solid white',
                    borderRadius: '25px',
                    width: '120px',
                    height: '50px',
                    textTransform: 'none',
                    fontSize: 16,
                  }}
                >
                  Sign Up
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    backgroundColor: '#458C83',
                    color: 'white',
                    display: 'block',
                    borderRadius: '25px',
                    width: '120px',
                    height: '50px',
                    textTransform: 'none',
                    fontWeight: '800',
                    fontSize: 16,
                  }}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <Router>
        <div className="user-profile-page">
          <div className="profile-content">
            <Routes>
              <Route path="/" element={<UserProfile />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/creategoals/:group" element={<CreateGoals />} />
              <Route path="/viewgoals/:group" element={<ViewGoals />} />
              <Route path="/editgoals/:sid" element={<EditGoals />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;