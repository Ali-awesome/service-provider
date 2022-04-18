import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/Logo/logo.png';
import { signOut } from 'firebase/auth';

const Nav = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid g-4">
                    <NavLink to={'./home'}><img src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className='navbar-nav d-flex justify-content-between w-50'>
                            <a className='nav-item text-decoration-none text-white' href="/#services">Services</a>
                            <a className='nav-item text-decoration-none text-white' href="/#reviews">Reviews</a>
                            <Link
                                className='nav-item text-decoration-none text-white'
                                to={'/blogs'}>Blog</Link>
                            <Link
                                className='nav-item text-decoration-none text-white'
                                to={'/about'}>About Us</Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Link className='text-decoration-none text-white' as={Link} to="login">
                                        Login
                                    </Link>}
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Nav;