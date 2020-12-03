import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../Home/Home';

const PrivateRoute = ({ children, ...rest }) => {

    return (
      <Route
        {...rest}
        render={({ location }) =>
          signedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;