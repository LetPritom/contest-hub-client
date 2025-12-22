import React from 'react';
import useRole from '../hooks/UseRole';
import LoaderSpinner from '../Components/Loader/LoaderSpinner';
import { Navigate } from 'react-router';

const AdminCreator = ({children}) => {
    const [role , isRoleLoading] = useRole()
    if(isRoleLoading) return <LoaderSpinner></LoaderSpinner>
    if(role ==='admin') return children
    return <Navigate to='/' replace='true' />
};

export default AdminCreator;