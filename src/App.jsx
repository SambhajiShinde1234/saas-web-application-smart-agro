import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import { APP_ROUTES } from './routes/Routes';

const App = () => {
  return (
    <Router>
      <Routes>
        {APP_ROUTES.map((item, index) => (
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
