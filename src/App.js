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
import Achievements from './Achievements.js';
import Progress from './Progress.js';
import Settings from './Settings.js';
import Goals from './Goals.js';
import CreateGoals from './CreateGoals.js';
import ViewGoals from './ViewGoals.js';
import EditGoals from './EditGoals.js';
import UserProfile from './UserProfile.js';



function App() {
  return (
    <UserProvider>
    <Router>
      
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

              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/creategoals/:group" element={<CreateGoals />} />
              <Route path="/viewgoals/:group" element={<ViewGoals />} />
              <Route path="/editgoals/:sid" element={<EditGoals />} />
          </Routes>
      
    </Router>
    </UserProvider>
  );
}

export default App;
