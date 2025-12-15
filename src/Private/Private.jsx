import React from 'react';
import useAuth from '../hooks/useAuth';
import LoaderSpinner from '../Components/Loader/LoaderSpinner';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {

    const  {user, loading} = useAuth()
    const  location = useLocation()
    if(loading) {
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user) {
       return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default Private;