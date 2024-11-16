import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './pages/overview/Overview';
import Layout from './layout/layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          exact
          path="/overview"
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
