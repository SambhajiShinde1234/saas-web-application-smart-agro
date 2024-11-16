import { Grid2, Stack } from '@mui/material';
import { StyledCard } from '../../components/styled/styled';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import DxSecondaryTypography from '../../components/ui/DxSecondaryTypography';
import { FARMS } from '../../dummy-data/FarmData';
import WindSpeedIcon from '../../components/icons/WindSpeedIcon';
import HumidityIcon from '../../components/icons/HumidityIcon';
import TemparatureIcon from '../../components/icons/TemparatureIcon';

const Dashboard = () => {
  return (
    <Stack sx={{ gap: '1rem' }}>
      <DxPrimaryTypography variant="h4">Dashboard</DxPrimaryTypography>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
          <StyledCard>
            <Stack sx={{ gap: '1rem' }}>
              <DxSecondaryTypography variant="">
                Whether&apos;s today
              </DxSecondaryTypography>
              <Grid2 container spacing={1}>
                <Grid2 size={{ xs: 6 }}>
                  <Stack sx={{ gap: '1rem' }}>
                    <Stack>
                      <DxPrimaryTypography variant="h6">
                        {FARMS[0].todaysWhether.day}
                      </DxPrimaryTypography>
                      <DxSecondaryTypography variant="">
                        ({FARMS[0].todaysWhether.date})
                      </DxSecondaryTypography>
                    </Stack>
                    <Stack>
                      <DxPrimaryTypography variant="h4">
                        {FARMS[0].todaysWhether.temparature.value} <sup>o</sup>
                        {FARMS[0].todaysWhether.temparature.unit}
                      </DxPrimaryTypography>
                    </Stack>
                  </Stack>
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <Stack sx={{ gap: '1rem' }}>
                    <DxSecondaryTypography variant="">
                      <Stack sx={{ flexDirection: 'row', gap: '1rem' }}>
                        <WindSpeedIcon />
                        <DxPrimaryTypography variant="">
                          {FARMS[0].todaysWhether.windSpeed.value}{' '}
                          {FARMS[0].todaysWhether.windSpeed.unit}
                        </DxPrimaryTypography>
                      </Stack>
                    </DxSecondaryTypography>
                    <DxSecondaryTypography variant="">
                      <Stack sx={{ flexDirection: 'row', gap: '1rem' }}>
                        <HumidityIcon />
                        <DxPrimaryTypography variant="">
                          {FARMS[0].todaysWhether.humidity.value}{' '}
                          {FARMS[0].todaysWhether.humidity.unit}
                        </DxPrimaryTypography>
                      </Stack>
                    </DxSecondaryTypography>
                    <DxSecondaryTypography>
                      <Stack sx={{ flexDirection: 'row', gap: '1rem' }}>
                        <TemparatureIcon />
                        <DxPrimaryTypography variant="">
                          {FARMS[0].todaysWhether.temparature.value}{' '}
                          <sup>o</sup>
                          {FARMS[0].todaysWhether.temparature.unit}
                        </DxPrimaryTypography>
                      </Stack>
                    </DxSecondaryTypography>
                  </Stack>
                </Grid2>
              </Grid2>
            </Stack>
          </StyledCard>
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default Dashboard;
