import {
  StyledCard,
  StyledCardStack,
  StyledChartBox,
} from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import { FARMS } from '../../../dummy-data/FarmData';
import DoubleBarChart from '../../../components/charts/DoubleBarChart';

const FertilizerPesticidesCompare = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
          Fertilizer & Pesticide Usage{' '}
        </DxSecondaryTypography>
        <StyledChartBox>
          <DoubleBarChart
            graphData={FARMS[0].fields[0].pesticideFertilizerUsage}
            xAxisDataKey="month"
            barLeftDataKey="pesticide"
            barRightDataKey="fertilizer"
            barLeftFillColor="#8884d8"
            barLeftActiveColor="#6053a8"
            barRightFillColor="#82ca9d"
            barRightActiveColor="#5a9c6f"
          />
        </StyledChartBox>
      </StyledCardStack>
    </StyledCard>
  );
};

export default FertilizerPesticidesCompare;
