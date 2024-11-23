import { StyledPrimaryTypography } from '../styled/styled';

// eslint-disable-next-line react/prop-types
const DxPrimaryTypography = ({ children, variant, sx, ...props }) => {
  return (
    <StyledPrimaryTypography variant={variant} sx={sx} {...props}>
      {children}
    </StyledPrimaryTypography>
  );
};

export default DxPrimaryTypography;
