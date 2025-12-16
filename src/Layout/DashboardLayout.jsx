import React from 'react';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div className=''>
            {/* <Navbar></Navbar> */}
            
           <Sidebar></Sidebar>
        </div>
    );
};

export default DashboardLayout;