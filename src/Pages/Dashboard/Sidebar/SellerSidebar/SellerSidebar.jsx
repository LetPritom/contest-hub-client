import React from 'react';
import { NavLink } from 'react-router';
import Menu from '../Menu';
import { TbTournament } from 'react-icons/tb';
import { LiaFantasyFlightGames } from 'react-icons/lia';
import { MdEdit, MdFileDownloadDone } from 'react-icons/md';

const SellerSidebar = () => {
    return (
        <div className='flex flex-col gap-1' >
            <NavLink to='/dashboard/add-Contest'><Menu title={'Add Contest'} icon={<TbTournament />}>Add Contest</Menu></NavLink>
            <NavLink to='/dashboard/created-Contests'><Menu title={'Created Contests'} icon={<LiaFantasyFlightGames />}>My Created Contests</Menu></NavLink>
            <NavLink to='/dashboard/submitted-Tasks'><Menu title={'Submitted Tasks'} icon={<MdFileDownloadDone />}>Submitted Tasks</Menu></NavLink>
            <NavLink to='/dashboard/edit-contest'><Menu title={'Edit contest'} icon={<MdEdit />}>Edit contest</Menu></NavLink>
        </div>
    );
};

export default SellerSidebar;