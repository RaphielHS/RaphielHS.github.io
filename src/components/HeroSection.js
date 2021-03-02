import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>About Raphiel</h1>
      <p>What Are You Waiting For?</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          target="#aboutme"
        > */}
          <a class="btns btn--outline btn--large no_style" href="#aboutme">LEARN MORE</a>
        {/* </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
