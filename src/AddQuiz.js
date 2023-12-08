import React from 'react';
import './AddQuiz.css';

const AddQuiz = () => {

const handleAddQuiz = () => {

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
          <input className='title' placeholder='Title' type="text" />
          <textarea className='question' placeholder='Question' rows="10"></textarea>
          <input className='optA' placeholder='Option A' type="text" />
          <input className='optB' placeholder='Option B' type="text" />
          <input className='optC' placeholder='Option C' type="text" />
          <input className='optD' placeholder='Option D' type="text" />
          <p className='answer'>Answer of the above Question</p>
          <input className='correctAns' placeholder='' type="text" />
          <br></br>
          <button className='submitbtn' onClick={handleAddQuiz}>Submit Question</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
