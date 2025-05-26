import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

    const{user,logOut, setUser}=useContext(AuthContext)
    // console.log(user);
    const navigate=useNavigate()

    const[isHover, setHover]=useState(false)

    const mouseOnImg=()=>{
        setHover(true)
    }

    const mouseNotONImg=()=>{
        setHover(false)
    }

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('log out successfully');
            setUser(null)
            navigate('/register')
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
    

    const links=<>
    <li> <NavLink>Home</NavLink> </li>
    <li> <NavLink to={'/userroomform'}>Add To Find Room Mate</NavLink> </li>
    <li> <NavLink to={`/mylisting/${user?.email}`}>My Listing</NavLink> </li>
    <li> <NavLink to={'/browseListing'}>Browse Listing</NavLink> </li>
    
    </>

    return (
        
       <div className="navbar  bg-base-100 shadow-sm md:px-10  lg:px-40">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">

{
    user?  
    <div className='flex items-center'>
        {
            isHover ? <div className='items-center' onMouseOver={mouseOnImg} onMouseOut={mouseNotONImg} > {user.displayName} <button  onClick={handleLogOut} className='btn'>Log Out</button>
 </div>: ''
        }
           <img onMouseOver={mouseOnImg} onMouseOut={mouseNotONImg}  className='w-10  h-10 rounded-full object-cover' src={user.photoURL} alt="" />
     </div>  

    :
     <div>
          <Link to='/login' className={'btn '}>Login</Link>
  <Link to={'/register'} className={'btn'}>Sign Up</Link>
    </div>
}
    
 
  </div>
</div>
    );
};

export default NavBar;