import { Link, useLoaderData } from "react-router";
import SingleRoomDetails from "../Components/SingleRoomDetails";

const BrowseListing = () => {

    const RoomsData=useLoaderData();
    console.log(RoomsData);

    const handleDetailsBtn=(_id)=>{
        console.log(_id);

        

    }
    

    return (
        <div>
            <h1 className="text-center">all listing</h1>

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
        RoomsData.map((room, index)=> <tr key={room._id || index}>
        <th>{index+1}</th>
        <td>{room.name}</td>
        <td>{room.title}</td>
        <td>{room.location}</td>
        <td>{room.rent} $</td>
        <td><Link to={`/browseListing/${room._id}`} onClick={()=>handleDetailsBtn(room._id)} className="btn">Details</Link></td>
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