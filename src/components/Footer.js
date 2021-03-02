import React from 'react';
import './HeroSection.css';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <h1 style={{color: "white"}}>THIS IS STILL IN DEVELOPMENT, SO EXPEXT SOME BUGS</h1>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class="footer-link-items inline">
            <h2>Donate</h2>
            <Link><a href="https://trakteer.id/raphiel" style={{"text-decoration": "none"}} class="footer-url">Trakteer</a></Link>
            <Link><a href="/paypal.html" style={{"text-decoration": "none"}} class="footer-url">PayPal</a></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacts</h2>
            <Link><a href="https://discordapp.com/channels/@me/694446165197979670/" class="footer-url">Discord</a></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Raphiel
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>RAPHIEL © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
