import React from 'react';

const IntroAndSearch = () => {

    const isAdmin = localStorage.getItem('isAdmin');

    return (
        <div className="login-container">
            <div className="text-center m-5">
                <h1>Welcome to our App</h1>
                <h3>You are <span style={{ color: 'green' }}>{isAdmin ? 'an Admin or an Employee': 'a Student or a teacher'}</span></h3><br />
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