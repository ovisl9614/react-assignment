import React from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        
    <nav className="pt-6 fixed top-0 left-0 w-full z-5">
       
    <div className='container mx-auto flex items-center justify-between'>


    <img src={Logo} alt="" />

    <div className='flex items-center gap-8'> </div>

    <ul className='flex gap-4 items-center'>
    <li className='text-[#DB2777]'>Home</li>
    <li className='text-[#475569]'>Technologies</li>
    <li className='text-[#475569]'>Projects</li>
    <li className='text-[#475569]'>About</li>
    <li className='text-[#475569]'>Contact</li>
    </ul>

    <div>
    <button className='bg-white text-black px-4 py-2 rounded-1-full'>Sign In</button>
    <button className='bg-pink-600 text-[#FFFFFF] px-4 py-2 rounded-full '>Sign Up</button>
    </div>
  

</div>
</nav>
       
    );
};

export default Nav;