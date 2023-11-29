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
          <p className="header-title">Add Questions</p>
          <input className='title' placeholder='Title' type="text" />
          <textarea className='content' rows="10"></textarea>
          <button className='submit' onClick={handleAddQuiz}>Submit Questions</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
