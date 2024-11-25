/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {
  StyledChildrenBox,
  StyledDrawer,
  StyledLayoutBox,
  StyledMainBox,
} from '../components/styled/styled';
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledLayoutBox isMobileScreen={isMobileScreen}>
      {/* Drawer (Sidebar) */}
      <StyledDrawer
        variant={isMobileScreen ? 'temporary' : 'permanent'}
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Sidebar handleDrawerToggle={handleDrawerToggle} />
      </StyledDrawer>
      {/* Right side */}
      <StyledMainBox component="main" isMobileScreen={isMobileScreen}>
        <Box>
          {/* Top Navbar */}
          <Header handleDrawerToggle={handleDrawerToggle} />
        </Box>
        {/* main content */}
        <StyledChildrenBox>{children}</StyledChildrenBox>
      </StyledMainBox>
    </StyledLayoutBox>
  );
};

export default Layout;
