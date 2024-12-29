import { Modal } from '@mui/material';
import PropTypes from 'prop-types';

const DxModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>Modal Content</div>
    </Modal>
  );
};

DxModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DxModal;
