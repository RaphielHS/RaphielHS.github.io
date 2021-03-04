import React, { useState, useEffect } from 'react';
import './Navbar.css';
import About from './pages/about';
import './pages/404.scss';

function Navbar() {
  // const [click, setClick] = useState(false);
  const [/*button*/, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

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
                <a href="/#blog" class="link">blog</a>
                <a href="/about" class="link">About</a>
            </div>
            <div class="menu_icon">
                <span class="icon"></span>
            </div>
        </div>
    </nav>
    </>
  );
}

export default Navbar;
