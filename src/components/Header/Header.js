import React from 'react';
import './Header.css';
import icon from '../../images/icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="food-icon">
                <Link to={'/'}><img src={icon} alt="" /></Link>
            </div>
            <div className="nav-link">
                <Link to={'/'}>Home</Link>
                <Link to={'/category'}>Category</Link>
                <Link to={'/about'}>About us</Link>
            </div>
        </div>
    );
};

export default Header;