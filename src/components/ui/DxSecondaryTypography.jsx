import { StyledSecondaryTypography } from '../styled/styled';

// eslint-disable-next-line react/prop-types
const DxSecondaryTypography = ({ children, variant, sx, ...props }) => {
  return (
    <StyledSecondaryTypography variant={variant} sx={sx} {...props}>
      {children}
    </StyledSecondaryTypography>
  );
};

export default DxSecondaryTypography;
