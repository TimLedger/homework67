import React from 'react';
import { Link } from 'react-router-dom';
import './Block.css';

const Block: React.FC = () => {
    return (
        <div className="block">
          <Link className='btn-screen' to={'/password'}></Link>
        </div>
    );
}

export default Block;