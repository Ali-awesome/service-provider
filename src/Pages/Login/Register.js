import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../Images/google.png'

const Register = () => {
    const navigate = useNavigate();
    const [user1] = useAuthState(auth);

    const [terms, setTerms] = useState(true)

    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    const googlehandle = () => {
        signInWithGoogle()
    }
    if (error2) {
        console.log(error2)
    }
    const [
        createUserWithEmailAndPassword,
        user3,
        loading3,
        error3,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handlelogin = (event) => {
        event.preventDefault()

        createUserWithEmailAndPassword(event.target.email.value, event.target.password.value)
    }

    if (user3 || user2 || user1) {
        navigate('/')
    }
    return (
        <div className="container w-50 mx-auto">
            <h2 className='text-secondary text-center my-4'>Please Login</h2>
            <form onSubmit={handlelogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Enter Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={() => setTerms(!terms)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Terms And Conditions!</label>
                </div>
                {
                    error3 && <p className="text-danger">{error3.message.slice(10, error3.message.length)}</p>
                }
                <input className="btn btn-danger" type="submit" placeholder="Submit" disabled={terms} />

                <p>Already have account? <NavLink to='/login' className="mx-1 text-decoration-none text-primary">Login Account</NavLink></p>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                </div>
                <button onClick={googlehandle} className='btn btn-dark mt-2'>
                    <img className='m-2' src={google} alt="" />
                    Google Login
                </button>
            </form>

        </div>
    );
};

export default Register;