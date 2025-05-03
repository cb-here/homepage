const Hero = () => {
    return (
        <div
            className="min-h-[400px] relative" style={{
                backgroundImage: 'url("https://res.cloudinary.com/da3yl4ysb/image/upload/v1745295914/image_36861bdea2.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }} 
        >
            <div className="w-full mx-auto md:px-20 px-10 pt-[150px] md:pt-[200px] lg:pt-[300px] pb-[50px] md:pb-[64px] relative z-10">
                <div>
                    <h1 className="text-[28px] md:text-[44px] lg:text-[64px] leading-[38px] md:leading-[56px] lg:leading-[72px] font-[800] font-CabinetGrotesk mb-[24px] text-white max-w-full md:max-w-[560px]">
                        Find Your Perfect Land in Texas & New Mexico
                    </h1>

                    <form className="rounded-[12px] flex flex-col lg:flex-row gap-[12px] relative w-full">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search Properties"
                                className="pl-[20px] md:pl-[24px] pr-[32px] md:pr-[40px] py-[10px] bg-white placeholder:text-[#111] rounded-[32px] w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex-shrink-0 flex flex-col md:flex-row gap-[12px] w-full lg:w-auto">
                            <div className="w-full md:w-auto">
                                <select
                                    className="pl-[20px] md:pl-[24px] pr-[32px] md:pr-[40px] py-[10px] bg-white text-[#111] rounded-[32px] w-full focus:outline-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        City
                                    </option>
                                    <option>Thane</option>
                                    <option>Pune</option>
                                    <option>Nagpur</option>
                                </select>
                            </div>
                            <div className="w-full md:w-auto">
                                <select
                                    className="pl-[20px] md:pl-[24px] pr-[32px] md:pr-[40px] py-[10px] bg-white text-[#111] rounded-[32px] w-full focus:outline-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        State
                                    </option>
                                    <option>Maharashtra</option>
                                </select>
                            </div>
                            <div className="w-full md:w-auto min-w-[150px]">
                                <select
                                    className="pl-[20px] md:pl-[24px] pr-[32px] md:pr-[40px] py-[10px] bg-gray-200 text-[#111] rounded-[32px] w-full focus:outline-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Country
                                    </option>
                                    <option className="hover:bg-yellow-400">India</option>
                                    <option>USA</option>
                                </select>
                            </div>
                        </div>
                        <button
                            className="flex-shrink-0 new-btn2 w-full sm:w-auto"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
