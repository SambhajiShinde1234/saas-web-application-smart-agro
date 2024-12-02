import { useForm } from 'react-hook-form';
import {
  StyledCard,
  StyledCardStack,
  StyledFlexCenter,
} from '../../../components/styled/styled';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import { Grid2 } from '@mui/material';
import DxTextField from '../../../components/ui/DxTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DxDatePicker from '../../../components/ui/DxDatePicker';
import DxButton from '../../../components/ui/DxButton';

const taskValidationSchema = yup.object({
  work: yup.string().trim().required('Work name is required'),
  date: yup.string().required('Date is required'),
  totalWorkers: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .positive('This value must be positive')
    .required('Total workers are required'),
  totalCost: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .positive()
    .required('Total worker cost is required'),
  totalDuration: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .positive()
    .required('Total work hours is required'),
  output: yup.string().trim(),
  effieciency: yup.string().trim(),
});

const NewWork = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskValidationSchema),
    defaultValues: {
      task: '',
    },
  });

  const onSubmit = () => {};

  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h6">New Work</DxPrimaryTypography>

      <StyledCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledCardStack>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                <DxTextField
                  required
                  label="Work Name"
                  name="work"
                  placeholder="Enter work name (e.g. harvesting)"
                  control={control}
                  errorMessage={errors.work?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                <DxDatePicker
                  required
                  label="Date"
                  name="date"
                  control={control}
                  errorMessage={errors.date?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                <DxTextField
                  required
                  label="Total Workers"
                  type="number"
                  name="noOfWorkers"
                  placeholder="Enter total workers"
                  control={control}
                  errorMessage={errors.totalWorkers?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                <DxTextField
                  required
                  label="Total Worker Cost ($)"
                  type="number"
                  name="totalCost"
                  placeholder="Enter total worker cost"
                  control={control}
                  errorMessage={errors.totalCost?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                <DxTextField
                  required
                  label="Total Duration (hours)"
                  type="number"
                  name="totalDuration"
                  placeholder="Enter total duration (e.g. 8 hours)"
                  control={control}
                  errorMessage={errors.totalDuration?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                <DxTextField
                  label="Output"
                  name="output"
                  placeholder="Enter output (e.g. 10 tonnes)"
                  control={control}
                  errorMessage={errors.output?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                <DxTextField
                  label="Efficiency"
                  name="effieciency"
                  placeholder="Enter efficiency (e.g. 10 tonnes/worker-hours)"
                  control={control}
                  errorMessage={errors.effieciency?.message}
                />
              </Grid2>
            </Grid2>
            <StyledFlexCenter>
              <DxButton
                variant="secondary"
                onClick={() => reset()}
                sx={{ width: '120px' }}
              >
                Reset
              </DxButton>
              <DxButton type="sumbit" sx={{ width: '120px' }}>
                Submit
              </DxButton>
            </StyledFlexCenter>
          </StyledCardStack>
        </form>
      </StyledCard>
    </StyledCardStack>
  );
};

export default NewWork;
