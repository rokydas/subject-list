import React from 'react';

const IntroAndSearch = () => {

    return (
        <div className="login-container">
            <div className="text-center m-5">
                <h1>Welcome to our App</h1>
                <h3>You are a <span style={{ color: 'green' }}>Student</span></h3><br />
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                        <button className="custom-btn" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroAndSearch;