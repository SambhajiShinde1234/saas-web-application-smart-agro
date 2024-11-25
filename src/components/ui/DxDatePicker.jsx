/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  StyledFormControl,
  StyledFormHelperText,
  TextFieldsWrapper,
  StyledLabel,
  StyledTextField,
  StyledDatePicker,
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
              <StyledDatePicker
                {...props}
                format="DD/MM/YYYY"
                renderInput={(params) => (
                  <StyledTextField
                    {...field}
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
