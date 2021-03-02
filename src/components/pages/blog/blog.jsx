import React from 'react';
import './blog.css';
import '../../Cards.css';
import ItemCard from '../../CardItem';

function Blog() {
    return (
        <div>
            <div id="blog" style={{display: "white;"}}>
                <div className='cards'>
                    <div className='cards__container'>
                        <div className='cards__wrapper'></div>
                        <h1>Blog Post</h1>
                        <br></br>
                        <ul className='cards__items'>
                        <br></br><br></br>
                        <ItemCard
                            src='/assets/starting_point.jpg'
                            text='Where did it all started...'
                            label='Blog'
                            path='/started/#intro'
                        />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Blog;