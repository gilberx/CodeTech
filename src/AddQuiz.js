import React from 'react';
import './AddQuiz.css';

const AddQuiz = () => {

const handleAddQuiz = () => {

};

  return (
    <div>
      <div className="header-container">
        {/* You can add content or components for the header here */}
      </div>
      <br></br><br></br><br></br><br></br>
      <div className='container'>
        <div className='input-div'>
          <p className="header-title">Add Quiz</p>
          <input className='title' placeholder='Title' type="text" />
          <textarea className='question' placeholder='Question' rows="10"></textarea>
          <input className='optA' placeholder='Option A' type="text" />
          <input className='optB' placeholder='Option B' type="text" />
          <input className='optC' placeholder='Option C' type="text" />
          <input className='optD' placeholder='Option D' type="text" />
          <p className='answer'>Answer of the above Question</p>
          <input className='correctAns' placeholder='' type="text" />
          <br></br>
          <button className='submit' onClick={handleAddQuiz}>Submit Question</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
