import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {

    const{user,logOut, setUser, loading}=useContext(AuthContext)
    const navigate=useNavigate()

    const[isHover, setHover]=useState(false)
    const[theme,setTheme]=useState('light')

    useEffect(()=>{
      localStorage.setItem('theme', theme)
      const localtheme=localStorage.getItem('theme'
      )
      document.querySelector('html').setAttribute('data-theme',localtheme)
    },[theme])

    const handleToggle=(e)=>{
      if(e.target.checked){
        setTheme('forest')
      }
      else{
        setTheme('light')
      }
    }

    const mouseOnImg=()=>{
        setHover(true)
    }

    const mouseNotONImg=()=>{
        setHover(false)
    }

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            toast.success('log Out Successfully')
            setUser(null)
            navigate('/register')
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
    

    const links=<>
    <li > <NavLink to={'/'} >Home</NavLink> </li>
 
    <li className={`${!user&& 'hidden'} `}> <NavLink   to={'/userroomform'}  >Add To Find Room Mate</NavLink> </li>
    <li className={`${!user&&'hidden'} `}  > <NavLink to={`/mylisting/${user?.email}`}>My Listing</NavLink> </li>
    <li> <NavLink to={'/browseListing'}>Browse Listing</NavLink> </li>
    
    </>

    return (
        
       <div className="navbar relative bg-base-100 shadow-sm z-10 px-0 md:px-10  lg:px-28">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm flex dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
            
        {links}
        
      </ul>
    </div>
    <Link to={'/'} className="text-xl font-bold">RooMers</Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal  flex gap-4 px-1">
      {links}
 

    </ul>
  </div>
  {/* <div className='navbar-end gap-3 '>Loading....</div> */}

  

  <div className={`navbar-end  gap-3 ${loading && 'hidden'}`}>
     <label className="toggle text-base-content">
                    <input 
                    onChange={handleToggle}
                    type="checkbox"  className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>

{
    user?  
    <div  className={`flex items-center `}>
        {
            isHover  ? <div  className='  absolute rounded h-32 min-w-36 mt-24 p-2 z-40 border-0  -ml-36 ' onMouseOver={mouseOnImg} onMouseOut={mouseNotONImg} > 
            <div className='rounded pt-4 items-center flex gap-3 flex-col h-28 content-center bg-blue-200'>
             <div className='px-2 font-bold'>Name: {user.displayName} </div> <button  onClick={handleLogOut} className='btn btn-sm btn-primary'>Log Out</button>
             </div>

 </div>: ''
        }
         

           {
            user?.photoURL? <img onMouseOver={mouseOnImg} onMouseOut={mouseNotONImg}  className='w-10  h-10 rounded-full object-cover' src={ user.photoURL  } alt=''/> : <img onMouseOver={mouseOnImg} onMouseOut={mouseNotONImg}  className='w-10 border p-1 h-10 rounded-full object-cover' src='https://img.icons8.com/?size=100&id=rrtYnzKMTlUr&format=png&color=000000'  alt=''/> 
           }
     </div>  

    :
     <div className='flex flex-col gap-1 md:flex-row md:gap-3'>
          <Link to='/login' className={'btn btn-sm md:btn-md rounded-xl'}>Login</Link>
  <Link to={'/register'} className={'btn btn-sm md:btn-md rounded-xl'}>Sign Up</Link>
    </div>
}

    
 
  </div>

{
  loading && <div className='navbar-end'></div>
}



</div>
    );
};

export default NavBar;