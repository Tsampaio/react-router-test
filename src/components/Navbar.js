import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <h1>Telmo Sampaio</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>{ props.auth ? (<Link to="/dashboard">Dashboard</Link>) : (<Link to="/login">Login</Link>)}</li>
                <li><a href="#">Cart <span>0</span></a></li>
            </ul>
        </nav>
    )
}

export default Navbar
