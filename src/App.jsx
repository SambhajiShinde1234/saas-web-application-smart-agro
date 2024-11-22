import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './pages/overview/Overview';
import Layout from './layout/layout';
import Settings from './pages/settings/Settings';
import Support from './pages/support/Support';
import Inventory from './pages/Inventory/Inventory';

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
    path: '/inventory',
    component: <Inventory />,
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
