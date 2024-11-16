import { Box, Stack } from '@mui/material';
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

const Header = () => {
  return (
    <StyledFlexBetween>
      <Stack gap={0.5}>
        <DxPrimaryTypography variant="h5">
          Hellow, Jeremy! 👋
        </DxPrimaryTypography>
        <DxSecondaryTypography variant="">
          Welcome back to podium
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
    </StyledFlexBetween>
  );
};

export default Header;
