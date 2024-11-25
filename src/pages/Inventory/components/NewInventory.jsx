import { useForm } from 'react-hook-form';
import { Grid2 } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { INVENTORY_CATEGORIES } from '../../../constants/app-constant';
import {
  StyledCard,
  StyledCardStack,
  StyledFlexCenter,
} from '../../../components/styled/styled';
import DxTextField from '../../../components/ui/DxTextField';
import DxDatePicker from '../../../components/ui/DxDatePicker';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import DxSelectField from '../../../components/ui/DxSelectField';
import DxButton from '../../../components/ui/DxButton';

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
  supplierName: yup.string().trim().required('Supplier name is required'),
  threshold: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .required('Threshold quantity is required'),
  modelName: yup.string().trim().required('Model name is required'),
});

const NewInventory = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inventoryFormValidationSchema),
    defaultValues: {
      inventoryCategory: '',
      name: '',
      availableQuantity: '',
      batchNumber: '',
      expiryDate: '',
      supplierName: '',
      threshold: '',
      modelName: '',
      purchasedDate: '',
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
          <StyledCardStack>
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
            </Grid2>
            <Grid2 container spacing={2}>
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
                  label="Expiry Date"
                  control={control}
                  placeholder="Select expiry date"
                  errorMessage={errors.expiryDate?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <DxTextField
                  required
                  name="supplierName"
                  label="Supplier Name"
                  control={control}
                  placeholder="Enter supplier name"
                  errorMessage={errors.supplierName?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <DxTextField
                  required
                  type="number"
                  name="threshold"
                  label="Threshold Quantity (Bags)"
                  control={control}
                  placeholder="Enter threshold quantity"
                  errorMessage={errors.threshold?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <DxTextField
                  required
                  name="modelName"
                  label="Model Name"
                  control={control}
                  placeholder="Enter model name"
                  errorMessage={errors.modelName?.message}
                />
              </Grid2>
            </Grid2>
            <StyledFlexCenter>
              <DxButton
                onClick={() => reset()}
                variant="secondary"
                sx={{ width: '120px' }}
              >
                Reset
              </DxButton>
              <DxButton type="submit" sx={{ width: '120px' }}>
                Add
              </DxButton>
            </StyledFlexCenter>
          </StyledCardStack>
        </form>
      </StyledCard>
    </StyledCardStack>
  );
};

export default NewInventory;
