import { Stack } from '@mui/material';
import { StyledCardStack } from '../../components/styled/styled';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import DxSecondaryTypography from '../../components/ui/DxSecondaryTypography';

const Overview = () => {
  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h6">Overview</DxPrimaryTypography>
      <Stack gap={0.5}>
        <DxPrimaryTypography variant="h5" sx={{ fontFamily: 'cursive' }}>
          Hello, Sambhaji ! 👋
        </DxPrimaryTypography>
        <DxSecondaryTypography variant="">
          Welcome back to Smart Agro
        </DxSecondaryTypography>
      </Stack>
    </StyledCardStack>
  );
};

export default Overview;
