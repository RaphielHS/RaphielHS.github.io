import React from 'react';
import './Cards.css';
// import CardItem from './CardItem';

function Cards() {
  return (
    <div id="aboutme">
      <div className='cards'>
        <h1>About me</h1>
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
            <p>
              Hello, My Nickname is Raphiel, im 13, my bday is in 23/02, i'm from Indonesia.
            </p>
            <p>
              I learn to code Python, JavaScript, CSS, HTML at age 12, i learn Java and C# in the age of 13
            </p>
            <p>
              I like to watch anime and to code, basically, i'm addicted to code.
            </p>
            <br></br>
            <p>Q. What language do you hate?</p>
            <p>A. I hate Java because its hard.</p>
            <br></br>
            <p>Q. What Language do you love?</p>
            <p>A. i love Python, JavaScript, and C#, well, beacause they're easy to understand.</p>
            <br></br>
            <p>Q. How did you learn to code?</p>
            <p>A. I learnt to code with the method : Code, Research, Understand.</p>
            <br></br>
            <p>Q. What Language do you know? Like, Real Life Languages</p>
            <p>A. I Know a little bit of Japanese, i know Indonesia and English</p>
            <br></br>
            <p>Q. What IRL Language Do You Hate The Most?</p>
            <p>A. I hate <a style={{"text-decoration": "none"}} href="https://en.wikipedia.org/wiki/Javanese_language">Javanese</a>, even though im a Javanese people, i can't understand any conversation using language Javanese.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
