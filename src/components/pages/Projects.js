import React from 'react';
import '../Cards.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '../../App.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards' data-aos="fade-up" data-aos-duration="900" data-aos-delay="200" data-aos-once="true">
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
          <CardItem
                src='/assets/pixiv.jpg'
                text='Pixiv Scraper Written in Python'
                label='Scraper'
                path='/projects'
              />
              <CardItem
                src='/assets/python.jpg'
                text='Uruha Rushia (Discord Python)'
                label='Discord Bot'
                path='/projects'
              />
              <CardItem
                src='/assets/python.jpg'
                text='AkanekoPy project'
                label='API'
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
