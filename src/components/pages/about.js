import React from 'react';
import './404.scss';
import '../../App.css';
import '../HeroSection.css';
import './blog/blog.css';

function About() {
    return (
        <div class="blog-container">
            <div style={{display: "inline"}} class="container">
                <h1 style={{color: "white"}}>About</h1>
                <br/>
                <h2>
                    Websiite Coded In : <a style={{"text-decoration": "none"}} href="https://reactjs.org">React.JS (URL)</a>
                    <br/><br/>
                    Website Coder : Raphiel#4045 (Raphiel)
                    <br/><br/>
                    Programmer Age : 13
                    <br/><br/>
                    Github : <a style={{"text-decoration": "none"}} href="https://github.com/RaphielHS">RaphielHS (URL)</a>
                </h2>
                <a class="btns btn--outline btn--large no_style wide blog-button" style={{padding: 5, margin: "30px", "text-align": "center", display: "inline-block"}} href="/">Go Back</a>
            </div>
        </div>
    );
}

export default About;