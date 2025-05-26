import React from 'react';
import { Link, useLoaderData } from 'react-router';

const MyListing = () => {

    const myRoomData=useLoaderData()
    console.log(myRoomData);



    

    return (
        <div>
            <h1 className='text-center'> my Listing page</h1>

            
                        <div className="mt-9">
                           <div className="overflow-x-auto w-5xl mx-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Posted By</th>
                    <th>Title</th>
                    <th>Location</th>
            
                    <th>Rent</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
            
                  {
                    myRoomData.map((room, index)=> <tr key={room._id || index}>
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

export default MyListing;