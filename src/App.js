import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinClass from './JoinClass'
import JoinCreate from './JoinCreate';
import AddQuiz from './AddQuiz';
import Class from './Class'
import AddLesson from './AddLesson'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/joinClass" element={<JoinClass/>} />
        <Route path="/JoinCreate" element={<JoinCreate />} />
        <Route path="/Class" element={<Class />} />
        <Route path="/AddQuiz" element={<AddQuiz />} />
        <Route path="/AddLesson" element={<AddLesson />} />
      </Routes>
    </Router>
    
  );
}

export default App;
