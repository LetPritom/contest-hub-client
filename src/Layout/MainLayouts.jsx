import React from 'react';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div>
            <h1>Main Layouts</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;