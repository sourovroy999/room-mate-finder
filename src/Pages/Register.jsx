import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

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
               
                
            })
            
            console.log(name,email,photo);
            
            
    }

    return (
        <div className="bg-base-200 min-h-screen ">
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
          <input required autoFocus type="email" className="input mb-4" name='email' placeholder="Email" />
           <label className="label">Photo URL</label>
          <input autoFocus type="text" className="input mb-4" name='photo' placeholder="Photo URL" />
          <label className="label">Password</label>
          <input required type="password" className="input" name='password' placeholder="Password" />
    <p className='mt-4'>Already have an account? <Link className='text-blue-500 '>Log In</Link> </p>
          <button  className="btn  bg-blue-500 mt-4">Register</button>
          <button onClick={handleGoogleSignIn} className='btn bg-green-400'>Sign In With Google</button>
        </fieldset>
      </div>
    </form>

  </div>
</div>
    );
};

export default Register;