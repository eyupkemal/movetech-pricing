import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import QuoteWizard from './pages/QuoteWizard';
import ModuleCatalog from './pages/ModuleCatalog';
import CompetitorComparison from './pages/CompetitorComparison';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wizard/*" element={<QuoteWizard />} />
          <Route path="/catalog" element={<ModuleCatalog />} />
          <Route path="/comparison" element={<CompetitorComparison />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
