import { Link } from 'react-router';
import errorTreeImg from '../../assets/error404tree.png'

import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className=''>
                <img className='w-md  mx-auto object-cover' src={errorTreeImg} alt="" />
                <Link to={'/'}>
                <p className='text-3xl text-blue-400 text-center -mt-10'>Back to Home</p>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;