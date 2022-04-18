import React from 'react';

const Footer = () => {
    return (
        <div>
            <h6>Copyright by Mohammad Sanullah <span>&copy;</span> {(new Date().getFullYear())}</h6>
        </div>
    );
};

export default Footer;