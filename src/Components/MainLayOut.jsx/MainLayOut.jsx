import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div className=''>
            <div className=''>

            <NavBar/> 
            </div>

            <div className=''>

            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayOut;