import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container mt-5'>
            <div className="blog">
                <h3 className='heading'>Difference between authorization and authentication.</h3>
                <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.

                    In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            </div>
            <div className="blog">
                <h3 className='heading'>Why are you using firebase?</h3>
                <p>With Firebase, you can focus your time and attention on developing the best app(s) possible for your business. Since the operations and internal functions are so solid, and taken care of by the Firebase interface, you can spend more time developing the high quality app that users are going to want to use.
                    Alternatives of firbase is Parse, Back4app, AWSfamily.
                </p>
            </div>
            <div className="blog">
                <h3 className='heading'>What other services does `firebase` provide other than authentication</h3>
                <p> Cloud Firestore,
                    Cloud Functions,
                    Hosting,
                    Cloud Storage,
                    Google Analytics,
                    Predictions,
                    Cloud Messaging,
                    Dynamic Links,
                    Remote Config, are other services of firebase</p>
            </div>

        </div>
    );
};

export default Blog;