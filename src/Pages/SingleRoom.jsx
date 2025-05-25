import React from 'react';
import { useLoaderData } from 'react-router';
import { IoLocationSharp } from "react-icons/io5";

const SingleRoom = () => {
    const roomData=useLoaderData()
    console.log(roomData);
    const{ availiability, contact, description, email, guestpolicy, location, name, nightowl, pets, rent, roomType, smoking, title, _id }=roomData

    return (
        <div className='bg-base-200 pt-6'>
        <div className="card max-w-2xl mx-auto  bg-base-100 shadow-sm">
  <div className="card-body">

    <div className="flex justify-between flex-col md:flex-row ">
      <h2 className="text-2xl  md:text-3xl flex items-center font-bold"> <IoLocationSharp />  {location}</h2>

        
      <span className="text-xl">Rent: ${rent}/mo</span>
    </div>
    <div className='text-xl'>
        Title: {title}
        
    </div>
      <span className="text-xl">Rent: ${rent}/mo</span>
  <div className="badge text-white badge-info">{roomType}</div>

    <div className='grid  grid-cols-2'>

     
        

        <h1 className='bg-base-200 h-8 content-center'>Pets</h1>
        <h1 className='bg-base-200 content-center'>{pets}</h1>

        <h1 className=' h-8 content-center'>Smoking</h1>
        <h1 className='content-center'>{smoking}</h1>

        <h1 className='bg-base-200 h-8 content-center'>Night Owl</h1>
        <h1 className='bg-base-200 content-center'>{nightowl}</h1>

        <h1 className=' h-8 content-center'>Guest Policy</h1>
        <h1 className='content-center'>{guestpolicy}</h1>

         <h1 className='bg-base-200 h-8 content-center'>Smoker</h1>
        <h1 className='bg-base-200 content-center'>No</h1>

           <h1 className=' h-8 content-center'>availiability</h1>
        <h1 className='content-center'>{availiability}</h1>

       

        <h1 className=' h-8 bg-base-200  content-center'>contact</h1>
        <h1 className='content-center bg-base-200'>{contact}</h1>

        <h1 className=' h-8 content-center'>Name</h1>
        <h1 className='content-center'>{name}</h1>
        
        
        <h1 className=' h-8 bg-base-200  content-center'>Email</h1>
        <h1 className='content-center bg-base-200'>{email}</h1>


        
       
        

    </div>

    <div className='mt-4'>
       <p className='font-bold'>
         Description:
       </p>
       <p>
         {description}
       </p>
    </div>
    
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Contact</button>
    </div>
  </div>
  </div>
</div>
    );
};

export default SingleRoom;