/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import {
  StyledFormControl,
  StyledFormHelperText,
  TextFieldsWrapper,
  StyledLabel,
  StyledTextField,
  StyledRequiredMark,
} from '../styled/styled';

const DxTextField = ({
  name,
  label,
  control,
  placeholder = '',
  startIcon,
  endIcon,
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
            {label} {required && <StyledRequiredMark>*</StyledRequiredMark>}
          </StyledLabel>
          <StyledFormControl error={!!errorMessage}>
            <StyledTextField
              {...field}
              id={name}
              placeholder={placeholder}
              InputProps={{
                startAdornment: startIcon && (
                  <InputAdornment position="start">{startIcon}</InputAdornment>
                ),
                endAdornment: endIcon && (
                  <InputAdornment position="end">{endIcon}</InputAdornment>
                ),
              }}
              error={!!errorMessage}
              {...props}
            />
            {errorMessage && (
              <StyledFormHelperText>{errorMessage}</StyledFormHelperText>
            )}
          </StyledFormControl>
        </TextFieldsWrapper>
      )}
    />
  );
};

export default DxTextField;
