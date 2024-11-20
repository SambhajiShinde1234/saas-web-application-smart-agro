import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';
import DxIconButton from '../../components/ui/DxIconButton';
import NotificationIcon from '../../components/icons/NotificationIcon';
import DxSearchField from '../../components/ui/DxSearchField';
import {
  StyledCardStack,
  StyledFlexBetween,
  StyledFlexCenter,
  StyledIconBox,
} from '../../components/styled/styled';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import DxSecondaryTypography from '../../components/ui/DxSecondaryTypography';
import HumbergureMenu from '../../components/icons/HumbergureMenu';
import { useLocation } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <Stack gap={0.5}>
      <DxPrimaryTypography variant="h5">Hellow, Jeremy! 👋</DxPrimaryTypography>
      <DxSecondaryTypography variant="">
        Welcome back to Smart Agro !
      </DxSecondaryTypography>
    </Stack>
  );
};

const NotificationSection = () => {
  return (
    <StyledIconBox>
      <DxIconButton>
        <NotificationIcon />
      </DxIconButton>
    </StyledIconBox>
  );
};

const SearchSection = () => {
  return (
    <Box>
      <DxSearchField />
    </Box>
  );
};

// eslint-disable-next-line react/prop-types
const Header = ({ handleDrawerToggle }) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <StyledFlexBetween>
        {isMobileScreen && (
          <StyledCardStack sx={{ width: '100%' }}>
            <StyledFlexBetween>
              <IconButton
                edge="start"
                onClick={() => handleDrawerToggle()}
                aria-label="menu"
              >
                <HumbergureMenu />
              </IconButton>
              <SearchSection />
              <NotificationSection />
            </StyledFlexBetween>
            {location.pathname === '/dashboard' && (
              <Box sx={{ marginTop: '1rem' }}>
                <WelcomeSection />
              </Box>
            )}
          </StyledCardStack>
        )}
        {!isMobileScreen && (
          <>
            <WelcomeSection />
            <StyledFlexCenter>
              <SearchSection />
              <NotificationSection />
            </StyledFlexCenter>
          </>
        )}
      </StyledFlexBetween>
    </>
  );
};

export default Header;
