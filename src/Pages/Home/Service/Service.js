import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='col'>
            <div className="card h-100">
                <div className="card-body text-dark text-center">
                    <img src={img} className="card-img-top" alt="..."></img>
                    <h5 className="card-title">Name: {name}</h5>
                    <p><b>Price:</b> ${price}</p>
                    <p className="card-text"><small>{description}</small></p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className='btn btn-dark'>Book: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;