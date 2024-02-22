import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
      <div className="home-screen">
          <div className="apps-inner">
              <Link className='app app-calculator' to={'/apps/calculator'}></Link>
          </div>
      </div>
  );
}

export default Home;