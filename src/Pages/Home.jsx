
// import sample from '../assets/sample.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Slide } from "react-awesome-reveal";
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from "../LottieAnimations/animationLottie.json";
import bannerOne from "../assets/roomBanner.jpg"
import bannerTwo from "../assets/full-shot-people-eating-sushi.jpg"

import bannerThree from "../assets/student study.webp"

import bannerFour from "../assets/luxury-domestic-kitchen-with-elegant-wooden-design-generated-by-ai.jpg"
import { useLoaderData } from 'react-router';
import SingleRoomDataForHome from '../Components/SingleRoomDataForHome';
import { MdRoomService } from 'react-icons/md';
import { BsApple, BsGooglePlay } from 'react-icons/bs';
import { GrAppleAppStore } from 'react-icons/gr';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import { FaRestroom } from 'react-icons/fa';

import findNearRoomIcon from '../assets/HomePageIcons/search_4021177.png'
import selectHomeIcon from '../assets/HomePageIcons/icons8-home-64.png'
import pickHomeIcon from '../assets/HomePageIcons/waiting-room_7118860.png'



const Home = () => {
  const{theme}=useContext(AuthContext)


  const loaderRoomData=useLoaderData()
 

  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };
  const { View } = useLottie(options);



    return (
        <div className='max-w-4xl mx-auto mt-9 ' >

        <div  className="w-screen  md:max-w-4xl  md:mx-auto carousel h-[400px]">

  <div id="slide1" style={{backgroundImage:`url(${bannerOne}) `}} className={` carousel-item relative bg-cover w-full`}>
    <div className='mx-auto bg-[#0000ff50]  h-40  text-center content-center my-auto rounded-3xl text-white'>
    <p className='text-4xl font-bold px-9  '>Find Your Room Mate <br />
       Here In RooMers</p>

       </div>
    
      


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div   id="slide2" style={{backgroundImage:`url(${bannerTwo}) `}} className="carousel-item bg-cover relative w-full ">
     
      <div className='mx-auto  h-40  text-center content-center my-auto bg-[#f1d44179] rounded-3xl text-white'>
    <p className='text-4xl font-bold px-9  '>Find a place that feels <br />  like home.</p>

       </div>

    
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={bannerThree}
      className="w-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={bannerFour}
      className="w-full object-cover" />
      
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  
  </div>
        
         </div>

{/* Search room animation */}
<Fade >
<h1 className='text-center mt-20 text-xl md:text-4xl font-medium'>Search Your room Mate Here</h1>
  </Fade>
<div className='max-w-md mx-auto'>

{View}
</div>

{/* how it works section */}


  <div className='text-center px-1  my-8'>
    <h1 className='text-3xl font-bold mb-3'>How it Works</h1>
    <p>Post And Find Easy! You Will Post Your  <br /> Room details.Others will find you. </p>
  </div>

<div className='max-w-3xl   mx-auto '>

<Fade delay={200}>
  <div className='flex  justify-evenly flex-col md:flex-row  gap-4'>

      <div className={`w-56 text-center content-center mx-auto rounded-2xl ${theme !== "light" && 'bg-[#0000ff1f]' }  shadow-xl h-64 `}>

        <div className='rounded-full w-20 h-20 bg-pink-300  mx-auto  mb-5 items-center'>
              <img src={findNearRoomIcon} alt="" />
        </div>

        <p className='text-center  my-auto font-bold'>Find All Room <br /> Near You</p>

      </div>



      <div className={`w-56  text-center content-center  mx-auto md:mt-12 rounded-2xl shadow-xl  h-64 ${theme !== "light" && 'bg-[#0000ff1f]' } `}>

        <div className='rounded-full w-20 h-20 bg-blue-300 mx-auto content-center mb-5'>

          <img className='mx-auto' src={selectHomeIcon} alt="" />
        </div>

        <p className='text-center font-bold  my-auto'> Select Your <br /> Home</p>

      </div>



      <div className={`w-56 text-center content-center mx-auto  rounded-2xl shadow-xl h-64 ${theme !== "light" && 'bg-[#0000ff1f]' }`}>

        <div className='rounded-full w-20 h-20 bg-orange-300 mx-auto  content-center mb-5'>
          <img className='h-10 w-10 mx-auto ' src={pickHomeIcon} alt="" />
        </div>

       
        <p className='text-center font-bold  my-auto'> Pick Your Room <br /> and enjoy</p>

      </div>
     


      {/* <div className='w-xs mt-10 card border h-48'>

      </div>
      <div className='w-xs card border h-48'>

      </div> */}

  </div>
</Fade>

  </div>


{/* show availiable cards */}
<div className='text-2xl md:text-4xl mt-20 font-bold text-center'>

{/* <h1 className='text-4xl text-center mt-6'>Available Rooms</h1> */}


Availiable{' '}
<span className='text-orange-400'>
  <Typewriter 
  words={["Rooms","Room Mates"]}
  loop={0}
   cursor
    cursorStyle="_"
    typeSpeed={120}
    deleteSpeed={50}
    delaySpeed={1000}

  />
    
  

</span>

</div>


<div className='grid mt-8   grid-cols-1 md:grid-cols-2 '>

  {
    loaderRoomData.map(room=><SingleRoomDataForHome key={room._id} room={room}/>)
  }


  
</div>



<div className={` rounded-t-4xl md:rounded-t-[120px] rounded-b-3xl 
 px-10 mt-20 py-10 pb-20 ${theme !== "light" ? 'bg-[#0000ff38]' : 'bg-blue-200' }`}>

<div className='my-10 '>

  <div className='text-center'>
    <h1 className="font-bold text-2xl mb-2">Thousands Of Students making <br /> a difference everyday using RooMers</h1>
    <p className='font-medium'>Find someone to rent a empty room monthly or whole yearly and health <br /> insurance built for people like you. It is free to start saving</p>

  

  </div>

</div>

{/* app store link */}

<div className='flex gap-8 flex-col md:flex-row justify-center'>

  <div className=' w-fit flex   rounded-3xl mx-auto md:mx-0 bg-black text-white   px-4 py-2'>
      <div className='my-auto -mr-3'>< BsGooglePlay/> </div>
      <div className='ml-6 text-xs font-semibold '>
        Get On <br /> <p className='font-bold text-xl -mt-1'>Google Play</p>
      </div>
  </div>

  <div className=' w-[172px] flex   rounded-3xl  mx-auto md:mx-0  bg-black text-white  px-4 py-2'>
      <div className=' my-auto -mr-3 '><BsApple/> </div>
      <div className='ml-6 text-xs font-semibold '>
        Get On <br /> <p className='font-bold text-xl -mt-1'>App Store</p>
      </div>
  </div>
</div>

</div>


{/* 
<div className='text-2xl mt-[400px] font-bold'>
  I am a{' '}
  <span className='text-red-500'>

    <Typewriter 
    words={['developer','designer', 'Creator']}
    loop={0} // 0=infinite
    cursor
    cursorStyle="-"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}

    />

  </span>

</div> */}

{/* <Fade>
  <p>I will gently appear as I enter the viewport</p>
</Fade>

<Slide triggerOnce>
  <p>I will animate only the first time you see me</p>
</Slide>

<Fade cascade>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade>


<Fade cascade damping={0.1}>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade>

<Fade delay={1000} direction='up'>
  <p className='text-center'>hiii</p>
</Fade> */}






</div>
    );
};

export default Home;