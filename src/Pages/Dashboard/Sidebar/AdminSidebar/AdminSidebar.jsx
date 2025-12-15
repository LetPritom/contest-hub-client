import React from 'react';
import { NavLink } from 'react-router';
import Menu from '../Menu';
import { MdEmojiEvents , MdManageAccounts } from "react-icons/md";

const AdminSidebar = () => {
    return (
        <div>
            <NavLink to='/dashboard/manage-contest'><Menu icon={<MdManageAccounts/>}>Manage contest</Menu></NavLink>
            <NavLink to='/dashboard/manage-users'><Menu icon={<MdEmojiEvents />}>Manage user</Menu></NavLink>
        </div>
    );
};

export default AdminSidebar;