import React from 'react';
import me from '../../Images/me.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className='text-dark m-5'>
                <h3 className='text-center'>Hey this is me</h3>
                <h1 className='text-center'>Mohammad Sanaullah</h1>
            </div>
            <div className="container-fluid d-flex">
                <img className='mx-auto w-75 rounded-pill' src={me} alt="" />
            </div>
            <div className="blog-container">
                <p className='blog'>Hey again i am mohammad sanaullah. About my goals i am currently trying to be an web developer. Thus i am here to learn it from one of best mentor in my opinion Jhankar Mahbub. And as he says there is no alternative to Hard Work. So, I am trying to do hard work to be an web developer. And in 6 months I want myself to be in a position where i can create to an extant any website.</p>
            </div>

        </div>
    );
};

export default AboutUs;