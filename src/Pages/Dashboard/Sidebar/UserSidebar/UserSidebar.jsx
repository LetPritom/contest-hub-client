import React from 'react';
import Menu from '../Menu';
import { NavLink } from 'react-router';
import { FaListCheck, FaUser } from 'react-icons/fa6';
import { GiPodiumWinner } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { MdPerson } from 'react-icons/md';

const UserSidebar = () => {
    return (
        <div className='flex flex-col gap-2 mt-2 '>
            
            <NavLink to='/dashboard/my-participate'><Menu title={'My Contest'} icon={<FaListCheck />}>My Contest</Menu></NavLink>
            <NavLink to='/dashboard/my-winning'><Menu title={'My winning'} icon={<GiPodiumWinner />}>My winning</Menu></NavLink>
            

        </div>
    );
};

export default UserSidebar;