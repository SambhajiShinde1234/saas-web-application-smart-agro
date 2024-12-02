import { useNavigate } from 'react-router-dom';
import AddIcon from '../../components/icons/AddIcon';
import {
  StyledCard,
  StyledCardStack,
  StyledFlexBetween,
} from '../../components/styled/styled';
import DxButton from '../../components/ui/DxButton';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import DxTable from '../../components/ui/DxTable';
import { LABOR_MANAGEMENT } from '../../dummy-data/FarmData';

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

const ManageLabour = () => {
  const navigate = useNavigate();
  return (
    <StyledCardStack>
      <StyledFlexBetween>
        <DxPrimaryTypography variant="h6">Work Management</DxPrimaryTypography>
        <DxButton startIcon={<AddIcon />} onClick={() => navigate('/work/new')}>
          Add New Work
        </DxButton>
      </StyledFlexBetween>
      <StyledCard>
        <DxTable columns={tableColumns} data={LABOR_MANAGEMENT} />
      </StyledCard>
    </StyledCardStack>
  );
};

export default ManageLabour;
