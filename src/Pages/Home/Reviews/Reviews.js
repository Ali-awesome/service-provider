import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='container'>
            <div id='reviews'>
                <h1 className='text-center text-secondary my-5'>Reviews From Customers</h1>
                <div className="services-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;