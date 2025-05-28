import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MyListing = () => {
   const{ loading}=useContext(AuthContext)

   

    const myRoomData=useLoaderData()

    const [totalRoom, setTotalRoom]=useState(myRoomData)
    

    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {


    fetch(`http://localhost:5000/useraddedroom/${_id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.acknowledged){

            const remaining=totalRoom.filter(room=> room._id !== _id);
            console.log(remaining);
            setTotalRoom(remaining)
            

             Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
        
    })


    
  }
});

    }
      
  if(loading){
    return <div className="text-center h-screen content-center text-xl"><span className="loading loading-infinity loading-lg"></span></div>
  }

  




    

    return (
        <div>
            <h1 className='text-center'> my Listing page</h1>

            
                        <div className="mt-9">
                           <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Posted By</th>
                    <th>Title</th>
                    <th>Location</th>
            
                    <th>Rent</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
            
                  {
                    totalRoom.map((room, index)=> <tr key={room._id || index}>
                    <th>{index+1}</th>
                    <td>{room.name}</td>
                    <td>{room.title}</td>
                    <td>{room.location}</td>
                    <td>{room.rent} $</td>
                    <td className='flex flex-col md:flex-row gap-2'><Link to={`/browseListing/${room._id}`} className="btn btn-dash btn-info">Details</Link>
                    <button onClick={()=>handleDelete(room._id)} className='btn btn-dash btn-error'>Delete</button>
                    <button className='btn btn-dash btn-accent'><Link to={`/mylisting/update-room-data/${room._id}`}>Update</Link></button>
                    
                    </td>
                  </tr>)
                  }
            
            
                 
                 
                </tbody>
              </table>
            </div>
                        </div> 




        </div>
    );
};

export default MyListing;