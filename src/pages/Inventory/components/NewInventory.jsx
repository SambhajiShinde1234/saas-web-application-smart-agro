import { useForm } from 'react-hook-form';
import { StyledCardStack } from '../../../components/styled/styled';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import DxSelectField from '../../../components/ui/DxSelectField';
import { Grid2 } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { INVENTORY_CATEGORIES } from '../../../constants/app-constant';

const inventoryFormValidationSchema = yup.object({
  inventoryCategory: yup.string().required('Inventory category is required'),
});

const NewInventory = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inventoryFormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h6">New Inventory</DxPrimaryTypography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ md: 4 }}>
            <DxSelectField
              name="inventoryCategory"
              label="Select category"
              control={control}
              options={INVENTORY_CATEGORIES}
              placeholder="Select a category"
              errorMessage={errors.inventoryCategory?.message}
            />
          </Grid2>
        </Grid2>
        <button type="submit">Submit</button>
      </form>
    </StyledCardStack>
  );
};

export default NewInventory;
