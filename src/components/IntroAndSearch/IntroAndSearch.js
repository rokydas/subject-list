import React from 'react';

const IntroAndSearch = () => {

    return (
        <div className="login-container">
            <div className="text-center m-5">
                <h1>Welcome to our App</h1>
                <h3>You are a <span style={{ color: 'green' }}>Student</span></h3><br/>
                <input type="text" className="form-control" placeholder="Search your desired subject" />
            </div>
        </div>
    );
};

export default IntroAndSearch;