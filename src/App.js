import LandingPage from './LandingPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
