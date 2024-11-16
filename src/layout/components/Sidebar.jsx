import { List, ListItem, ListItemText } from '@mui/material';
import DashboardIcon from '../../components/icons/DashboardIcon';
import OverviewIcon from '../../components/icons/OverviewIcon';
import {
  StyledListeitemText,
  StyledLogo,
  StyledLogoBox,
  StyledLogoPro,
  StyledListItemButton,
  StyledListeitemIcon,
} from '../../components/styled/styled';
import { useLocation, useNavigate } from 'react-router-dom';

const MENUS = [
  {
    id: 1,
    title: 'Overview',
    icon: <DashboardIcon />,
    href: '/overview',
  },
  {
    id: 2,
    title: 'Dashboard',
    icon: <OverviewIcon />,
    href: '/dashboard',
  },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleDrawerToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <StyledLogoBox>
        <StyledLogo>
          SMART
          <StyledLogoPro>AGRO</StyledLogoPro>
        </StyledLogo>
      </StyledLogoBox>
      <List>
        {MENUS.map((menu, index) => (
          <ListItem key={index}>
            <StyledListItemButton
              onClick={() => {
                navigate(menu.href);
                handleDrawerToggle();
              }}
              isactive={menu.href === location.pathname}
            >
              <StyledListeitemIcon isactive={menu.href === location.pathname}>
                {menu.icon}
              </StyledListeitemIcon>
              <ListItemText
                primary={
                  <StyledListeitemText
                    isactive={menu.href === location.pathname}
                  >
                    {menu.title}
                  </StyledListeitemText>
                }
              />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
