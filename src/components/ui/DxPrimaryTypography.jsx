import { StyledPrimaryTypography } from '../styled/styled';

// eslint-disable-next-line react/prop-types
const DxPrimaryTypography = ({ children, variant, sx }) => {
  return (
    <StyledPrimaryTypography variant={variant} {...sx}>
      {children}
    </StyledPrimaryTypography>
  );
};

export default DxPrimaryTypography;
