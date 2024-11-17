import { Box, Stack } from '@mui/material';
import { StyledCard } from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import { FARMS } from '../../../dummy-data/FarmData';
import DoubleBarChart from '../../../components/charts/DoubleBarChart';

const FertilizerPesticidesCompare = () => {
  return (
    <StyledCard>
      <Stack sx={{ gap: '1rem' }}>
        <DxSecondaryTypography variant="h6">
          Fertilizer & Pesticide Usage{' '}
        </DxSecondaryTypography>
      </Stack>
      <Box sx={{ height: '300px' }}>
        <DoubleBarChart
          graphData={FARMS[0].fields[0].pesticideFertilizerUsage}
          xAxisDataKey="month"
          barLeftDataKey="pesticide"
          barRightDataKey="fertilizer"
          barLeftFillColor="#8884d8"
          barRightFillColor="#82ca9d"
        />
      </Box>
    </StyledCard>
  );
};

export default FertilizerPesticidesCompare;
