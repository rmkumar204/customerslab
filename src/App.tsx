import React, { useState } from 'react';
import SaveSegmentPopup from './Components/SaveSegmentPopup';
import './App.css';

const App: React.FC = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState<boolean>(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  return (
    <div className='vh-100'>
      <header className='header text-white d-flex align-items-center my-auto'><h3 className='ms-3'>View Audience</h3></header>
      <button className="btn btn-primary mt-5 ms-5" onClick={toggleOffcanvas}>
        Save Segment
      </button>
      {isOffcanvasVisible && <SaveSegmentPopup onClose={toggleOffcanvas} />}
    </div>
  );
};

export default App;
