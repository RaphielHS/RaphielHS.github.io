import React from 'react';
import './HeroSection.css';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <h1 style={{color: "white"}}>THIS IS STILL IN DEVELOPMENT, SO EXPEXT SOME BUGS</h1>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}
          <div class="footer-link-items inline">
            <h2>Donate</h2>
            <Link><a href="https://trakteer.id/raphiel" style={{"text-decoration": "none"}} class="footer-url">Trakteer</a></Link>
            <Link><a href="/paypal.html" style={{"text-decoration": "none"}} class="footer-url">PayPal</a></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacts</h2>
            {/* <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link> */}
            <Link><a href="https://discordapp.com/channels/@me/694446165197979670/" class="footer-url">Discord</a></Link>
            {/* <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          {/* <div class='footer-link-items'> */}
            {/* <h2>Social Media</h2>
            <Link to="">Discord</Link> */}
            {/* <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          {/* </div> */}
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
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
