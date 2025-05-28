import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { IoLocationSharp } from "react-icons/io5";
import { AuthContext } from '../Provider/AuthProvider';
import LoadingSpinner from './LoadingSpinner';


const SingleRoom = () => {
  const[likeCount, setLikeCount]=useState(0)
    const roomData=useLoaderData()
    console.log(roomData);
    const{ availiability, contact, description, email, guestpolicy, location, name, nightowl, pets, rent, roomType, smoking, title, _id }=roomData

    console.log(email);
    



    const{user, loading}=useContext(AuthContext);
    console.log(user);

    console.log(likeCount);

   
   

    // const [isDisabled,setDisabled]=useState(false)
    // console.log(isDisabled);
    

    

      if(loading){
    return <LoadingSpinner/>
  }

   const{email: userEmail}=user
    console.log(userEmail);


    if(userEmail === email){
      console.log('email is same');
      // setDisabled(true)
      
    }
    else{
      console.log('email is different');
      
    }

 
    
    
    
  
    
    

    
    

    const handleLikeBtn=()=>{
        setLikeCount(likeCount+1)
    }

    return (
        <div className='bg-base-200 pt-6'>
          <div className='text-center text-2xl my-5'>
            {likeCount} people like this post
          </div>
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



    <button   disabled={userEmail === email ? true :false} onClick={handleLikeBtn} className="btn  mt-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
  Like
</button>
    
    <div className="mt-2">
      <button className="btn btn-primary btn-block">Contact</button>
    </div>
  </div>
  </div>
</div>
    );
};

export default SingleRoom;