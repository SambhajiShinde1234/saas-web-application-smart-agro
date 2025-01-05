import { StyledCard, StyledCardStack } from '../../../components/styled/styled';
import DxSecondaryTypography from '../../../components/ui/DxSecondaryTypography';
import { LABOR_MANAGEMENT } from '../../../dummy-data/FarmData';
import DxTable from '../../../components/ui/DxTable';

const tableColumns = [
  { columnName: 'Task', field: 'task', align: 'left', width: 150 },
  { columnName: 'Date', field: 'date', align: 'left', width: 150 },
  { columnName: 'Workers', field: 'workers', align: 'center', width: 150 },
  { columnName: 'Cost ($)', field: 'cost', align: 'center', width: 150 },
  { columnName: 'Duration', field: 'duration', align: 'left', width: 150 },
  { columnName: 'Output', field: 'output', align: 'left', width: 150 },
  {
    columnName: 'Efficiency',
    field: 'efficiency',
    align: 'left',
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
        <DxTable columns={tableColumns} data={LABOR_MANAGEMENT} />
      </StyledCardStack>
    </StyledCard>
  );
};

export default LaborManagement;
