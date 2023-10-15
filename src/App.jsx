import React, { useState } from 'react';
import './App.css';

function App() {
  const [jobD, setJobD] = useState('');
  const [jobT, setJobT] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const handleToggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    setJobD(e.target.value);
    setDisplayedText(e.target.value)
  };

  const saveTheText = (e) => {
    e.preventDefault();
    setDisplayedText(jobD);
    setJobD('');
    setFormVisible(false);
  };

  const clearForm = () => {
    setDisplayedText('');
  };

  return (
    <div className="container">
      <a className="toggle-button" onClick={handleToggleForm}>
        {isFormVisible ? 'Job Description' : 'Job Description'}
      </a>
      {isFormVisible && (
        <form className="form">
          <input
            value={jobD}
            onChange={handleChange}
            placeholder="Enter job description"
          />
         
          <button className="clear-button" onClick={clearForm}>
            Clear
          </button>
          <button className="save-button" type="submit" onClick={saveTheText}>
            Save
          </button>
        </form>
        
      )}
       <p className="displayed-text">{displayedText}</p>
    </div>
  );
}

export default App;
