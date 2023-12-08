import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register/Register.js';
import Login from './Login/Login.js';
import ForgotPassword from './Login/ForgotPassword.js';
import ResetPassword from './Login/ResetPassword.js';
import LandingPage from './LandingPage.jsx';
import { UserProvider } from './Register/UserContext'; // Import the UserProvider
import Dashboard from './Admin/Dashboard.jsx';
import '@fortawesome/fontawesome-free/css/all.css';
import Educator from './Admin/Educator.jsx';
import JoinClass from './JoinClass'
import JoinCreate from './JoinCreate';
import AddQuiz from './AddQuiz';
import Class from './Class'
import AddLesson from './AddLesson'


function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/getcode" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/educator" element={<Educator />} />
          <Route path="/joinClass" element={<JoinClass/>} />
          <Route path="/JoinCreate" element={<JoinCreate />} />
          <Route path="/Class" element={<Class />} />
          <Route path="/AddQuiz" element={<AddQuiz />} />
          <Route path="/AddLesson" element={<AddLesson />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
