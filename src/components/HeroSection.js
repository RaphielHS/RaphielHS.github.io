import React from 'react';
import '../App.css';
import { Parallax, Background  } from 'react-parallax';
import { Button } from './Button';
import './HeroSection.css';

function zoomIn(event) {
  var element = document.getElementById("overlay");
  element.style.display = "inline-block";
  var img = document.getElementById("imgZoom");
  var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  element.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";

}

function zoomOut() {
  var element = document.getElementById("overlay");
  element.style.display = "none";
}

function HeroSection() {
  return (
    <div>
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage='/images/img-home.jpg'
      strength={-200}
      >
        <div className='hero-container'>
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <h1 class="a">About Raphiel</h1>
          <p>What Are You Waiting For?</p>
          <div className='hero-btns'>
            {/* <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              target="#aboutme"
            > */}
              <a class="btns btn--outline btn--large no_style" href="#aboutme" onmousemove="zoomIn(event)">LEARN MORE</a>
            {/* </Button> */}
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default HeroSection;
