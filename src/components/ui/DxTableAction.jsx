import EditIcon from '../icons/EditIcon';
import DxIconButton from '../ui/DxIconButton';
import PropTypes from 'prop-types';

const DxTableAction = ({ onEdit }) => {
  return (
    <DxIconButton onClick={onEdit} aria-label="edit">
      <EditIcon />
    </DxIconButton>
  );
};

DxTableAction.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default DxTableAction;
