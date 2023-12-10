import React, { useState } from 'react';
import axios from 'axios';
import './AddQuiz.css';

const AddQuiz = () => {
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

  return (
    <div>
      <div className="header-container2">
        {/* You can add content or components for the header here */}
      </div>
      <br></br>
      <div className='container2'>
        <div className='input-div2'><br></br>
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
