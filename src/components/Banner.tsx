import React from 'react';
import Bannerr from '../assets/banner-stack.png'


const Banner = () => {
    return (
        
        <div className='min-h-[400px] my-28 container mx-auto'>

        <div className="flex items-center justify-between gap-10">

        <div className='w-1/2'>

      <h2 className="tracking-[-1.5px] text-6xl font-extrabold text-black">
        Build Your Ideal</h2>

      <h2 className= "tracking-[-1.5px] text-6xl font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
     Development Stack</h2>

     <br />
     <p className="text-3xl mt-6">Explore frontend, backend, database, and tooling options,
       compare them side by side, and put together the stack that fits your
       next project.</p>

       <div> <button className="btn btn-lg border-none text-white bg-linear-to-r from-[#FF5722] via-[#D81B7E] t0-[#7C3AED]">Explore Technologies</button>

       <button className="btn btn-lg">Learn More</button>
       </div>
      
     </div>
        </div>
        
        <div className='w-1/2 flex justify-center'>
        <img src={Bannerr} 
        alt="Development Stact"
        className='w-full max-w-[500px]' />
        </div>
        </div>
    );
};

export default Banner;