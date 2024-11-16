import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '../../components/icons/DashboardIcon';
import OverviewIcon from '../../components/icons/OverviewIcon';

const MENUS = [
  {
    id: 1,
    title: 'Overview',
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    title: 'Dashboard',
    icon: <OverviewIcon />,
  },
];
const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          height: '3.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>
            
        </span>
      </Box>
      <List>
        {MENUS.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
