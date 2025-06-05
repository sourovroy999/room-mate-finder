import { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const SingleRoomDataForHome = ({room}) => {

    const{theme}=useContext(AuthContext)
  
    console.log(room);
     const{ availiability, contact, description, email, guestpolicy, location, name, nightowl, pets, rent, roomType, smoking, title, _id }=room;

    
    return (
        <div className={`card  md:mx-auto mt-5 bg-base-100 w-screen md:w-96  shadow-sm ${theme !== "light" && 'bg-base-300' }`}>
  <div className="card-body">
    <h2 className="text-2xl  md:text-3xl flex items-center font-bold"> <IoLocationSharp />  {location}</h2>
    
    <h2 className="card-title">{title}</h2>
      <span className="text-xl">Rent: ${rent}/mo</span>

    <p>{description}</p>
    <div className="card-actions ">
        <Link className="btn w-full btn-soft btn-info" to={`/browseListing/${_id}`}>See More</Link>

      
    </div>
  </div>
</div>
    );
};

export default SingleRoomDataForHome;