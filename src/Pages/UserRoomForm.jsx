import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UserRoomForm = () => {

  const{user, loading}=useContext(AuthContext)
  const[isHover, setHover]=useState(false)
  const[isHoverName, setHoverName]=useState(false)
 const navigate=useNavigate()

  
  if(loading){
    return <div className="text-center h-screen content-center  text-xl"><span className="loading loading-infinity loading-lg"></span></div>
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

      //send room data to db
      fetch('https://room-mate-finder-server.onrender.com/useraddedroom',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(newRoomEntries)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        toast.success('Added New Room Successfully')
        navigate(`/mylisting/${user.email}`)
      }
      )





      
    }
    return (
        <div className="max-w-3xl mt-2 pb-20 mx-auto">
          <h1 className="text-3xl  mt-4 text-blue-400 text-center font-bold"> Add Your Room Details</h1>
            <form onSubmit={handleRoomDetailsSubmit} className=" bg-base-100 content-center shrink-0 ">
      <div className="card-body">
        <fieldset className="fieldset md:pl-48">
       
       
          <label className="label ">Title</label>
          <input required  autoFocus type="text" className="input  mb-4 " name='title' placeholder="title" />

          <label className="label">Location</label>
          <input required   type="text" className="input mb-4" name='location' placeholder="location" />

           <label className="label">Rent Amount</label>
          <input required  type="number" className="input mb-4" name='rent' placeholder="Rent Amount" />


           <label className="label">Room Type</label>
          
          <select className="max-w-xs h-10 bg-base-200 rounded" name="roomType" id="roomType">
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
          
          <select className=" h-8 w-[80px] bg-base-200 rounded" name="pets" id="pets">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
           <div className="gap-4 flex">
               <label className="label">Smoking</label>
          
           <select className=" h-8 w-[80px] bg-base-200 rounded" name="smoking" id="smoking">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
           <div className="gap-4 flex">
               <label className="label">Night Owl</label>
          
           <select className=" h-8 w-[80px] bg-base-200 rounded" name="nightowl" id="nightowl">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
            <div className="gap-4 flex">
               <label className="label">Guest Policy</label>
          
          <select className="  h-8 w-[80px] bg-base-200 rounded" name="guestpolicy" id="GuestPolicy">
            <option value="Often">Often</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Never">Never</option>
            
          </select>
            </div>

          </div>
          
           <label className="label">Description</label>
          <input required  type="text" className="input mb-4" name='description' placeholder="description" />
           <label className="label">Contact Info </label>

          <input required  type="tel" pattern="01[0-9]{9}" maxLength={11} minLength={11} className="input mb-4" name='contact' placeholder="01XXXXXXXXX" />
         
               <label className="label">Availiability</label>
            <div className="gap-4 flex">
          
           <select className=" h-8 w-[80px] bg-base-200 rounded" name="availiability" id="smoking">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
            </div>
           <label className="label mt-3">Email</label>
          <input onMouseOver={hoverOnNotEditInput} onMouseOut={mouseOutFromInputField} required  readOnly type="email" className="input bg-base-300 mb-4" name='email' placeholder="Your Email" value={`${user.email}`} />
          {
            isHover? 
          <p className="-mt-5 text-[10px] text-cyan-300">You can not edit this field</p>
          :
          ''
          }
           <label className="label">Name</label>
          <input onMouseOver={hoverOnName} onMouseOut={mouseOutFromName} required  readOnly type="text" className="input bg-base-300  " name='name' placeholder="User Name" value={`${user?.displayName}`}  />
          {
            isHoverName? 
          <p className="-mt-5 text-[10px] text-cyan-300">You can not edit this field</p>
          :
          ''
          }

         
          <button  className="btn  max-w-xs bg-blue-500 mt-4">Add</button>
         
        </fieldset>
      </div>
    </form>
        </div>
    );
};

export default UserRoomForm;