/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material';

const DxIconButton = ({ children, sx, ...props }) => {
  return (
    <IconButton sx={sx} {...props}>
      {children}
    </IconButton>
  );
};

export default DxIconButton;
