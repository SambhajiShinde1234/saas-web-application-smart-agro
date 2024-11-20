import { Grid2, Stack } from '@mui/material';
import { StyledCard, StyledCardStack } from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import { FARMS } from '../../../dummy-data/FarmData';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';

const WhetherTodays = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
          Today&apos;s Weather
        </DxSecondaryTypography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6 }}>
            <StyledCardStack>
              <Stack>
                <DxSecondaryTypography variant="">
                  {FARMS[0].todaysWhether.date}
                </DxSecondaryTypography>
                <DxPrimaryTypography variant="">
                  {FARMS[0].todaysWhether.day}
                </DxPrimaryTypography>
              </Stack>
              <Stack>
                <DxSecondaryTypography variant="">
                  Temparature
                </DxSecondaryTypography>
                <DxPrimaryTypography variant="">
                  {FARMS[0].todaysWhether.temparature.value} <sup>o</sup>
                  {FARMS[0].todaysWhether.temparature.unit}
                </DxPrimaryTypography>
              </Stack>
            </StyledCardStack>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <StyledCardStack>
              <Stack sx={{ gap: '.1rem' }}>
                <DxSecondaryTypography>Wind speed</DxSecondaryTypography>
                <DxPrimaryTypography variant="">
                  {FARMS[0].todaysWhether.windSpeed.value}{' '}
                  {FARMS[0].todaysWhether.windSpeed.unit}
                </DxPrimaryTypography>
              </Stack>
              <Stack sx={{ gap: '.1rem' }}>
                <DxSecondaryTypography>Humidity</DxSecondaryTypography>
                <DxPrimaryTypography variant="">
                  {FARMS[0].todaysWhether.humidity.value}{' '}
                  {FARMS[0].todaysWhether.humidity.unit}
                </DxPrimaryTypography>
              </Stack>
            </StyledCardStack>
          </Grid2>
        </Grid2>
      </StyledCardStack>
    </StyledCard>
  );
};

export default WhetherTodays;
