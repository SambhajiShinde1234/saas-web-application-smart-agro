import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';
import DxIconButton from '../../components/ui/DxIconButton';
import NotificationIcon from '../../components/icons/NotificationIcon';
import DxSearchField from '../../components/ui/DxSearchField';
import {
  StyledFlexBetween,
  StyledFlexCenter,
  StyledIconBox,
} from '../../components/styled/styled';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import DxSecondaryTypography from '../../components/ui/DxSecondaryTypography';
import HumbergureMenu from '../../components/icons/HumbergureMenu';

// eslint-disable-next-line react/prop-types
const Header = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledFlexBetween>
      {isMobileScreen && (
        <>
          <IconButton
            edge="start"
            onClick={() => handleDrawerToggle()}
            aria-label="menu"
          >
            <HumbergureMenu />
          </IconButton>
          <Box>
            <DxSearchField />
          </Box>
          <StyledIconBox>
            <DxIconButton>
              <NotificationIcon />
            </DxIconButton>
          </StyledIconBox>
        </>
      )}
      {!isMobileScreen && (
        <>
          <Stack gap={0.5}>
            <DxPrimaryTypography variant="h5">
              Hellow, Jeremy! 👋
            </DxPrimaryTypography>
            <DxSecondaryTypography variant="">
              Welcome back to farm podium
            </DxSecondaryTypography>
          </Stack>
          <StyledFlexCenter>
            <Box>
              <DxSearchField />
            </Box>
            <StyledIconBox>
              <DxIconButton>
                <NotificationIcon />
              </DxIconButton>
            </StyledIconBox>
          </StyledFlexCenter>
        </>
      )}
    </StyledFlexBetween>
  );
};

export default Header;
