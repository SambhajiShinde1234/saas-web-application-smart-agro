/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material';
import EditIcon from '../icons/EditIcon';

const DxTableAction = ({ onEdit }) => {
  return (
    <IconButton onClick={onEdit} aria-label="edit">
      <EditIcon />
    </IconButton>
  );
};

export default DxTableAction;
