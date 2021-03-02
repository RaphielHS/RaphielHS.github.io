import React from 'react';
import '../Cards.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div>
    <div className='cards'>
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
            />
            <CardItem
              src='/assets/python.jpg'
              text='Uruha Rushia (Discord Python)'
              label='Discord Bot'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='/assets/python.jpg'
              text='AkanekoPy project'
              label='API'
              path="/akaneko"
            />
            <CardItem
              src="/assets/python.jpg"
              text="Snowy project"
              label="Discord Bot"
              path="javascript.alert('test')"
            />
            <CardItem
              src="/assets/html5.jpg"
              text="Blog Project"
              label="Website / Blog"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Cards;
