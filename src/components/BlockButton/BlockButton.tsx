import React from 'react';
import { Link } from 'react-router-dom';
import './BlockButton.css';

const BlockButton: React.FC = () => {
    return (
        <div className="btn-position">
            <Link className='button-block' to={'/'}></Link>
        </div>
    );
}

export default BlockButton;