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
import HelpCenter from './Tickets/HelpCenter.js';
import Faq from './Tickets/Faq.js';
import SubmitTicket from './Tickets/SubmitTicket.js';
import Lesson from './Lesson.js';
import Quiz from './Quiz.js';


import Lesson1 from './Courses/Modules/C_Module/Module_1/Lesson1/Lesson1.jsx'
import Lesson1_page2 from './Courses/Modules/C_Module/Module_1/Lesson1/Lesson1_page2.jsx'
import Lesson1_page3 from './Courses/Modules/C_Module/Module_1/Lesson1/Lesson1_page3.jsx'
import Lesson2 from './Courses/Modules/C_Module/Module_1/Lesson2/Lesson2.jsx'

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
          <Route path="/class/:classcode" element={<Class />} />
          <Route path="/class/:classcode/addQuiz" element={<AddQuiz />} />
          <Route path="/class/:classcode/addLesson" element={<AddLesson />} />    
          <Route path="/AddQuiz/" element={<AddQuiz />} />
          <Route path="/AddLesson" element={<AddLesson />} />
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/class/:classcode/Quiz" element={<Quiz/>}/>
          <Route path="/class/:classcode/Lesson" element={<Lesson/>}/>
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

              <Route path="/helpcenter" element={<HelpCenter />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/submitticket" element={<SubmitTicket />} />
          
      
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/creategoals/:group" element={<CreateGoals />} />
          <Route path="/viewgoals/:group" element={<ViewGoals />} />
          <Route path="/editgoals/:sid" element={<EditGoals />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/creategoals/:group" element={<CreateGoals />} />
          <Route path="/viewgoals/:group" element={<ViewGoals />} />
          <Route path="/editgoals/:sid" element={<EditGoals />} />
          <Route path="/Module1=Lesson1_page1" element={<Lesson1/>}/>
          <Route path="/Module1=Lesson1_page2" element={<Lesson1_page2/>}/>
          <Route path="/Module1=Lesson1_page3" element={<Lesson1_page3/>}/>
          <Route path="/Module1=Lesson2_page1" element={<Lesson2/>}/>
        </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
