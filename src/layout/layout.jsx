/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import HumbergureMenu from '../components/icons/HumbergureMenu';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', margin: '1rem' }}>
      {/* Drawer (Sidebar) */}
      <Drawer
        variant={isMobileScreen ? 'temporary' : 'permanent'}
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none'
          },
        }}
      >
        <Sidebar />
      </Drawer>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
           background: '#F5F9F8',
           borderRadius: '40px',
           padding: '1.5rem'
        }}
      >
        <Box sx={{  }}>
          {isMobileScreen && (
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <HumbergureMenu />
            </IconButton>
          )}
          {/* Top Navbar */}
          <Header />
        </Box>
        <Box sx={{ margin: '1rem' }}>
          {/* {children} */}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
