import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './pages/overview/Overview';
import Layout from './layout/layout';
import Settings from './pages/settings/Settings';
import Support from './pages/support/Support';
import Inventory from './pages/Inventory/Inventory';
import NewInventory from './pages/Inventory/components/NewInventory';
import ManageLabour from './pages/manage-labour/ManageLabour';

const ROUTES = [
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
    path: '/support',
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
];

const App = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map((item, index) => (
          <Route
            key={index}
            exact
            path={item.path}
            element={<Layout>{item.component}</Layout>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
