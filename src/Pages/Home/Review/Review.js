import React from 'react';

const Review = ({ review }) => {
    const { name, img, description, rating } = review;
    return (
        <div className='col'>
            <div className="card h-100">
                <div className="card-body text-dark text-center">
                    <img src={img} className="card-img-top" alt="..."></img>
                    <h5 className="card-title">Name: {name}</h5>
                    <p><b>Rating:</b> {rating}</p>
                    <p className="card-text"><small>{description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;