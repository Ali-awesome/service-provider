import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center'>Checkedout for order ID: {serviceId}</h2>
            <div className='text-center'>
                <Link className='btn btn-dark w-25 mx-auto d-flex justify-content-center' to='/home'>Back To Home</Link>
            </div>
        </div>
    );
};

export default Checkout;