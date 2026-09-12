import React from 'react';

const Cards = () => {
    return (
        <div className='container mx-auto my-20'>

            <div className='mb-8'>

                <h2 className='text-2xl font-bold'>
                    Explore the{' '}
                    <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] bg-clip-text text-transparent'>
                        Technologies
                    </span>
                </h2>
                <p className='text-sm text-gray-500 mt-1'>Pick one technology per category to build your ideal stack.</p>

                <div className='flex gap-5 mt-6'>
                    <div className='w-3/4 grid grid-cols-3 gap-4'>

                        
                        {/* card 1 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>React</h3>
                                <span className='text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded'>
                                    Popular
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                                A declarative, component-based
                                JavaScript library for building modern user
                                interfaces.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                <div className='flex gap-2'>
                                    <span className='bg-blue-50 text-blue-600 px-2 py-1 rounded'>Frontend</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Beginner Friendly</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 2 */}
                    </div>

                    <div className='w-1/4 border border-gray-200 rounded-lg p-4 h-fit'>
                        <h4 className='font-bold text-sm'>Your Stack</h4>
                        <p className='text-xs text-gray-400 mt-1'>0 Technology selected</p>
                    </div>
                </div>

            </div>

            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Cards;