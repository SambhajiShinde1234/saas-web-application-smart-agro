import { StyledPrimaryTypography } from '../styled/styled';

// eslint-disable-next-line react/prop-types
const DxPrimaryTypography = ({ children, variant }) => {
  return (
    <StyledPrimaryTypography variant={variant}>
      {children}
    </StyledPrimaryTypography>
  );
};

export default DxPrimaryTypography;
