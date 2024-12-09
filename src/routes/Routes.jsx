import DashboardIcon from '../components/icons/DashboardIcon';
import HelpIcon from '../components/icons/HelpIcon';
import InventoryICon from '../components/icons/InventoryIcon';
import LabourIcon from '../components/icons/LabourIcon';
import OverviewIcon from '../components/icons/OverviewIcon';
import SettingIcon from '../components/icons/SettingIcon';
import Dashboard from '../pages/dashboard/Dashboard';
import NewInventory from '../pages/Inventory/components/NewInventory';
import Inventory from '../pages/Inventory/Inventory';
import NewWork from '../pages/manage-labour/components/NewWork';
import ManageLabour from '../pages/manage-labour/ManageLabour';
import Overview from '../pages/overview/Overview';
import Settings from '../pages/settings/Settings';
import Support from '../pages/help-center/HelpCenter';

export const APP_ROUTES = [
  {
    id: 1,
    path: '/',
    component: <Dashboard />,
  },
  {
    id: 2,
    path: '/dashboard',
    component: <Dashboard />,
  },
  {
    id: 3,
    path: '/overview',
    component: <Overview />,
  },
  {
    id: 4,
    path: '/settings',
    component: <Settings />,
  },
  {
    id: 5,
    path: '/help-center',
    component: <Support />,
  },
  {
    id: 6,
    path: '/manage-inventory',
    component: <Inventory />,
  },
  {
    id: 6,
    path: '/inventory/new',
    component: <NewInventory />,
  },
  {
    id: 17,
    path: '/manage-labour',
    component: <ManageLabour />,
  },
  {
    id: 18,
    path: '/work/new',
    component: <NewWork />,
  },
];

export const MENUS = [
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
  {
    id: 3,
    title: 'Inventory',
    icon: <InventoryICon />,
    href: '/manage-inventory',
  },
  {
    id: 4,
    title: 'Manage Work',
    icon: <LabourIcon />,
    href: '/manage-labour',
  },
];

export const EXTRA_MENUS = [
  {
    id: 1,
    title: 'Settings',
    icon: <SettingIcon />,
    href: '/settings',
  },
  {
    id: 2,
    title: 'Help Center',
    icon: <HelpIcon />,
    href: '/help-center',
  },
];
