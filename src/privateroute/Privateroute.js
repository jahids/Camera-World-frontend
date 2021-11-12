import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Privateroute = (props) => {
    const {children, ...rest} = props;
    let {user, isloading} = useAuth();

    if(isloading){
        return <Spinner animation="border" />
    }

    return (
        
        <Route
            {...rest}
            render = {({ location }) => user.email ? (children)
             : ( <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              /> )}>
        </Route>

    );
};

export default Privateroute;