import { Link, useLoaderData } from "react-router";
import SingleRoomDetails from "../Components/SingleRoomDetails";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";
import Swal from "sweetalert2";

const BrowseListing = () => {

   const{ loading}=useContext(AuthContext)

    const RoomsData=useLoaderData();
    console.log(RoomsData);

     if(loading){
    return <LoadingSpinner/>
  }

 
    return (
        <div className="pb-40">
              <h1 className='text-center font-bold text-3xl mt-3'>Browse Listings</h1>

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
        <th className="pl-7">Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        RoomsData.map((room, index)=> <tr key={room._id || index}>
        <th>{index+1}</th>
        <td>{room.name}</td>
        <td>{room.title}</td>
        <td>{room.location}</td>
        <td>{room.rent} $</td>
        <td><Link to={`/browseListing/${room._id}`} className="btn">Details</Link></td>
      </tr>)
      }


     
     
    </tbody>
  </table>
</div>
            </div>

            
        </div>
    );
};

export default BrowseListing;