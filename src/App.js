import LandingPage from './LandingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register/Register.js';
import Login from './Login/Login.js';
import ForgotPassword from './Login/ForgotPassword.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
