
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



const Home = () => {

  const loaderRoomData=useLoaderData()
 

  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };
  const { View } = useLottie(options);



    return (
        <div className='max-w-4xl mx-auto mt-9 pb-24' >

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
<h1 className='text-center mt-20 text-4xl font-medium'>Search Your room Mate Here</h1>
  </Fade>
<div className='max-w-md mx-auto'>

{View}
</div>

{/* show availiable cards */}
<div className='text-4xl font-bold text-center'>
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


<div className='grid  grid-cols-1 md:grid-cols-2 '>

  {
    loaderRoomData.map(room=><SingleRoomDataForHome key={room._id} room={room}/>)
  }


  
</div>






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

</div>

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