/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import {
  StyledFormControl,
  StyledFormHelperText,
  TextFieldsWrapper,
  StyledLabel,
} from '../styled/styled';

const DxDatePicker = ({
  name,
  label,
  control,
  errorMessage,
  required,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextFieldsWrapper>
          <StyledLabel htmlFor={name}>
            {label} {required && <span>*</span>}
          </StyledLabel>
          <StyledFormControl error={!!errorMessage}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...field}
                {...props}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errorMessage}
                    helperText={errorMessage}
                    variant="outlined"
                  />
                )}
              />
            </LocalizationProvider>
            {errorMessage && (
              <StyledFormHelperText>{errorMessage}</StyledFormHelperText>
            )}
          </StyledFormControl>
        </TextFieldsWrapper>
      )}
    />
  );
};

export default DxDatePicker;
