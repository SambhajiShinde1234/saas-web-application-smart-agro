import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import DxIconButton from '../../components/ui/DxIconButton';
import NotificationIcon from '../../components/icons/NotificationIcon';
import DxSearchField from '../../components/ui/DxSearchField';
import {
  StyledCardStack,
  StyledFlexBetween,
  StyledFlexCenter,
  StyledIconBox,
} from '../../components/styled/styled';
import HumbergureMenu from '../../components/icons/HumbergureMenu';
import { useNavigate } from 'react-router-dom';
import LeftArrowIcon from '../../components/icons/LeftArrowIcon';

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
  const theme = useTheme();
  const navigate = useNavigate();
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
              <StyledIconBox>
                <DxIconButton onClick={() => navigate(-1)}>
                  <LeftArrowIcon />
                </DxIconButton>
              </StyledIconBox>
              <SearchSection />
              <NotificationSection />
            </StyledFlexBetween>
          </StyledCardStack>
        )}
        {!isMobileScreen && (
          <>
            <StyledFlexCenter>
              <StyledIconBox>
                <DxIconButton onClick={() => navigate(-1)}>
                  <LeftArrowIcon />
                </DxIconButton>
              </StyledIconBox>
            </StyledFlexCenter>
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
