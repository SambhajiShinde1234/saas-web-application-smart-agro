import DoubleLineChart from '../../../components/charts/DoubleLineChart';
import {
  StyledCard,
  StyledCardStack,
  StyledChartBox,
} from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import { FARMS } from '../../../dummy-data/FarmData';

const TempratureHumidity = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
         Temprature & Humidity Readings
        </DxSecondaryTypography>
        <StyledChartBox>
          <DoubleLineChart
            graphData={FARMS[0].fields[0].tempratureHumidityReadings}
            xAxisDataKey="day"
            lineFirstDataKey="temparature"
            lineSecondDataKey="humidity"
            lineFirstFillColor="#EFCD46"
            lineSecondFillColor="#7FA1F8"
          />
        </StyledChartBox>
      </StyledCardStack>
    </StyledCard>
  );
};

export default TempratureHumidity;
