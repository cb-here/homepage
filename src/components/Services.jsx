const Services = () => {
    return (
        <div className="py-10 md:py-20">
            <div className="w-full py-[80px] md:py-[100px] lg:py-[120px] flex flex-col-reverse lg:flex-row gap-[50px] md:gap-[70px] lg:gap-[200px] z-10 bg-[#174924] px-5 md:px-20">
            <div className="w-full lg:pt-5">
                <div className="h-[350px] md:h-[450px] lg:h-[550px] relative w-full">
                    <div className="border-l border-t border-white rounded-tl-[40px] absolute top-[12px] left-[16px] right-[16px] bottom-[-24px] z-[1] hidden lg:block"></div>
                    <img alt="Image" loading="lazy" decoding="async" data-nimg="fill" class="shadow-[-4px_4px_0px_0px_#FFFFFF40] md:shadow-[-8px_8px_0px_0px_#FFFFFF40]" src="https://res.cloudinary.com/da3yl4ysb/image/upload/v1745414724/our_service_img_3a1c39fcca.png" style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent'}} />
                </div>
            </div>
            <div className="w-full">
                <div>
                    <h2 className="uppercase font-[500] text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] px-[16px] py-[8px] rounded-[32px] w-max max-w-full bg-[#FFFFFF14] text-white">Our Services</h2>
                    <h1 className="text-[32px] md:text-[52px] leading-[38px] md:leading-[56px] font-[800] font-CabinetGrotesk mt-[16px] text-white">What we offer</h1>
                    <p className="text-[14px] leading-[20px] md:text-[18px] md:leading-[26px] mt-[16px] text-white">Here are four reasons why Careerleap is your best choice for global actualization</p>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-[40px]">
                    <div>
                        <img src="https://res.cloudinary.com/da3yl4ysb/image/upload/v1745333696/solar_star_line_duotone_01b2233f77.png" alt="image-here" />
                        <div className="mt-[20px] md:mt-[24px] text-white">
                            <h2 className="text-[16px] leading-[24px] md:text-[22px] md:leading-[28px] font-[500]">Best property listing</h2>
                            <p className="font-HelveticaNeue font-semibold mt-[12px]">We provide consumers with a content-rich listings in a handy format.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/da3yl4ysb/image/upload/v1745333696/ion_pricetags_outline_2609dee8d6.png" alt="image-here" />
                        <div className="mt-[20px] md:mt-[24px] text-white">
                            <h2 className="text-[16px] leading-[24px] md:text-[22px] md:leading-[28px] font-[500]">Best market price</h2>
                            <p className="font-HelveticaNeue font-semibold mt-[12px]">Price estimates and sales histories for property, updating information.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/da3yl4ysb/image/upload/v1745333696/mynaui_search_dot_954d0326fe.png" alt="image-here" />
                        <div className="mt-[20px] md:mt-[24px] text-white">
                            <h2 className="text-[16px] leading-[24px] md:text-[22px] md:leading-[28px] font-[500]">Market research</h2>
                            <p className="font-HelveticaNeue font-semibold mt-[12px]">All our marketing researchers today have a tough job multitaskin.</p>
                        </div>
                    </div>
                    <div className="w-full text-justify">
                        <img src="https://res.cloudinary.com/da3yl4ysb/image/upload/v1745333696/solar_star_line_duotone_01b2233f77.png" alt="image-here" />
                        <div className="mt-[20px] md:mt-[24px] text-white">
                            <h2 className="text-[16px] leading-[24px] md:text-[22px] md:leading-[28px] font-[500]">Guaranteed service</h2>
                            <p className="font-HelveticaNeue font-semibold mt-[12px]">Our managers will keep you informed and you can act with certainty.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Services