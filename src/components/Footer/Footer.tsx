import React from 'react';
import { Link } from 'react-router-dom';
import { TbSmartHome } from "react-icons/tb";
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <Link className='button-home' to={'/home'}><TbSmartHome /></Link>
            </div>
        </footer>
    );
}

export default Footer;