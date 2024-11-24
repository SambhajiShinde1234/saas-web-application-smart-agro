import { useForm } from 'react-hook-form';
import { StyledCardStack } from '../../../components/styled/styled';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import DxSelectField from '../../../components/ui/DxSelectField';
import { Grid2 } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const inventoryValidationSchema = yup.object({
  category: yup.string().required('Inventory category is required'),
});

const NewInventory = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inventoryValidationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h6">New Inventory</DxPrimaryTypography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ md: 6 }}>
            <DxSelectField
              name="category"
              label="Select category"
              control={control}
              options={[
                { value: 1, label: 'Seeds' },
                { value: 2, label: 'Tools' },
                { value: 3, label: 'Pesticides' },
                { value: 3, label: 'Fertilizers' },
              ]}
              placeholder="Select a category"
              errorMessage={errors.category?.message}
            />
          </Grid2>
        </Grid2>
        <button type="submit">Submit</button>
      </form>
    </StyledCardStack>
  );
};

export default NewInventory;
