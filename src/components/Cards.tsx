import React from 'react';

const Cards = () => {
    return (
        <div className='container mx-auto my-20'>

            <div className='mb-8'>

                <h2 className='text-2xl font-bold'>
                    Explore the{' '}
                    <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>
                        Technologies
                    </span>
                </h2>
                <p className='text-sm text-gray-500 mt-1'>Pick one technology per category to build your ideal stack.</p>

                <div className='flex flex-col md:flex-row gap-5 mt-6'>
                    <div className='w-full md:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-4'>

                        
                        {/* card 1 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>React</h3>
                                <span className='shrink-0 text-xs bg-[#F0F9FF] text-[#0EA5E9] px-2 py-1 rounded'>
                                    Popular
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                                A declarative, component-based
                                JavaScript library for building modern user
                                interfaces.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Frontend</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Beginner Friendly</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 2 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>Vue.js</h3>
                                <span className='text-xs bg-[#ECFDF5] text-[#059669] px-2 py-1 rounded'>
                                    Versatile
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                                An approachable, performant, and versatile
framework for building web user interfaces.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Frontend</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Beginner Friendly</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.8</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 3 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    Svelte</h3>
                                <span className='text-xs bg-[#FFF7ED] text-[#EA580C] px-2 py-1 rounded'>
                                    Fast
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                                Cybernetically enhanced web apps with
compile-time reactivity and zero virtual
DOM overhead.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Frontend</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.8</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 4 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    Next.js</h3>
                                <span className='text-xs bg-violet-100 text-[#7E22CE] px-2 py-1 rounded'>
                                   SSR/Edge
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                               The React framework for full-stack web
applications with hybrid static & server
rendering.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Frontend</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 5 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    Node.js</h3>
                                <span className='text-xs bg-green-100 text-[#059669] px-2 py-1 rounded'>
                                   Standard
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                              An asynchronous event-driven JavaScript
runtime built on Chrome's V8 engine.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Backend</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.8</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 6 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    PostgreSQL</h3>
                                <span className='text-xs bg-blue-100 text-[#2563EB] px-2 py-1 rounded'>
                                   Top SQL
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                              A powerful, open-source object-relational
database system with proven reliability.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Database</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 7 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    Redis</h3>
                                <span className='text-xs bg-red-100 text-[#DC2626] px-2 py-1 rounded'>
                                   Cache
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                              In-memory data structure store used as a
high-speed database, cache, and
message broker.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Database</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.8</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 8 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    JavaScript</h3>
                                <span className='text-xs bg-[#FEF3C7] text-[#D97706] px-2 py-1 rounded'>
                                   Ubiquitous
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                              The versatile, ubiquitous scripting language
powering dynamic behavior across the
web.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Language</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Beginner-Friendly</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 9 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    TypeScript</h3>
                                <span className='text-xs bg-[#E0F9FF] text-[#0284C7] px-2 py-1 rounded'>
                                Essential
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                              A strongly typed programming language
that builds on JavaScript for robust tooling.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Language</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 10 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    Java</h3>
                                <span className='text-xs bg-[#E0F9FF] text-[#0284C7] px-2 py-1 rounded'>
                                Robust
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                             A secure, object-oriented programming
language designed for portability and
scale.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Language</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.6</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 11 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    Tailwind CSS</h3>
                                <span className='text-xs bg-[#ECFEFF] text-[#0891B2] px-2 py-1 rounded'>
                                Modern
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                             A utility-first CSS framework packed with
classes that can be composed to build
custom UI.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Styling</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Beginner-Friendly</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 12 */}
                        <div className='border border-gray-200 rounded-lg p-4'>

                            <div className='flex justify-between'>
                                <h3 className='font-bold'>
                                    Docker</h3>
                                <span className='text-xs bg-[#F0F9FF] text-[#0284C7] px-2 py-1 rounded'>
                                Containers
                                </span>
                            </div>

                            <p className='text-sm text-gray-500 my-2'>
                             A platform designed to build, share, and run
containerized applications reliably.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-4'>
                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>DevOps</span>
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-sm'>
                                Add to Stack
                            </button>
                        </div>

                        
                        {/*  */}
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