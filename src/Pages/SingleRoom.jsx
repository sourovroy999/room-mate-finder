import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { IoLocationSharp } from "react-icons/io5";
import { AuthContext } from '../Provider/AuthProvider';
import LoadingSpinner from './LoadingSpinner';
import { Tooltip } from 'react-tooltip'


const SingleRoom = () => {
  const[likeCount, setLikeCount]=useState(0)
  const[iscontact, setContact]=useState('')
    const roomData=useLoaderData()
    console.log(roomData);
    const{ availiability, contact, description, email, guestpolicy, location, name, nightowl, pets, rent, roomType, smoking, title, _id }=roomData

    const serverLike=roomData.totalLike;
    console.log(serverLike);
    

    const{user, loading}=useContext(AuthContext);  

      if(loading){
    return <LoadingSpinner/>
  }

   const{email: userEmail}=user

    const handleLikeBtn=()=>{
        setLikeCount(likeCount+1)
        setContact(contact)

        // const totalLike=likeCount+1;
        // const updateLike={totalLike}

        // fetch(`https://room-mate-finder-server.onrender.com/useraddedroom/${_id}`,{
        //   method:'PUT',
        //   headers:{
        //     'content-type':'application/json',
        //   },
        //   body:JSON.stringify(updateLike)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //   console.log(data);
          
        // })


    }

    

    return (
        <div className='bg-base-200 pb-30'>
          <div className='text-center text-2xl font-bold py-7'>
            {likeCount} People Interested In this Post
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

    <div className='grid  grid-cols-2 '>

     
        

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

       

       

        <h1 className=' h-8 content-center'>Name</h1>
        <h1 className='content-center'>{name}</h1>
        
        
        <h1 className=' h-8 bg-base-200  content-center'>Email</h1>
        <h1 className='content-center bg-base-200 overflow-auto '>{email}</h1>

   </div>

    <div className='mt-4'>
       <p className='font-bold'>
         Description:
       </p>
       <p>
         {description}
       </p>
    </div>



    <button  disabled={userEmail === email ? true :false} onClick={handleLikeBtn} 

    className={`btn  mt-4` }    data-tooltip-id="my-tooltip"
  data-tooltip-content="Like the Post To See Contact"
  data-tooltip-place="top" 
 >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
  Like
</button>
{/* {userEmail === email && <Tooltip id="my-tooltip" />} */}

<Tooltip id="my-tooltip" />


{
  iscontact
  ?   
        <h1 className='content-center mt-2 bg-base-200'>Contact: {contact}</h1>  : ''

}
    
    <div className="mt-2">
      <button  className="btn btn-primary btn-block">Connect</button>
    </div>
   



  </div>
  </div>
</div>
    );
};

export default SingleRoom;