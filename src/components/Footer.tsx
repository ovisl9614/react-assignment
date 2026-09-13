import React from 'react';
import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className='border-t border-gray-200 bg-white'>

        <div className='container mx-auto px-4 py-12'>
            {/* Main Footer */}
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>

            <div className='md:col-span-2'>

            <img 
                src={Logo}
                alt="Dev Stack"
                className='w-32'
                />

            <p className='text-sm text-[#64748B] mt-4 max-2-md'>
                Curated tools, technologies, and resources for developers building
                <br />modern software.</p>

            <div className='flex flex-wrap gap-5 mt-6 text-sm text-[#475569]'>
                <a href="#" className='hover:text-[#D81B7E]'>GitHub
                </a>

                <a href="#" className="hover:text-[#D81B7E]">Twitter
                </a>

                <a href="#" className="hover:text-[#D81B7E]">LinkedIn
                </a>

            </div>

            </div>

              <div>
                <h3 className='text-sm font-bold text-[#0F172A] uppercase'>
                    Product</h3>
                <div className='flex flex-col gap-3 mt-4'>

                <a href="#" className='text-sm text-[#64748B] hover:text-[#D81B7E]'
                >
                Home
                </a>

                <a href="#" className='text-sm text-[#64748B] hover:text-[#D81B7E]'
                >
                Technologies
                </a>

                <a href="#" className='text-sm text-[#64748B] hover:text-[#D81B7E]'
                >
                Projects
                </a>

                </div>
              </div>

                <div>
                    <h3 className='text-sm font-bold text-[#0F172A] uppercase'>
                        Company
                    </h3>
                    <div className='flex flex-col gap-3 mt-4'>
                    
                    <a href="#" className='text-sm text-[#64748B] hover:text-[#1bd8a9]'>
                    About
                    </a>

                    <a href="#" className='text-sm text-[#64748B] hover:text-[#1bd8a9]'>
                    Contact
                    </a>

                    <a href="#" className='text-sm text-[#64748B] hover:text-[#1bd8a9]'>
                    Careers
                    </a>

                    </div>
                </div>


                <div>
                    <h3 className='text-sm font-bold text-[#0F172A] uppercase'>
                        Legal
                    </h3>

                <div className='flex flex-col gap-3 mt-4'>
                    <a href="#" className='text-sm text-[#64748B] hover:text-[#1bbcd8]'>
                        Privacy Policy
                    </a>

                    <a href="#" className='text-sm text-[#64748B] hover:text-[#1bbcd8]'>
                        Terms of Service
                    </a>
                </div>

                </div>

            </div>

            <div className='border-t border-gray-200 mt-10 pt-8'>
                <p className='text-xs text-[#94A3B8]'>
                    © 2026 Dev Stack. All rights reserved.
                </p>
            </div>
            

        </div>
        </footer>
    );
};

export default Footer;