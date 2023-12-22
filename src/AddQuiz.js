import React, { useState, useContext } from 'react';
import axios from 'axios';
import './AddQuiz.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import UserContext from './Register/UserContext';


const AddQuiz = () => {
  const { user, setUser } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctAns, setCorrectAns] = useState('');

  const [titleError, setTitleError] = useState('');
  const [questionError, setQuestionError] = useState('');
  const [optAError, setOptAError] = useState('');
  const [optBError, setOptBError] = useState('');
  const [optCError, setOptCError] = useState('');
  const [optDError, setOptDError] = useState('');
  const [correctAnsError, setCorrectAnsError] = useState('');

  const handleAddQuiz = async (event) => {
    event.preventDefault();

    // Validate required fields
    if (!title || !question || !optA || !optB || !optC || !optD || !correctAns) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/quiz/addQuestion", {
        title: title,
        question: question,
        optionA: optA,
        optionB: optB,
        optionC: optC,
        optionD: optD,
        correctAnswer: correctAns,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert("Quiz question added successfully");
      setTitle("");
      setQuestion("");
      setOptA("");
      setOptB("");
      setOptC("");
      setOptD("");
      setCorrectAns("");

      console.log('Quiz question added successfully:', response.data);
    } catch (error) {
      console.error('Error adding quiz question:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };
  if (!user) {
    return (
        <main className='a-notadmin-main'>
        <div className='a-notadmin-container'>
            <form className='a-notadmin-form'>
                <h1 style={{fontSize:'35px',textAlign:'center'}}>You are not logged in!</h1>
                <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                    <span className="small-text">Log in to access your personalized profile and unlock exclusive features!</span>
                </div>
                <Link to="/login" className='link-btn'>
                    <button className="btn">Go to login</button>
                </Link>
            </form>
        </div>
    </main>
    );
  }
  if (user.role==='learner') {
    return (
        <main className='a-notadmin-main'>
        <div className='a-notadmin-container'>
            <form className='a-notadmin-form'>
                <h1 style={{fontSize:'35px',textAlign:'center'}}>Off Access!</h1>
                <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                    <span className="small-text">This page is for admin-only access. You don't have the necessary privileges to view this content.</span>
                </div>
                <Link to="/" className='link-btn'>
                    <button className="btn">Go back</button>
                </Link>
            </form>
        </div>
    </main>
    );
  }
  return (
    <div>
      <Navbar/>
      <div className="header-container2">
      </div>
      <br></br>
      <div className='container2'>
        <div className='input-div2'><br></br><br></br>
          <p className="header-title2">Add Quiz</p>
          <input
            className='title'
            placeholder='Title'
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setTitleError('');
            }}
            required
          />
          {titleError && <p className="error-message">{titleError}</p>}

          <textarea
            className='question'
            placeholder='Question'
            rows="10"
            value={question}
            onChange={(event) => {
              setQuestion(event.target.value);
              setQuestionError('');
            }}
            required
          ></textarea>
          {questionError && <p className="error-message">{questionError}</p>}

          <input
            className='optA'
            placeholder='Option A'
            type="text"
            value={optA}
            onChange={(event) => {
              setOptA(event.target.value);
              setOptAError('');
            }}
            required
          />
          {optAError && <p className="error-message">{optAError}</p>}

          <input
            className='optB'
            placeholder='Option B'
            type="text"
            value={optB}
            onChange={(event) => {
              setOptB(event.target.value);
              setOptBError('');
            }}
            required
          />
          {optBError && <p className="error-message">{optBError}</p>}

          <input
            className='optC'
            placeholder='Option C'
            type="text"
            value={optC}
            onChange={(event) => {
              setOptC(event.target.value);
              setOptCError('');
            }}
            required
          />
          {optCError && <p className="error-message">{optCError}</p>}

          <input
            className='optD'
            placeholder='Option D'
            type="text"
            value={optD}
            onChange={(event) => {
              setOptD(event.target.value);
              setOptDError('');
            }}
            required
          />
          {optDError && <p className="error-message">{optDError}</p>}

          <p className='answer'>Answer of the above Question</p>
          <input
            className='correctAns'
            placeholder=''
            type="text"
            value={correctAns}
            onChange={(event) => {
              setCorrectAns(event.target.value);
              setCorrectAnsError('');
            }}
            required
          />
          {correctAnsError && <p className="error-message">{correctAnsError}</p>}

          <br></br>
          <button className='submitbtn' onClick={handleAddQuiz}>Submit Question</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
