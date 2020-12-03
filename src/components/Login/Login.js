import React from 'react';
import { useState } from 'react';
import './Login.css';

const Login = () => {

    const [isNewUser, setIsNewUser] = useState(true);

    const handleBlur = () => {

    }

    const handleSignup = () => {

    }

    const handleLogin = () => {

    }

    const handleGoogleLogin = () => {

    }

    const handleFbLogin = () => {

    }

    const fbLogo = 6;

    return (
        <div className="login-container text-center mt-5">
            <div>
                {isNewUser ? <h1>Create an account</h1> : <h1>Login</h1>}
                <br />
                <form>
                    {isNewUser && <div className="form-group">
                        <input onBlur={handleBlur} name="firstName" type="text" className="form-control" placeholder="First Name" required />
                    </div>}

                    {isNewUser && <div className="form-group">
                        <input onBlur={handleBlur} name="lastName" type="text" className="form-control" placeholder="Last Name" required />
                    </div>}

                    <div className="form-group">
                        <input onBlur={handleBlur} name="email" type="email" className="form-control" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <input onBlur={handleBlur} name="password" type="password" className="form-control" placeholder="Password" required />
                    </div>

                    {isNewUser && <div className="form-group">
                        <input onBlur={handleBlur} name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" required />
                    </div>}

                    {isNewUser ? <button onClick={handleSignup} type="submit" style={{ width: '100%' }} className="custom-btn">Sign Up</button>
                        : <button onClick={handleLogin} type="submit" style={{ width: '100%' }} className="custom-btn">Login</button>}
                </form>
                <br />
                {isNewUser ? <p>Already have an account? <b onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer', color: '#275A53' }}>Login here</b></p>
                    : <p>Don't have an account? <b onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer', color: '#275A53' }}>Register here</b></p>}

            </div>

            <br />
            <div className="d-flex justify-content-center">
                <button className="login-btn text-left" onClick={handleGoogleLogin}>
                    <img width="30px" src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    <b className="pr-5">Continue with Google</b>
                </button><br />
            </div>

            <div className="d-flex justify-content-center mb-5">
                <button className="login-btn text-left" onClick={handleFbLogin}>
                    <img src="https://img.icons8.com/fluent/32/000000/github.png" />
                    <b className="pr-5">Continue with Github</b>
                </button>
            </div>
        </div>
    );
};

export default Login;