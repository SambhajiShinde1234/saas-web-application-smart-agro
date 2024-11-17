import { Grid2, Stack } from '@mui/material';
import WhetherTodays from './components/WhetherTodays';
import FarmOverview from './components/FarmOverview';
import FinancialMetrics from './components/FinancialMetrics';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import FertilizerPesticidesCompare from './components/FertilizerPesticidesCompare';
import YearlyYieldTrends from './components/YearlyYieldTrends';

const Dashboard = () => {
  return (
    <Stack sx={{ gap: '1rem' }}>
      <DxPrimaryTypography variant="h4">Dashboard</DxPrimaryTypography>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <WhetherTodays />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6,lg: 4 }}>
          <FinancialMetrics />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12,md: 12, lg: 4 }}>
          <FarmOverview />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <FertilizerPesticidesCompare />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <YearlyYieldTrends />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default Dashboard;
