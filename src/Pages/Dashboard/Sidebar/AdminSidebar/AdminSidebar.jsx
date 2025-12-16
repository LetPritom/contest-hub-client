import React from 'react';
import { NavLink } from 'react-router';
import Menu from '../Menu';
import { MdEmojiEvents , MdManageAccounts } from "react-icons/md";

const AdminSidebar = () => {
    return (
        <div>
            <NavLink to='/dashboard/manage-contest'><Menu title={'Manage contest'} icon={<MdManageAccounts/>}>Manage contest</Menu></NavLink>
            <NavLink to='/dashboard/manage-users'><Menu title={'Manage user'} icon={<MdEmojiEvents />}>Manage user</Menu></NavLink>
        </div>
    );
};

export default AdminSidebar;