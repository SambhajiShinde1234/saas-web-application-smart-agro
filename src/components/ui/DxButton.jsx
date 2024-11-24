/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import { StyledButton } from '../styled/styled';

const DxButton = ({
  children,
  startIcon,
  variant = 'primary',
  type = 'button',
  sx,
  ...props
}) => {
  return (
    <StyledButton
      startIcon={startIcon}
      sx={sx}
      {...props}
      type={type}
      variant={variant}
    >
      <Typography noWrap variant="">
        {children}
      </Typography>
    </StyledButton>
  );
};

export default DxButton;
