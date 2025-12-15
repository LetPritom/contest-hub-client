import React from 'react';
import { NavLink } from 'react-router';
import Menu from '../Menu';

const SellerSidebar = () => {
    return (
        <div>
            <NavLink to='/dashboard/add-Contest'><Menu>Add Contest</Menu></NavLink>
            <NavLink to='/dashboard/created-Contests'><Menu>My Created Contests</Menu></NavLink>
            <NavLink to='/dashboard/submitted-Tasks'><Menu>Submitted Tasks</Menu></NavLink>
            <NavLink to='/dashboard/edit-contest'><Menu>Edit contest</Menu></NavLink>
        </div>
    );
};

export default SellerSidebar;