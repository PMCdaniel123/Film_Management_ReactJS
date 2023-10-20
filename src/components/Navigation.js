import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';

export default function Navigation() {

    const { theme, toggle, dark } = useContext(ThemeContext)

    return (
        <div className='container-fluid nav-container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="row nav-row">
                <div className="col-sm" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <span>Hot Films 2023</span>
                </div>
                <div className="col-sm">
                    <Navbar
                        id="mobile-nav"
                        menuIcon={<p style={{ color: theme.color }}>Menu</p>}
                        style={{ backgroundColor: theme.backgroundColor, color: theme.color, display: 'flex', justifyContent: 'center', boxShadow: 'none' }}>

                        <ul>
                            <li><Link to='/' style={{ color: theme.color }}>
                                Home</Link>
                            </li>
                            <li to='/about'><Link to='/about' style={{ color: theme.color }}>
                                About</Link>
                            </li>
                            <li href='/contact'><Link to='/contact' style={{ color: theme.color }}>
                                Contact</Link>
                            </li>
                        </ul>

                    </Navbar></div>
                <div className="col-sm">
                    <a href="/#" className="switch-mode" onClick={toggle} style={{ backgroundColor: theme.backgroundColor, color: theme.color, outline: 'none', textDecoration: 'none' }} data-testid="toggle-theme-btn">
                        Change to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </div>

        </div >
    );
}