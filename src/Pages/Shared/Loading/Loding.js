import React from 'react';

const Loding = () => {
    return (
        <div style={{ height: '300px' }} className=' w-100 d-flex justify-content-center align-items-center'>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loding;