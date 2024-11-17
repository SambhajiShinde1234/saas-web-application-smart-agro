import { Box, Stack } from '@mui/material';
import { StyledCard } from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FARMS } from '../../../dummy-data/FarmData';

const FertilizerPesticidesCompare = () => {
  return (
    <StyledCard>
      <Stack sx={{ gap: '1rem' }}>
        <DxSecondaryTypography variant="h6">
          Fertilizer & Pesticide Usage{' '}
        </DxSecondaryTypography>
      </Stack>
      <Box sx={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={FARMS[0].fields[0].pesticideFertilizerUsage}
            barSize={25}
            margin={{
              top: 20,
              right: -20,
              left: -30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend iconType="circle" />
            <Bar
              dataKey="pesticide"
              stackId="a"
              yAxisId="left"
              fill="#8884d8"
              radius={[50, 50, 0, 0]}
            />
            <Bar
              dataKey="fertilizer"
              stackId="a"
              yAxisId="right"
              fill="#82ca9d"
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </StyledCard>
  );
};

export default FertilizerPesticidesCompare;
