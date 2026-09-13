import Bannerr from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="container mx-auto px-4 pt-16 pb-10 md:pt-24 md:pb-16">

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

               
                <div className="w-full md:w-1/2 text-center md:text-left">

                    <h2 className="tracking-[-1px] md:tracking-[-1.5px] text-4xl md:text-6xl font-extrabold text-black">
                        Build Your Ideal
                    </h2>

                    <h2 className="tracking-[-1px] md:tracking-[-1.5px] text-4xl md:text-6xl font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </h2>

                    <p className="text-base md:text-xl lg:text-2xl text-gray-500 mt-5 leading-7 md:leading-9">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    {/* btns */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-6">

                        <button className="px-5 py-3 rounded-lg border-none text-white text-sm bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
                            Explore Technologies
                        </button>

                        <button className="px-5 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                            Learn More
                        </button>

                    </div>

                </div>

                
                <div className="w-full md:w-1/2 flex justify-center">

                    <img
                        src={Bannerr}
                        alt="Development Stack"
                        className="w-full max-w-[320px] md:max-w-[500px]"
                    />

                </div>

            </div>

        </section>
    );
};

export default Banner;