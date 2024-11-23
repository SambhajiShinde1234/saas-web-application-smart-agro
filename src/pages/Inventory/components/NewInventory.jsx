import { StyledCardStack } from '../../../components/styled/styled';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import DxSelectField from '../../../components/ui/DxSelectField';
const NewInventory = () => {
  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h6">New Inventory</DxPrimaryTypography>

      <DxSelectField
        name="energyResources"
        label="Energy Resources"
        // control={control}
        options={[
          { value: 1, label: 'Solar' },
          { value: 2, label: 'Wind' },
          { value: 3, label: 'Hydro' },
        ]}
        placeholder="Select a resource"
        // type="multiple" // Enable multiple selection
        // errorMessage={errors.energyResources?.message}
      />
    </StyledCardStack>
  );
};

export default NewInventory;
