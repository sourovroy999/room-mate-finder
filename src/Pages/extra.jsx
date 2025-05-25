// import { useLoaderData } from "react-router";
// import SingleRoomDetails from "../Components/SingleRoomDetails";

// const BrowseListing = () => {

//     const RoomsData=useLoaderData();
//     console.log(RoomsData);
    

//     return (
//         <div>
//             <h1 className="text-center">all listing</h1>

//             <div className="grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mt-7 ">
//                 {
//                     RoomsData.map(room=><SingleRoomDetails key={room._id} room={room}></SingleRoomDetails>)
//                 }
//             </div>

            
//         </div>
//     );
// };

// export default BrowseListing;

// import React from 'react';

// const SingleRoomDetails = ({room}) => {
//     console.log(room);
    

//     return (
//        <div className="card  w-96 mx-auto bg-base-200 card-md shadow-sm ">
//   <div className="card-body ">
//     <h2 className="card-title">Title: {room.title}</h2>
//     <p>Posted By:{room.name}</p>
//     <h3>Rent: {room.rent} $</h3>
//     <label >Description:</label>
//     <p>{room.description}</p>
//     <div className="justify-start card-actions">
//       <button className="btn w-full  btn-outline btn-accent">Details</button>
//     </div>
//   </div>
// </div>
//     );
// };

// export default SingleRoomDetails;

