import { StyledCard } from '../../../components/styled/styled';
import { Box, Stack } from '@mui/material';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import SingleBarChart from '../../../components/charts/SingleBarChart';
import { FARMS } from '../../../dummy-data/FarmData';

const YearlyYieldTrends = () => {
  return (
    <StyledCard>
      <Stack sx={{ gap: '1rem' }}>
        <DxSecondaryTypography variant="h6">
          Yearly Yield Production Trends
        </DxSecondaryTypography>
      </Stack>
      <Box sx={{ height: '300px' }}>
        <SingleBarChart
          graphData={FARMS[0].fields[0].yield}
          xAxisDataKey="year"
          barDataKey="production"
          barFillColor="#8884d8"
        />
      </Box>
    </StyledCard>
  );
};

export default YearlyYieldTrends;
