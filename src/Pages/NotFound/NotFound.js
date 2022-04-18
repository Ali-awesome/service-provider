import React from 'react';
import { Link } from 'react-router-dom';
import no from '../../Images/notfound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound justify-content-center'>
            <div className='mt-3 d-flex justify-content-center'>
                <h1 className='text-dark'>404 Not Fund</h1>
            </div>
            <div className='image d-flex justify-content-center'>
                <img className='noimg' src={no} alt="" />
            </div>
            <Link className='btn btn-dark w-25 mx-auto d-flex justify-content-center' to='/home'>Back To Home</Link>
        </div>
    );
};

export default NotFound;