import {
  StyledCard,
  StyledCardStack,
  StyledChartBox,
} from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import SingleBarChart from '../../../components/charts/SingleBarChart';
import { FARMS } from '../../../dummy-data/FarmData';

const YearlyYieldTrends = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
          Yearly Yield Production Trends
        </DxSecondaryTypography>
        <StyledChartBox>
          <SingleBarChart
            graphData={FARMS[0].fields[0].yield}
            xAxisDataKey="year"
            barDataKey="production"
            barFillColor="#4C8C52"
            barActiveColor="#3A6A3F"
          />
        </StyledChartBox>
      </StyledCardStack>
    </StyledCard>
  );
};

export default YearlyYieldTrends;
