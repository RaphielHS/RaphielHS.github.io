import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Blog from './blog/blog';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function Home() {
  return (
    <>
    <ParallaxProvider>
      <Parallax>
        <HeroSection />
        <Cards />
        <Blog/>
        <Footer />
      </Parallax>
    </ParallaxProvider>
    </>
  );
}

export default Home;
