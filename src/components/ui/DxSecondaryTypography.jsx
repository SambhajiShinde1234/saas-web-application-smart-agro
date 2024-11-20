import { StyledSecondaryTypography } from '../styled/styled';

// eslint-disable-next-line react/prop-types
const DxSecondaryTypography = ({ children, variant, sx }) => {
  return (
    <StyledSecondaryTypography variant={variant} {...sx}>
      {children}
    </StyledSecondaryTypography>
  );
};

export default DxSecondaryTypography;
