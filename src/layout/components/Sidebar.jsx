import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '../../components/icons/DashboardIcon';
import OverviewIcon from '../../components/icons/OverviewIcon';
import {
  StyledListeitemText,
  StyledLogo,
} from '../../components/styled/styled';

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
      <StyledLogo>
        <span></span>
      </StyledLogo>
      <List>
        {MENUS.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <StyledListeitemText>{menu.title}</StyledListeitemText>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
