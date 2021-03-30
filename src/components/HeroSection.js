import React from 'react';
import '../App.css';
import { Parallax, Background  } from 'react-parallax';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
        <div className='hero-container'>
          {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
          <h1 class="a">About Raphiel</h1>
          <p>What Are You Waiting For?</p>
          <div className='hero-btns'>
              <a class="btns btn--outline btn--large no_style" href="#aboutme">LEARN MORE</a>
          </div>
        </div>
    </div>
  );
}

export default HeroSection;
