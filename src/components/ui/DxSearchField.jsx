import { Box, FormControl, Input, InputAdornment } from '@mui/material';
import SearchIcon from '../icons/SearchIcon';
const DxSearchField = () => {
  return (
    <Box
      sx={{
        padding: '0.5rem 1.5rem',
        background: '#FFF',
        borderRadius: '50px',
      }}
    >
      <FormControl variant="standard">
        <Input
          id="search-input"
          placeholder="Search..."
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default DxSearchField;
