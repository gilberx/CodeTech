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
import Courses from './Courses/Courses.jsx'
import Courses2 from './Courses/BeginnerCourse.jsx'
import Courses3 from './Courses/IntermediateCourse.jsx'
import IntroductionToC from './Courses/IntroductionToC.jsx'
import IntroductionToCSharp from './Courses/IntroductionToCSharp.jsx'
import IntroductionToCplusplus from './Courses/IntroductionToCplusplus.jsx'
import AboutUs  from './AboutUs'


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
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Courses=BeginnerPage" element={<Courses2/>}/>
          <Route path="/Courses=IntermediatePage" element={<Courses3/>}/>
          <Route path="/Courses=IntroductionToC" element={<IntroductionToC/>}/>
          <Route path="/Courses=IntroductionToCSharp" element={<IntroductionToCSharp/>}/>
          <Route path="/Courses=IntroductionToCplusplus" element={<IntroductionToCplusplus/>}/>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
