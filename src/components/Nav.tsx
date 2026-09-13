import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 py-3 md:py-4">

                {/* Navbar */}
                <div className="flex items-center justify-between">

                    
                    <img
                        src={Logo}
                        alt="DevStack"
                        className="h-8 md:h-10 w-auto"
                    />

                   
                    <ul className="hidden md:flex items-center gap-6">
                        <li className="text-[#DB2777] cursor-pointer">
                            Home
                        </li>

                        <li className="text-[#475569] hover:text-[#DB2777] cursor-pointer">
                            Technologies
                        </li>

                        <li className="text-[#475569] hover:text-[#DB2777] cursor-pointer">
                            Projects
                        </li>

                        <li className="text-[#475569] hover:text-[#DB2777] cursor-pointer">
                            About
                        </li>

                        <li className="text-[#475569] hover:text-[#DB2777] cursor-pointer">
                            Contact
                        </li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-2">
                        <button className="px-4 py-2 text-black rounded-full hover:bg-gray-100">
                            Sign In
                        </button>

                        <button className="px-5 py-2 bg-[#DB2777] text-white rounded-full hover:bg-[#BE185D]">
                            Sign Up
                        </button>
                    </div>

                    

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl text-gray-600"
                    >
                        ☰
                    </button>
                </div>

                
                {menuOpen && (
                    <div className="md:hidden mt-4 pb-3 border-t pt-4">
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="text-[#DB2777]">Home</li>
                            <li className="text-[#475569]">Technologies</li>
                            <li className="text-[#475569]">Projects</li>
                            <li className="text-[#475569]">About</li>
                            <li className="text-[#475569]">Contact</li>
                        </ul>

                        <div className="flex gap-2 mt-4">
                            <button className="flex-1 px-4 py-2 text-black border rounded-full">
                                Sign In
                            </button>

                            <button className="flex-1 px-4 py-2 bg-[#DB2777] text-white rounded-full">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;