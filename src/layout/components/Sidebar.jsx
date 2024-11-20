import { Box, List, ListItem, ListItemText } from '@mui/material';
import DashboardIcon from '../../components/icons/DashboardIcon';
import OverviewIcon from '../../components/icons/OverviewIcon';
import SettingIcon from '../../components/icons/SettingIcon';
import LogoutIcon from '../../components/icons/LogoutIcon';
import {
  StyledListeitemText,
  StyledLogo,
  StyledLogoBox,
  StyledLogoPro,
  StyledListItemButton,
  StyledListeitemIcon,
  StyledTopListBox,
  StyledListsStack,
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

const EXTRA_MENUS = [
  {
    id: 1,
    title: 'Settings',
    icon: <SettingIcon />,
    href: '/settings',
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
      <StyledListsStack>
        <StyledTopListBox>
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
                  <StyledListeitemIcon
                    isactive={menu.href === location.pathname}
                  >
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
        </StyledTopListBox>
        <Box>
          <List>
            {EXTRA_MENUS.map((menu) => (
              <ListItem key={menu.id}>
                <StyledListItemButton
                  onClick={() => {
                    navigate(menu.href);
                    handleDrawerToggle();
                  }}
                  isactive={menu.href === location.pathname}
                >
                  <StyledListeitemIcon
                    isactive={menu.href === location.pathname}
                  >
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
                    isactive={menu.href === location.pathname}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <StyledListItemButton>
                <StyledListeitemIcon>
                  <LogoutIcon />
                </StyledListeitemIcon>
                <ListItemText
                  primary={<StyledListeitemText>Logout</StyledListeitemText>}
                />
              </StyledListItemButton>
            </ListItem>
          </List>
        </Box>
      </StyledListsStack>
    </>
  );
};

export default Sidebar;
