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
                   {/* Google */}
<button  onClick={handleGoogleSignIn} className="btn bg-green text-black  border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  <div className='text-black'>
  Login with Google

  </div>
</button>
      </div>
      
    </form>
 
       </div>
  </div>
</div>
        </div>
    );
};

export default Login;