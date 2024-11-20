import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './pages/overview/Overview';
import Layout from './layout/layout';
import Settings from './pages/settings/Settings';
import Support from './pages/support/Support';

const ROUTES = [
  {
    id: 1,
    path: '/',
    component: <Dashboard />,
  },
  {
    id: 1,
    path: '/dashboard',
    component: <Dashboard />,
  },
  {
    id: 1,
    path: '/overview',
    component: <Overview />,
  },
  {
    id: 1,
    path: '/settings',
    component: <Settings />,
  },
  {
    id: 1,
    path: '/support',
    component: <Support />,
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
