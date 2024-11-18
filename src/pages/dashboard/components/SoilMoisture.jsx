import SingleLineChart from '../../../components/charts/SingleLineChart';
import {
  StyledCard,
  StyledCardStack,
  StyledChartBox,
} from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import { FARMS } from '../../../dummy-data/FarmData';

const SoilMoisture = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
          Soil Moisture Levels
        </DxSecondaryTypography>
        <StyledChartBox>
          <SingleLineChart
            graphData={FARMS[0].fields[0].soilMoistureLevels}
            xAxisDataKey="day"
            lineDataKey="moisture"
            lineFillColor="#AA4FF5"
          />
        </StyledChartBox>
      </StyledCardStack>
    </StyledCard>
  );
};

export default SoilMoisture;
