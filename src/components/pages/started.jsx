import React from 'react';
import '../../App.css';
import './404.scss';
import './blog/blog.css';
import '../HeroSection.css';
import '../../App.css';
import '../Button.css';

function Started() {
    return (
        <div class="blog-container" id="start">
            <div style={{display: "inline"}} class="container">
                <h1 style={{xs: 'none', md: 'block', color: "white", "font-size": 50}}>Where it all started... And Why?</h1>
                <br></br>
                <p style={{"font-size": 20, color: "white"}}>
                    Well, It all started when i was 12 years old, The journey is still long, but i didnt gave up.
                    <br/>I was addicted to coding at that time. I used the languange Python to start the Journey, then 
                    <br/>JavaScript, and C#, and in the mid 2020, i took a break from coding for around 
                    <br/>2 Month, then i came back refreshed than before, i restarted a lot of my project 
                    <br/>that has low quality code and i recoded it, it was much faster, i never taught that 
                    <br/>Self-Learnt Programming can be like this, then i took 1 step further and buy a book 
                    <br/>Covering the basics.
                    <br/>
                    <br/>I bought JavaScript, Unity 2D For Android, Python for Big Data, and the Basic of Python book. 
                    <br/>Then i got faster at coding than usually, i belive it's because of the book and the lack of <p style={{"font-size": 25}}>Motivation</p> And that's how i got here.
                    <br/><br/>
                    Why?
                    <br/>Because i now considers Programming as a Side Job and a Hobby.
                </p>
                <br/>
                <a class="btns btn--outline btn--large no_style wide blog-button" style={{padding: 5, margin: "30px", "text-align": "center", display: "inline-block"}} href="/#blog">Go Back</a>
            </div>
        </div>
    );
}
export default Started;