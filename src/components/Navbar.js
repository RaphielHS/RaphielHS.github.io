import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Home from './pages/Home';
import './pages/404.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [/*button*/, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav>
        <div class="menu">
            <p class="website_name"><a style={{"text-decoration": "none"}} href="/" class="link">Raphiel</a></p>
            <div class="menu_links">
                <a href="/projects" class="link">projects</a>
                <a href="/" class="link">home</a>
            </div>
            <div class="menu_icon">
                <span class="icon"></span>
            </div>
        </div>
    </nav>
      {/* <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Raphiel
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          {/* </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        {/* </div> */}
      {/* </nav> */}
    </>
  );
}

export default Navbar;
