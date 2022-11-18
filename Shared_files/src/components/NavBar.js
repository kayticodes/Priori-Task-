import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav>
                <ul className='nav-links'>
                <Link className="App-link" to="/">Home</Link>
                <Link className="App-link" to="/about">About</Link>
                <Link className="App-link" to="/how">How It Works</Link>

                </ul>
            </nav>
        </div>
    );
}

export default NavBar 
