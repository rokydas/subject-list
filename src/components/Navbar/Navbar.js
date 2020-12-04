import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const user = localStorage.getItem('userName');

    const history = useHistory();

    const handleLogOut = () => {
        localStorage.clear();
        history.replace('/');
        history.go(0);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Subject List</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item active ml-5">
                            <a className="nav-link" href="/insert">Insert</a>
                        </li>
                        <li className="nav-item active ml-5">
                            {user && <h4>{user}</h4>}
                        </li>
                        {user ? <li className="nav-item ml-5 mr-5">
                            <button onClick={handleLogOut} className="custom-btn">Logout</button>
                        </li>
                            : <li className="nav-item ml-5 mr-5">
                                <a href="/login"><button onClick={handleLogOut} className="custom-btn">Login</button></a>
                            </li>}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;