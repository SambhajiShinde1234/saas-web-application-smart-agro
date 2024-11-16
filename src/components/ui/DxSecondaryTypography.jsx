import { StyledSecondaryTypography } from '../styled/styled';

// eslint-disable-next-line react/prop-types
const DxSecondaryTypography = ({ children, variant }) => {
  return (
    <StyledSecondaryTypography variant={variant}>
      {children}
    </StyledSecondaryTypography>
  );
};

export default DxSecondaryTypography;
