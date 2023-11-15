<<<<<<< HEAD

import './App.css';
import LandingPage from './LandingPage.jsx'

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
    </div>
=======
import './App.css';
import Login from './Login'
import Register from './Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
    
>>>>>>> main
  );
}

export default App;
