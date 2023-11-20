import './App.css';
import ForgotPassword from './Login/ForgotPassword';
import Login from './Login/Login'
import ResetPassword from './Login/ResetPassword';
import Register from './Register/Register'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
    
  );
}

export default App;
