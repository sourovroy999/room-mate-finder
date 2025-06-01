import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const MainLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className=''>

            <NavBar/> 
            </div>

            <div className=''>

            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayOut;