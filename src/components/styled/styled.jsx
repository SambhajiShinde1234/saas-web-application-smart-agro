import {
  styled,
  Box,
  Stack,
  Typography,
  Drawer,
  ListItemButton,
  ListItemIcon,
  TableContainer,
  Tabs,
  Tab,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

// ui

// form
export const TextFieldsWrapper = styled(Stack)(() => ({
  gap: '5px',
  marginBottom: '0.7rem'
}));

export const StyledFormControl = styled(FormControl)(() => ({
  minWidth: '250px',
}));

export const StyledFormHelperText = styled(FormHelperText)(() => ({
  color: '#ff1744',
  fontWeight: 500,
  margin: 0,
}));

export const StyledLabel = styled(InputLabel)(() => ({
  fontSize: '1rem',
  color: '#000',
  fontWeight: 500,
}));

export const StyledSelect = styled(Select)(() => ({
  padding: '5px',
  borderRadius: '8px',
  '& .MuiSelect-select': {
    padding: '5px',
  },
}));

export const StyledTextField = styled(TextField)(() => ({
  borderRadius: '8px',
  '& .MuiInputBase-input': {
    padding: '10px',
  },
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
}));

export const StyledDatePicker = styled(DatePicker)(() => ({
  borderRadius: '8px',
  '& .MuiInputBase-input': {
    padding: '10px',
  },
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
}));

// button
export const StyledButton = styled(Button)(({ theme, variant }) => ({
  textTransform: 'none',
  padding: '10px 20px',
  border: '1px solid rgba(31, 194, 139, 1)',
  borderRadius: '50px',
  background: variant === 'secondary' ? '' : 'rgba(31, 194, 139, 1)',
  color: variant === 'secondary' ? '#000' : '#FFF',
  [theme.breakpoints.down('md')]: {
    padding: '8px 16px',
  },
}));

// tabs
export const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    height: 0,
  },
  '& .Mui-selected': {
    color: 'rgba(31, 194, 139, 1) !important',
    background: 'rgba(31, 194, 139, 0.13)',
    outline: '1px solid rgba(31, 194, 139, 1)',
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  outline: '1px solid rgba(31, 194, 139, 0.5)',
  margin: '5px',
  borderRadius: '50px',
  fontSize: '.8rem',
  textTransform: 'none',
  minHeight: '40px',
  [theme.breakpoints.down('md')]: {
    margin: '2px',
  },
}));

// table
export const StyledTableContainer = styled(TableContainer)(() => ({
  overflowX: 'auto',
  maxWidth: '375px',
  minWidth: '100%',
}));

// charts
export const StyledChartBox = styled(Box)(() => ({
  height: '300px',
}));

// icons
export const StyledIconBox = styled(Box)(() => ({
  background: '#FFF',
  borderRadius: '50px',
  padding: '0.2rem',
  outline: '2px solid #EBEFF0',
}));

// flex
export const StyledFlexCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
}));

export const StyledFlexBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
}));

// typography
export const StyledPrimaryTypography = styled(Typography)(() => ({
  color: '#292A3B',
  fontWeight: '700',
}));

export const StyledSecondaryTypography = styled(Typography)(() => ({
  color: '#A0A4A3',
  fontWeight: '500',
}));

// sidebar
export const StyledLogoBox = styled(Box)(({ theme }) => ({
  margin: '2rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    margin: '2rem 0 1rem 0',
  },
}));

export const StyledLogo = styled('span')(() => ({
  fontSize: '2rem',
  fontWeight: '900',
}));

export const StyledLogoPro = styled(StyledLogo)(() => ({
  color: '#1FC28B',
}));

export const StyledListeitemIcon = styled(ListItemIcon)(({ isactive }) => ({
  color: isactive ? '#FFF' : '#A0A4A3',
}));

export const StyledListeitemText = styled(Typography)(({ isactive }) => ({
  color: isactive ? '#FFF' : '#A0A4A3',
  fontWeight: '600',
  fontSize: '1rem',
  textWrap: 'noWrap',
}));

export const StyledListItemButton = styled(ListItemButton)(({ isactive }) => ({
  background: isactive ? '#1FC28B' : '',
  borderRadius: '12px',
  '&:hover': {
    background: isactive ? '#1FC28B' : '', // Provide fallback for hover when inactive
  },
}));

export const StyledListsStack = styled(Stack)(() => ({
  justifyContent: 'space-between',
  height: '100%',
  overflowY: 'hidden',
}));

export const StyledTopListBox = styled(Box)(() => ({
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '0px', // Width of the scrollbar
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'green', // Color of the scrollbar thumb
    borderRadius: '10px', // Rounded corners for the thumb
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'transparent', // Darker color when hovered
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent', // Background of the scrollbar track
  },
  scrollbarWidth: 'thin', // For Firefox
  scrollbarColor: 'red', // Thumb and track color for Firefox
}));

// layout
export const StyledLayoutBox = styled(Box)(({ isMobileScreen }) => ({
  display: 'flex',
  minHeight: '100vh',
  margin: isMobileScreen ? '0rem' : '1rem',
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: '220px',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: '240px',
    boxSizing: 'border-box',
    border: 'none',
    [theme.breakpoints.down('md')]: {
      width: '280px',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '280px',
  },
}));

export const StyledMainBox = styled(Box)(
  ({ drawerwidth, isMobileScreen, theme }) => ({
    flexGrow: 1,
    width: `calc(100% - ${drawerwidth}px)`,
    background: '#F2F8F8',
    borderRadius: isMobileScreen ? '0px' : '40px',
    padding: '1.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '1rem',
    },
  })
);

export const StyledChildrenBox = styled(Box)(() => ({
  margin: '2rem 0 0 0 ',
}));

// cards
export const StyledCard = styled(Box)(() => ({
  padding: '20px',
  background: '#FFF',
  borderRadius: '18px',
  outline: '2px solid #EBEFF0',
}));

export const StyledCardStack = styled(Stack)(() => ({
  gap: '1em',
}));
