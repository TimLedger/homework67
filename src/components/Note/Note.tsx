import React from 'react';
import './Note.css';

const Note: React.FC = () => {
  return (
    <div className="note">
        <span className='note-text'>password</span>
        <span className='note-text'>1408</span>
    </div>
  );
}

export default Note;