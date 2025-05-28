import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const UpdateRoomData = () => {

    const userRoomData=useLoaderData();
    console.log(userRoomData);

      const{ availiability, contact, description, email, guestpolicy, location, name, nightowl, pets, rent, roomType, smoking, title, _id }=userRoomData;

      console.log(title);
      
    


  const{user, loading}=useContext(AuthContext)
  const[isHover, setHover]=useState(false)
  const[isHoverName, setHoverName]=useState(false)


  
  if(loading){
    return <LoadingSpinner/>
    
  }
    if (!user) {
    return <div className="text-center text-red-500">User not found. Please log in.</div>;
  }

 const hoverOnNotEditInput=()=>{
  setHover(true)
 }
 const mouseOutFromInputField=()=>{
  setHover(false)
 }
 const hoverOnName=()=>{
  setHoverName(true)
 }

 const mouseOutFromName=()=>{
  setHoverName(false)
 }


    const handleRoomDetailsSubmit=(e)=>{
      e.preventDefault();
      const form=e.target;
      const formData= new FormData(form);

      const newRoomEntries=Object.fromEntries(formData.entries());
      console.log(newRoomEntries);


      //send updated room data to db
      fetch(`http://localhost:5000/useraddedroom/${_id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'

        },
        body:JSON.stringify(newRoomEntries)
      })

      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount){
          alert('updated successfully')
        }
      }
      )






      
    }


    return (
        <div className="w-2xl mt-2  mx-auto">



            <h1 className='text-center text-2xl my-4'>UPDATE YOUR ROOM DETAILS</h1>

            <form onSubmit={handleRoomDetailsSubmit} className=" bg-base-100 pl-11 shrink-0">
      <div className="card-body ">
        <fieldset className="fieldset w-xl mx-auto ">
       
       
          <label className="label ">Title</label>
          <input defaultValue={title} required  autoFocus type="text" className="input mb-4" name='title' placeholder="title" />

          <label className="label">Location</label>
          <input defaultValue={location} required  autoFocus type="text" className="input mb-4" name='location' placeholder="location" />

           <label className="label">Rent Amount</label>
          <input defaultValue={rent} required autoFocus type="number" className="input mb-4" name='rent' placeholder="Rent Amount" />


           <label className="label">Room Type</label>
          
          <select defaultValue={roomType} className="w-xs h-10 bg-base-200 rounded" name="roomType" id="roomType">
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
            <option value="Studio">Studio</option>
            <option value="Dorm">Dorm</option>
            <option value="Private Room in Apartment">Private Room in Apartment</option>
            <option value="Private Room in House">Private Room in House</option>
          </select>

          {/* lifestyle */}
           <label className="label mt-6 text-2xl">Lifestyle Preferences :</label>
         
          <div className="flex flex-col gap-3">
            <div className="gap-4 flex">
               <label className="label">Pets: </label>
          
          <select defaultValue={pets} className=" h-8 w-[80px] bg-base-200 rounded" name="pets" id="pets">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
           <div className="gap-4 flex">
               <label className="label">Smoking</label>
          
           <select defaultValue={smoking} className=" h-8 w-[80px] bg-base-200 rounded" name="smoking" id="smoking">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
           <div className="gap-4 flex">
               <label className="label">Night Owl</label>
          
           <select defaultValue={nightowl} className=" h-8 w-[80px] bg-base-200 rounded" name="nightowl" id="nightowl">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
            <div className="gap-4 flex">
               <label className="label">Guest Policy</label>
          
          <select defaultValue={guestpolicy} className="  h-8 w-[80px] bg-base-200 rounded" name="guestpolicy" id="GuestPolicy">
            <option value="Often">Often</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Never">Never</option>
            
          </select>
            </div>

          </div>
          
           <label className="label">Description</label>
          <input defaultValue={description} required autoFocus type="text" className="input mb-4" name='description' placeholder="description" />
           <label className="label">Contact Info </label>
          <input defaultValue={contact} required autoFocus type="text" className="input mb-4" name='contact' placeholder="Contact Info " />
         
               <label className="label">Availiability</label>
            <div className="gap-4 flex">
          
           <select defaultValue={availiability} className=" h-8 w-[80px] bg-base-200 rounded" name="availiability" id="smoking">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
           <label className="label mt-3">Email</label>
          <input onMouseOver={hoverOnNotEditInput} onMouseOut={mouseOutFromInputField} required autoFocus readOnly type="email" className="input bg-base-300 mb-4" name='email' placeholder="Your Email" value={`${user.email}`} />
          {
            isHover? 
          <p className="-mt-5 text-[10px] text-cyan-300">You can not edit this field</p>
          :
          ''
          }
           <label className="label">Name</label>
          <input onMouseOver={hoverOnName} onMouseOut={mouseOutFromName} required autoFocus readOnly type="text" className="input bg-base-300  mb-4" name='name' placeholder="User Name" value={`${user?.displayName}`}  />
          {
            isHoverName? 
          <p className="-mt-5 text-[10px] text-cyan-300">You can not edit this field</p>
          :
          ''
          }

         
          <button  className="btn w-xs bg-blue-500 mt-4">Update</button>
         
        </fieldset>
      </div>
    </form>
        </div>
    );
};

export default UpdateRoomData;