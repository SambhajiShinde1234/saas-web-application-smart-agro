import { StyledCard, StyledCardStack, StyledChartBox } from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';

const SoilMoistureHumidity = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
          Soil, Moisture & Humidity Comparison
        </DxSecondaryTypography>
        <StyledChartBox>
          {/* <DoubleBarChart
          graphData={FARMS[0].fields[0].pesticideFertilizerUsage}
          xAxisDataKey="month"
          barLeftDataKey="pesticide"
          barRightDataKey="fertilizer"
          barLeftFillColor="#8884d8"
          barRightFillColor="#82ca9d"
        /> */}
        </StyledChartBox>
      </StyledCardStack>
    </StyledCard>
  );
};

export default SoilMoistureHumidity;
