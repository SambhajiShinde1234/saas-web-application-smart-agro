import { StyledCard, StyledCardStack } from '../../../components/styled/styled';
import { Grid2, Stack } from '@mui/material';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import { FARMS } from '../../../dummy-data/FarmData';

const FinancialMetrics = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
          Financial Metrics
        </DxSecondaryTypography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6 }}>
            <Stack sx={{ gap: '.1rem' }}>
              <DxSecondaryTypography>Revenue</DxSecondaryTypography>
              <DxPrimaryTypography variant="">
                $ {FARMS[0].revenue}
              </DxPrimaryTypography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Stack sx={{ gap: '.1rem' }}>
              <DxSecondaryTypography>Expense</DxSecondaryTypography>
              <DxPrimaryTypography variant="">
                $ {FARMS[0].expenses}
              </DxPrimaryTypography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Stack sx={{ gap: '.1rem' }}>
              <DxSecondaryTypography>Net profit</DxSecondaryTypography>
              <DxPrimaryTypography variant="">
                $ {FARMS[0].netProfit}
              </DxPrimaryTypography>
            </Stack>
          </Grid2>
        </Grid2>
      </StyledCardStack>
    </StyledCard>
  );
};

export default FinancialMetrics;
