import LandingPage from './LandingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register/Register.js';
import Login from './Login/Login.js';
import ForgotPassword from './Login/ForgotPassword.js'
import Courses from './Courses/Courses.jsx'
import Courses2 from './Courses/BeginnerCourse.jsx'
import Courses3 from './Courses/IntermediateCourse.jsx'
import IntroductionToC from './Courses/IntroductionToC.jsx'
import IntroductionToCSharp from './Courses/IntroductionToCSharp.jsx'
import IntroductionToCplusplus from './Courses/IntroductionToCplusplus.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Courses=BeginnerPage" element={<Courses2/>}/>
        <Route path="/Courses=IntermediatePage" element={<Courses3/>}/>
        <Route path="/Courses=IntroductionToC" element={<IntroductionToC/>}/>
        <Route path="/Courses=IntroductionToCSharp" element={<IntroductionToCSharp/>}/>
        <Route path="/Courses=IntroductionToCplusplus" element={<IntroductionToCplusplus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
