import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import JoinClass from './JoinClass'
import HelpCenter from './HelpCenter'
import AboutUs from './AboutUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />        
        <Route path="/joinClass" element={<JoinClass/>} />
        <Route path="/helpCenter" element={<HelpCenter />} />
        <Route path="/aboutUs" element={<AboutUs />} />  

      </Routes>
    </Router>
    
  );
}

export default App;
