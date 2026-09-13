
import {
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaJava,
    FaDocker,
} from 'react-icons/fa';

import {
    SiSvelte,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
} from 'react-icons/si'

const Cards = () => {
    return (
        <div className='container mx-auto my-20 px-4'>

            <div className='mb-8'>

                <h2 className='text-2xl font-bold'>
                    Explore the{' '}

                    <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>
                        Technologies
                    </span>

                </h2>

                <p className='text-sm text-gray-500 mt-1'>Pick one technology per category to build your ideal stack.</p>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-6'>
                    <div className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                        
                        {/* card 1 React */}
                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                       <FaReact className='text-2xl text-[#61DAFB]' />

                        <span className='shrink-0 text-xs bg-[#F0F9FF] text-[#0EA5E9] px-2 py-1 rounded'>
                                    Popular
                                </span>

                                </div>

                                <h3 className='font-bold mt-2'>React</h3>
                                
                           
                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                                A declarative, component-based
                                JavaScript library for building modern user
                                interfaces.
                            </p>

                            <div className='flex items-center justify-between text-xs mt-3'>

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
                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                                <FaVuejs className='text-2xl text-[#41B883]' />

                                <span className='text-xs bg-[#ECFDF5] text-[#059669] px-2 py-1 rounded'>
                                    Versatile
                                </span>
                                </div>

                                <h3 className='font-bold'>Vue.js</h3>


                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                                An approachable, performant, and versatile
framework for building web user interfaces.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

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

                        {/* card 3 SVelte*/}
                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                                <SiSvelte className='text-2xl text-[#FF3E00]' />

                                 <span className='text-xs bg-[#FFF7ED] text-[#EA580C] px-2 py-1 rounded'>
                                    Fast
                                </span>
                                </div>

                                <h3 className='font-bold mt-2'>
                                    Svelte</h3>
                      

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                                Cybernetically enhanced web apps with
compile-time reactivity and zero virtual
DOM overhead.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Frontend</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                
                                </div>
                                <span className='text-gray-700'>⭐ 4.8</span>

                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 4 Next.js*/}
                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                                <SiNextdotjs className='text-2xl text-black' />

                                <span className='text-xs bg-violet-100 text-[#7E22CE] px-2 py-1 rounded'>
                                   SSR/Edge
                                </span>
                                </div>

                                <h3 className='font-bold mt-2'>
                                    Next.js</h3>
                                
                            

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                               The React framework for full-stack web
applications with hybrid static & server
rendering.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>
                                
                                 <div className='flex flex-wrap gap-2'>
                                    
                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Frontend</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate
                                    </span>
                                </div>

                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 5 Node.js*/}
                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                                <FaNodeJs className='text-2xl text-[#68A063]' />

                                <span className='text-xs bg-green-100 text-[#059669] px-2 py-1 rounded'>
                                   Standard
                                </span>
                                </div>
                                
                                <h3 className='font-bold mt-2'>
                                    Node.js</h3>
                                
                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                              An asynchronous event-driven JavaScript
runtime built on Chrome's V8 engine.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>
                                    <span className='bbg-blue-50 text-[#475569] px-2 py-1 rounded'>Backend</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>

                                </div>

                                <span className='text-gray-700'>⭐ 4.8</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 6 PostgreSQL*/}

                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                            <SiPostgresql className='text-2xl text-[#336791]' />

                             <span className='text-xs bg-blue-100 text-[#2563EB] px-2 py-1 rounded'>
                                   Top SQL
                                </span>
                                </div>

                                <h3 className='font-bold mt-2'>
                                    PostgreSQL</h3>
                               
                            

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                              A powerful, open-source object-relational
database system with proven reliability.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Database</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>

                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 7 Redis*/}

                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                             <SiRedis className='text-2xl text-[#DC382D]' />

                             <span className='text-xs bg-red-100 text-[#DC2626] px-2 py-1 rounded'>
                                   Cache
                                </span>
                            </div>

                                <h3 className='font-bold mt-2'>
                                    Redis</h3>
                               

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                              In-memory data structure store used as a
high-speed database, cache, and
message broker.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Database</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>

                                <span className='text-gray-700'>⭐ 4.8</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 8 JS*/}

                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                               <SiJavascript className='text-2xl text-[#F7DF1E]' />

                            <span className='text-xs bg-[#FEF3C7] text-[#D97706] px-2 py-1 rounded'>
                                   Ubiquitous
                                </span>
                            </div>

                                <h3 className='font-bold mt-2'>
                                    JavaScript</h3>
                                

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                              The versatile, ubiquitous scripting language
powering dynamic behavior across the
web.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Language</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Beginner-Friendly</span>
                                </div>

                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 9 TS */}

                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                            <SiTypescript className='text-2xl text-[#3178C6]' />

                              <span className='text-xs bg-[#E0F9FF] text-[#0284C7] px-2 py-1 rounded'>
                                Essential
                                </span>
                            </div>

                                <h3 className='font-bold mt-2'>
                                    TypeScript</h3>
                              

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                              A strongly typed programming language
that builds on JavaScript for robust tooling.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Language</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>

                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 10 Java */}

                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                            <FaJava className='text-2xl text-[#E76F00]' />

                            <span className='text-xs bg-[#E0F9FF] text-[#0284C7] px-2 py-1 rounded'>
                                Robust
                                </span>
                            </div>

                                <h3 className='font-bold mt-2'>
                                    Java</h3>
                                

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                             A secure, object-oriented programming
language designed for portability and
scale.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Language</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>

                                <span className='text-gray-700'>⭐ 4.6</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 11 Tailwind CS */}

                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                            <SiTailwindcss className='text-2xl text-[#06B6D4]' />

                            <span className='text-xs bg-[#ECFEFF] text-[#0891B2] px-2 py-1 rounded'>
                                Modern
                                </span>
                            </div>

                                <h3 className='font-bold mt-2'>
                                    Tailwind CSS</h3>
                                

                            <p className='text-xs bg-[#ECFEFF] text-[#0891B2] px-2 py-1 rounded'>
                             A utility-first CSS framework packed with
classes that can be composed to build
custom UI.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>Styling</span>
                                    
                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Beginner-Friendly</span>
                                </div>

                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
                                Add to Stack
                            </button>
                        </div>

                        {/* card 12 Docker */}

                        <div className='border border-gray-200 rounded-lg p-4 min-w-0 h-full'>

                            <div className='flex items-start justify-between'>

                            <FaDocker className='text-2xl text-[#2496ED]' />

                            <span className='text-xs bg-[#F0F9FF] text-[#0284C7] px-2 py-1 rounded'>
                                Containers
                                </span>
                            </div>

                                <h3 className='font-bold mt-2'>
                                    Docker</h3>
                                

                            <p className='text-xs text-gray-500 mt-2 leading-5'>
                             A platform designed to build, share, and run
containerized applications reliably.
                            </p>

                            <div className='flex flex-wrap items-center justify-between gap-2 text-xs mt-3'>

                                 <div className='flex flex-wrap gap-2'>

                                    <span className='bg-blue-50 text-[#475569] px-2 py-1 rounded'>DevOps</span>

                                    <span className='bg-gray-50 text-gray-600 px-2 py-1 rounded'>Intermediate</span>
                                </div>
                                <span className='text-gray-700'>⭐ 4.9</span>
                            </div>

                            <button className='w-full mt-3 py-1.5 rounded bg-[#0F172A] text-white text-xs'>
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