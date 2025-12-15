import React from 'react';
import Menu from '../Menu';
import { NavLink } from 'react-router';

const UserSidebar = () => {
    return (
        <div>
            <NavLink to='/dashboard'><Menu>User Dashboard</Menu></NavLink>
            <NavLink to='/dashboard/my-participate'><Menu>My Participate Contest</Menu></NavLink>
            <Menu>Winning</Menu>
        </div>
    );
};

export default UserSidebar;