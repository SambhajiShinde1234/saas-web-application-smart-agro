// import React from 'react';
// import { Controller } from 'react-hook-form';
// import { Radio, RadioGroup, FormControlLabel, FormControl, InputAdornment } from '@mui/material';
// import {
//   StyledFormControl,
//   StyledFormHelperText,
//   TextFieldsWrapper,
//   StyledLabel,
//   StyledFormControlLabel,
// } from './Styled';

// const DxRadioButton = ({
//   name,
//   label,
//   control,
//   options = [],
//   row = true, // Display as row or column
//   startIcon,
//   endIcon,
//   errorMessage,
//   ...props
// }) => (
//   <Controller
//     name={name}
//     control={control}
//     render={({ field }) => (
//       <TextFieldsWrapper>
//         <StyledLabel htmlFor={name}>{label}</StyledLabel>
//         <StyledFormControl error={!!errorMessage}>
//           <RadioGroup
//             {...field}
//             row={row}
//             value={field.value || ''} // Ensure value is controlled
//           >
//             {options.map((option) => (
//               <StyledFormControlLabel
//                 key={option.value}
//                 value={option.value}
//                 control={
//                   <Radio
//                     {...props}
//                     icon={startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>}
//                     checkedIcon={endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>}
//                   />
//                 }
//                 label={option.label}
//               />
//             ))}
//           </RadioGroup>
//           {errorMessage && <StyledFormHelperText>{errorMessage}</StyledFormHelperText>}
//         </StyledFormControl>
//       </TextFieldsWrapper>
//     )}
//   />
// );

// export default DxRadioButton;
