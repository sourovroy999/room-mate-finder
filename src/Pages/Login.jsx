import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {

        const {signIn,setUser, googleSignIn}=useContext(AuthContext)
        const navigate=useNavigate()
    
    const handleGoogleSignIn=()=>{
        googleSignIn()
          .then(result=>{
            setUser(result.user)
            navigate('/')
            toast.success('Log In Successfully')
            
            
        })
        .catch(error=>{
            toast.error(error.message)
            
        })
    }    

    const handleSignIn=(e)=>{
        e.preventDefault();

        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            toast.success('Log In Successfully')
            setUser(result.user)
            navigate('/')
            
        })
        .catch(error=>{
            toast.error(error.message ,{
              duration:800
            })

            setUser(null)
            


            
        })
      



    }
    return (
        <div className="">
             <div className="bg-base-200 min-h-screen pb-30">
  <div className="hero-content card flex-col pt-11">
    <div className="text-center mb-16 ">
      <h1 className="text-5xl font-bold">Sign In now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form onSubmit={handleSignIn} >
      <div className="card-body">
        <fieldset className="fieldset">
          
          <label className="label">Email</label>
          <input required autoFocus type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input required type="password" className="input" name='password' placeholder="Password" />

          <p className="mt-4">Don't have an account? <Link className='text-blue-500' to={'/register'}>Register</Link></p>
          <button  className="btn btn-neutral mt-4">Log In</button>

        </fieldset>
      </div>
    </form>
          <button onClick={handleGoogleSignIn} className='btn mx-6 mb-5 bg-green-400'>Log In With Google</button>
       </div>
  </div>
</div>
        </div>
    );
};

export default Login;