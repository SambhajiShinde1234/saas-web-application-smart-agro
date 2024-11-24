import { useForm } from 'react-hook-form';
import { Grid2 } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { INVENTORY_CATEGORIES } from '../../../constants/app-constant';
import { StyledCard, StyledCardStack } from '../../../components/styled/styled';
import DxTextField from '../../../components/ui/DxTextField';
import DxDatePicker from '../../../components/ui/DxDatePicker';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import DxSelectField from '../../../components/ui/DxSelectField';

const inventoryFormValidationSchema = yup.object({
  inventoryCategory: yup.string().required('Inventory category is required'),
  name: yup.string().trim().required('Product name is required'),
  availableQuantity: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .positive('Available quantity must be a positive number')
    .required('Available quantity is required'),
  batchNumber: yup.string().trim().required('Batch number is required'),
  expiryDate: yup.string().required('Expiry date is required'),
});

const NewInventory = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inventoryFormValidationSchema),
    defaultValues: {
      inventoryCategory: '',
      name: '',
      availableQuantity: '',
      batchNumber: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h6">New Inventory</DxPrimaryTypography>
      <StyledCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <DxSelectField
                required
                name="inventoryCategory"
                label="Select category"
                control={control}
                options={INVENTORY_CATEGORIES}
                placeholder="Select a category"
                errorMessage={errors.inventoryCategory?.message}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <DxTextField
                required
                name="name"
                label="Product Name"
                control={control}
                placeholder="Enter product name (eg. chilli seeds, phosphate)"
                errorMessage={errors.name?.message}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <DxTextField
                required
                type="number"
                name="availableQuantity"
                label="Available Quantity (Bags)"
                control={control}
                placeholder="Enter available quantity"
                errorMessage={errors.availableQuantity?.message}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <DxTextField
                required
                name="batchNumber"
                label="Batch Number"
                control={control}
                placeholder="Enter batch number (eg. S-24512)"
                errorMessage={errors.batchNumber?.message}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <DxDatePicker
                required
                name="expiryDate"
                label="Select expiry date"
                control={control}
                placeholder="Select expiry date"
                errorMessage={errors.expiryDate?.message}
              />
            </Grid2>
          </Grid2>
          <button type="submit">Submit</button>
        </form>
      </StyledCard>
    </StyledCardStack>
  );
};

export default NewInventory;
