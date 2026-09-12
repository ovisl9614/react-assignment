import React from 'react';
import Bannerr from '../assets/banner-stack.png'


const Banner = () => {
    return (
        
        <div className='min-h-[400px] my-28 container mx-auto'>
            <div className="">
                <div>
      <h2 className="tracking-[-1.5px] text-6xl font-extrabold text-black">
        Build Your Ideal</h2>
      <h2 className= "tracking-[-1.5px] text-6xl font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
     Development Stack</h2>
     <br />
     <p className="text-3xl">Explore frontend, backend, database, and tooling options,
       compare them side by side, and put together the stack that fits your
       next project.</p>
       <button className="btn btn-lg">Large</button>
     </div>
        </div>
        <img src="{Bannerr}" alt="" />
        <div>

        </div>
        </div>
    );
};

export default Banner;