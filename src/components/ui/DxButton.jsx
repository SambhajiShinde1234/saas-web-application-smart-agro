import { StyledButton } from "../styled/styled";

const DxButton = ({ children }) => {
  return (
    <StyledButton startIcon>
{children}
    </StyledButton>
  );
};

export default DxButton;
