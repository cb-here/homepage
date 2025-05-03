import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Missing import
import { Pagination } from 'swiper/modules';

const Explore = () => {
    const details = [
        {
            city: "Elpaso",
            properties: 89,
            imageUrl: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1745582474/images_2dee572fb8.jpg"
        },
        {
            city: "Texas",
            properties: 1,
            imageUrl: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1745582780/download_02bf5abb0c.jpg"
        },
        {
            city: "Thane",
            properties: 1,
            imageUrl: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1745582613/images_253a4c9733.jpg"
        },
        {
            city: "Mulund",
            properties: 2,
            imageUrl: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1745582707/images_0491edabde.jpg"
        },
        {
            city: "CA",
            properties: 1,
            imageUrl: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1745582807/vista_do_mirante_do_cristo_b3f251860c.jpg"
        },
        {
            city: "Horizon",
            properties: 89,
            imageUrl: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1745582540/gen_Mid_73288863_4_dff9cff71d.jpg"
        },
    ]
    return (
        <div className="py-20">
            <div className="w-full px-5 md:px-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[16px]">
                    <div className="max-w-[560px]">
                        <div className="text-green-700 uppercase font-[500] text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] px-[16px] py-[8px] rounded-[32px] bg-green-50 w-max max-w-full">Explore Cities</div>
                        <h1 className="text-[32px] md:text-[52px] leading-[38px] md:leading-[56px] font-[800] font-CabinetGrotesk mt-[16px]">Our Location for you</h1>
                    </div>
                    <a className="new-btn2" href="/">View All Properties <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                </div>
                <div className="relative mt-12">
                    <style jsx global>{`
                        .mySwiper .swiper-pagination-progressbar {
                            background: rgba(0, 0, 0, 0.1);
                            height: 4px;
                            bottom: 0 !important;
                            top: auto !important;
                        }
                        .mySwiper .swiper-pagination-progressbar-fill {
                            background: #008C4B;
                        }
                    `}</style>
                    
                    <Swiper
                        spaceBetween={20}
                        slidesPerView="auto"
                        pagination={{ 
                            type: 'progressbar',
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {details.map((detail, index) => (
                            <SwiperSlide key={index} className="!w-[300px] md:!w-[400px] mb-12">
                                <a href="/" className="relative group h-[450px] md:h-[500px] w-[300px] md:w-[400px] block overflow-hidden hover:shadow-[-16px_16px_20px_0px_#1111111F]">
                                    <img 
                                        src={detail.imageUrl}
                                        alt={detail.city}
                                        className="group-hover:scale-[1.04] w-full h-full object-cover transition duration-1000" 
                                    />
                                    <div className="absolute bottom-[16px] left-[16px] right-[16px] md:bottom-[20px] md:left-[20px] md:right-[20px] bg-[#11111180] border border-[#FFFFFF33] rounded-[8px] p-[16px] flex items-center justify-between gap-[20px]">
                                        <div className="text-white">
                                            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] mb-[4px] font-[500]">{detail.city}</p>
                                            <p className="text-[14px] leading-[20px]">{detail.properties} {detail.properties > 1 ? 'Properties' : 'Property'}</p>
                                        </div>
                                        <img src="https://landcurator.com/images/icons/go-to-icon.svg" alt="go to" className="group-hover:rotate-45 transition-all duration-200" />
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Explore;