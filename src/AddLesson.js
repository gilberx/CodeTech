import React from 'react';
import './AddLesson.css';

const AddLesson = () => {

const handleAddLesson = () => {

};

  return (
    <div>
      <div className="header-container">
        {/* You can add content or components for the header here */}
      </div>
      <br></br><br></br><br></br><br></br>
      <div className='container'>
        <div className='input-div'>
          <p className="header-title">Add Lesson</p>
          <input className='title' placeholder='Title' type="text" />
          <textarea className='lesson' placeholder='Content' rows="10"></textarea>
          <button className='submit' onClick={handleAddLesson}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
