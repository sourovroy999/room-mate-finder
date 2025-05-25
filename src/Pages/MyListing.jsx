import React from 'react';
import { useLoaderData } from 'react-router';

const MyListing = () => {

    const roomData=useLoaderData()
    console.log(roomData);
    

    return (
        <div>
            <h1 className='text-center'> my Listing page</h1>


        </div>
    );
};

export default MyListing;