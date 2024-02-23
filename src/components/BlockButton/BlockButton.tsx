import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import './BlockButton.css';

const BlockButton: React.FC = () => {
    const location = useLocation();
    return (
        <div className="btn-position">
            <Link className='button-block' to={location.pathname === '/' ? '/password' : '/'}></Link>
        </div>
    );
}

export default BlockButton;