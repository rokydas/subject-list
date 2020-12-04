import React, { useContext } from 'react';
import { keywordContext } from '../../App';

const IntroAndSearch = () => {

    const isAdmin = localStorage.getItem('isAdmin');
    const userName = localStorage.getItem('userName');

    const [keyword, setKeyword] = useContext(keywordContext);

    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <div className="login-container">
            <div className="text-center m-5">
                <h1>Welcome to our App</h1>
                {userName ? <h3>You are <span style={{ color: 'green' }}>{isAdmin == 'true' ? 'an Admin or an Employee': 'a Student or a teacher'}</span></h3>
                : <h3>You have to log in or sign up to use any feature of this website</h3>} 
                <br/>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search your desired subject's topics" onChange={handleChangeKeyword} />
                    <div className="input-group-append">
                        <button className="custom-btn" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroAndSearch;