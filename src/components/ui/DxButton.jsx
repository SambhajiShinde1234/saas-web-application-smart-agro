/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import { StyledButton } from '../styled/styled';

const DxButton = ({ children, startIcon }) => {
  return (
    <StyledButton startIcon={startIcon}>
      <Typography>{children}</Typography>
    </StyledButton>
  );
};

export default DxButton;
