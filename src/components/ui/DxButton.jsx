/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import { StyledButton } from '../styled/styled';

const DxButton = ({ children, startIcon, sx, ...props }) => {
  return (
    <StyledButton startIcon={startIcon} sx={sx} {...props}>
      <Typography noWrap variant=''>{children}</Typography>
    </StyledButton>
  );
};

export default DxButton;
