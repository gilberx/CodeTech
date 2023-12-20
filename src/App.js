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
import Courses from './Courses/Courses.jsx'
import Courses2 from './Courses/BeginnerCourse.jsx'
import Courses3 from './Courses/IntermediateCourse.jsx'
import IntroductionToC from './Courses/IntroductionToC.jsx'
import IntroductionToCSharp from './Courses/IntroductionToCSharp.jsx'
import IntroductionToCplusplus from './Courses/IntroductionToCplusplus.jsx'
import Lesson1 from './Courses/Modules/C_Module/Module_1/Lesson1/Lesson1.jsx'
import Lesson1_page2 from './Courses/Modules/C_Module/Module_1/Lesson1/Lesson1_page2.jsx'
import Lesson1_page3 from './Courses/Modules/C_Module/Module_1/Lesson1/Lesson1_page3.jsx'
import Lesson2 from './Courses/Modules/C_Module/Module_1/Lesson2/Lesson2.jsx'

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
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/Courses=BeginnerPage" element={<Courses2/>}/>
          <Route path="/Courses=IntermediatePage" element={<Courses3/>}/>
          <Route path="/Courses=IntroductionToC" element={<IntroductionToC/>}/>
          <Route path="/Courses=IntroductionToCSharp" element={<IntroductionToCSharp/>}/>
          <Route path="/Courses=IntroductionToCplusplus" element={<IntroductionToCplusplus/>}/>
          <Route path="/Module1=Lesson1_page1" element={<Lesson1/>}/>
          <Route path="/Module1=Lesson1_page2" element={<Lesson1_page2/>}/>
          <Route path="/Module1=Lesson1_page3" element={<Lesson1_page3/>}/>
          <Route path="/Module1=Lesson2_page1" element={<Lesson2/>}/>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
