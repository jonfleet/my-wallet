import React from 'react';
import {Route, Redirect} from "react-router-dom"
import auth from '../../services/authService';

const ProtectedRoute = ({path, component : Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        path={path}
        render={ () => {
            if(!auth.getCurrentUser()) return <Redirect to="/login"/>
            return <Component />
        }}
        />
      );
}
 
export default ProtectedRoute;