import React from 'react';
import { Link } from 'react-router-dom';
import './styles/menu.scss';

function Menu() {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Sign in</Link></li>
            <li><Link to='/'>Contact</Link></li>
            <li><Link to='/'>About</Link></li>
        </ul>
    )
}

export default Menu;