import { Grid2, Stack } from '@mui/material';
import { StyledCard } from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import { FARMS } from '../../../dummy-data/FarmData';

const FarmOverview = () => {
  return (
    <StyledCard>
      <Stack sx={{ gap: '1rem' }}>
        <DxSecondaryTypography variant="h6">
          Farm Overview
        </DxSecondaryTypography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6 }}>
            <Stack sx={{ gap: '.1rem' }}>
              <DxSecondaryTypography>Name</DxSecondaryTypography>
              <DxPrimaryTypography variant="">
                {FARMS[0].name}
              </DxPrimaryTypography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Stack sx={{ gap: '.1rem' }}>
              <DxSecondaryTypography>Location</DxSecondaryTypography>
              <DxPrimaryTypography variant="">
                {FARMS[0].location}
              </DxPrimaryTypography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Stack sx={{ gap: '.1rem' }}>
              <DxSecondaryTypography>Manager</DxSecondaryTypography>
              <DxPrimaryTypography variant="">
                {FARMS[0].manager}
              </DxPrimaryTypography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Stack sx={{ gap: '.1rem' }}>
              <DxSecondaryTypography>Area</DxSecondaryTypography>
              <DxPrimaryTypography variant="">
                {FARMS[0].totalArea}
              </DxPrimaryTypography>
            </Stack>
          </Grid2>
        </Grid2>
      </Stack>
    </StyledCard>
  );
};

export default FarmOverview;
