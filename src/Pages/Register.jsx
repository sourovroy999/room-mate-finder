import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const {registerUser,setUser, googleSignIn,updateUser}=useContext(AuthContext)
    const navigate=useNavigate()

     const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            setUser(result.user)
            navigate('/')
            
        })
        .catch(error=>{
            console.log(error.message);
            
        })
    } 

    const handleRegister=(e)=>{
            e.preventDefault()
            const form=e.target

            const name=form.name.value;
            const email=form.email.value;
            const photo=form.photo.value;
            const password=form.password.value;

            registerUser(email,password)
            .then(result=> {
                setUser(result.user)
                updateUser(name,photo)
                navigate('/')
                toast.success('Successfully Register')
               
                
            })
            .catch(error=>{
              toast.error(error.message)
              
            })
            
            console.log(name,email,photo);
            
            
    }

    return (
        <div className="bg-base-200 min-h-screen pb-30">
  <div className="hero-content flex-col pt-10 ">
    <div className="text-center mb-16 ">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <form onSubmit={handleRegister} className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body ">
        <fieldset className="fieldset ">
          <label className="label ">Name</label>
          <input autoFocus type="text" className="input mb-4" name='name' placeholder="Name" />
          <label className="label">Email</label>
          <input required  type="email" className="input mb-4" name='email' placeholder="Email" />
           <label className="label">Photo URL</label>
          <input  type="text" className="input mb-4" name='photo' placeholder="Photo URL" />
          <label className="label">Password</label>
          <input required type="password" className="input" name='password' placeholder="Password" />
    <p className='mt-4'>Already have an account? <Link to={'/login'} className='text-blue-500 '>Log In</Link> </p>
          <button  className="btn  bg-blue-500 mt-4">Register</button>
          {/* <button onClick={handleGoogleSignIn} className='btn bg-green-400'>Sign In With Google</button> */}

          {/* Google */}
<button  onClick={handleGoogleSignIn} className="btn bg-green text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  <div className='text-black'>
  Login with Google

  </div>
</button>
        </fieldset>
      </div>
    </form>

  </div>
</div>
    );
};

export default Register;