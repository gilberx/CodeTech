import React from 'react';
import './AddLesson.css';

const AddLesson = () => {

const handleAddLesson = () => {

};

  return (
    <div>
      <div className="header-container3">
        {/* You can add content or components for the header here */}
      </div>
      <br></br>
      <div className='container3'>
        <div className='input-div3'><br></br>
          <p className="header-title3">Add Lesson</p>
          <input className='title3' placeholder='Title' type="text" />
          <textarea className='lesson' placeholder='Content' rows="10"></textarea>
          <button className='submitbtn2' onClick={handleAddLesson}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
