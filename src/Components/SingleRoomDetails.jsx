import React from 'react';

const SingleRoomDetails = ({room}) => {
    console.log(room);
    

    return (
       <div className="card  w-96 mx-auto bg-base-200 card-md shadow-sm ">
  <div className="card-body ">
    <h2 className="card-title">Title: {room.title}</h2>
    <p>Posted By:{room.name}</p>
    <h3>Rent: {room.rent} $</h3>
    <label >Description:</label>
    <p>{room.description}</p>
    <div className="justify-start card-actions">
      <button className="btn w-full  btn-outline btn-accent">Details</button>
    </div>
  </div>
</div>
    );
};

export default SingleRoomDetails;