import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading/Loding'
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nav = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        nav(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        nav('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been sent');
        }
        else {
            toast('Please enter your email address');
        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-secondary text-center my-4'>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                    <input ref={passwordRef}
                        type="password" className="form-control" id="exampleInputPassword1"
                        placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
            {errorElement}
            <p className='mt-4'>New to Our Service? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer />
        </div>
    );
};

export default Login;