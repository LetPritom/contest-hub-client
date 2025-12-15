import React from 'react';
import Menu from '../Menu';
import { NavLink } from 'react-router';
import { FaListCheck, FaUser } from 'react-icons/fa6';
import { GiPodiumWinner } from 'react-icons/gi';

const UserSidebar = () => {
    return (
        <div className='flex flex-col gap-2'>
            <NavLink to='/dashboard'><Menu icon={<FaUser />}>User Dashboard</Menu></NavLink>
            <NavLink to='/dashboard/my-participate'><Menu icon={<FaListCheck />}>My Contest</Menu></NavLink>
            <NavLink to='/dashboard/my-winning'><Menu icon={<GiPodiumWinner />}>My winning</Menu></NavLink>

        </div>
    );
};

export default UserSidebar;