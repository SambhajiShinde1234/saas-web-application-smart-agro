import {
  styled,
  Box,
  Stack,
  Typography,
  Drawer,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

// icons

export const StyledIconBox = styled(Box)(() => ({
  background: '#FFF',
  borderRadius: '50px',
  padding: '0.2rem',
  outline: '2px solid #EBEFF0',
}));

// flex
export const StyledFlexCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
}));

export const StyledFlexBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
}));

// typography

export const StyledPrimaryTypography = styled(Typography)(() => ({
  color: '#292A3B',
  fontWeight: '900',
}));

export const StyledSecondaryTypography = styled(Typography)(() => ({
  color: '#A0A4A3',
  fontWeight: '600',
}));

// sidebar

export const StyledLogoBox = styled(Box)(() => ({
  height: '7rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledLogo = styled('span')(() => ({
  fontSize: '2.5rem',
  fontWeight: '900',
}));

export const StyledLogoPro = styled(StyledLogo)(() => ({
  color: '#1FC28B',
}));

export const StyledListeitemIcon = styled(ListItemIcon)(({ isactive }) => ({
  color: isactive ? '#FFF' : '#A0A4A3',
}));

export const StyledListeitemText = styled(Typography)(({ isactive }) => ({
  color: isactive ? '#FFF' : '#A0A4A3',
  fontWeight: '600',
  fontSize: '1rem',
  fontFamily: 'monospace',
}));

export const StyledListItemButton = styled(ListItemButton)(({ isactive }) => ({
  background: isactive ? '#1FC28B' : '',
  borderRadius: '12px',
  '&:hover': {
    background: isactive ? '#1FC28B' : '', // Provide fallback for hover when inactive
  },
}));

// layout

export const StyledLayoutBox = styled(Box)(({ isMobileScreen }) => ({
  display: 'flex',
  height: '100vh',
  margin: isMobileScreen ? '0rem' : '1rem',
}));

export const StyledDrawer = styled(Drawer)(({ drawerwidth }) => ({
  width: drawerwidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerwidth,
    boxSizing: 'border-box',
    border: 'none',
  },
}));

export const StyledMainBox = styled(Box)(({ drawerwidth, isMobileScreen }) => ({
  flexGrow: 1,
  width: `calc(100% - ${drawerwidth}px)`,
  background: '#F2F8F8',
  borderRadius: isMobileScreen ? '0px' : '40px',
  padding: '1.5rem',
}));

export const StyledChildrenBox = styled(Box)(() => ({
  margin: '3rem 0rem',
}));

// cards

export const StyledCard = styled(Box)(() => ({
  padding: '20px',
  background: '#FFF',
  borderRadius: '18px',
  outline: '2px solid #EBEFF0',
}));
