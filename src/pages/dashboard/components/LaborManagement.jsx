import { StyledCard, StyledCardStack } from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import { LABOR_MANAGEMENT } from '../../../dummy-data/FarmData';
import DxTable from '../../../components/ui/DxTable';

const tableColumns = [
  { columnName: 'Task', field: 'task', align: 'center', width: 100 },
  { columnName: 'Date', field: 'date', align: 'center', width: 150 },
  { columnName: 'Workers', field: 'workers', align: 'center', width: 150 },
  { columnName: 'Cost ($)', field: 'cost', align: 'center', width: 120 },
  { columnName: 'Duration', field: 'duration', align: 'center', width: 120 },
  { columnName: 'Output', field: 'output', align: 'center', width: 120 },
  {
    columnName: 'Efficiency',
    field: 'efficiency',
    align: 'center',
    width: 150,
  },
];

const LaborManagement = () => {
  return (
    <StyledCard>
      <StyledCardStack>
        <DxSecondaryTypography variant="h6">
          Labor Management
        </DxSecondaryTypography>
      </StyledCardStack>
      <DxTable columns={tableColumns} data={LABOR_MANAGEMENT} />
    </StyledCard>
  );
};

export default LaborManagement;
