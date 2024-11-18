import { StyledCard, StyledChartBox } from '../../../components/styled/styled';
import { Stack } from '@mui/material';
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
        <StyledChartBox>
          <SingleBarChart
            graphData={FARMS[0].fields[0].yield}
            xAxisDataKey="year"
            barDataKey="production"
            barFillColor="#4C8C52"
          />
        </StyledChartBox>
      </Stack>
    </StyledCard>
  );
};

export default YearlyYieldTrends;
