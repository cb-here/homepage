import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Testimonials = () => {
    const testimonials = [
        {
            content: "Quick and easy doing business with LandXperte! Made a deal online via email over a few minutes. The deed was in my hands two weeks later!",
            author: "Sandy Marsh",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901392/sohan_handunge_364967b486.jpg",
            status: "Work at South Park"
        },
        {
            content: "Quick and easy doing business with LandXperte! Made a deal online via email over a few minutes. The deed was in my hands two weeks later!",
            author: "Cartman",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901395/kimmy_wukasch_cf7bf2541c.jpg",
            status: "Retired"
        },
        {
            content: "Quick and easy doing business with LandXperte! Made a deal online via email over a few minutes. The deed was in my hands two weeks later!",
            author: "Butters",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901392/sohan_handunge_364967b486.jpg",
            status: "House Husband"
        },
        {
            content: "Friendly, professional, and extremely efficient! I purchased my property on a Friday afternoon and they processed & filed the deed within 24 hours. Mike was great about answering all my questions. I would definitely do business with LandXperte again.",
            author: "Brain Griffin",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901392/sandy_rappley_7790f00059.jpg",
            status: "Retired"
        },
        {
            content: "LandXperte made the land purchase very quick and easy.  Everything was handed within a few days via emails and a certified letter. I would recommend this group for a land purchase.",
            author: "Peter Griffin",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901395/ngong_roots_45f4131ef7.jpg",
            status: ""
        },
        {
            content: "5 Stars",
            author: "John Smith",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901393/adriana_david_leal_694976d622.jpg",
            status: "Worker"
        },
        {
            content: "Purchased my first piece of property today (20 acres)  The process was smooth and Mike was prompt and answered all my questions.. YOU AINT TEXAN TILL YOU OWN A LIL BIT OF TEXAS!!!!",
            author: "Charles Klinton",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901392/colton_hunt_139e802b32.jpg",
            status: "Hello world"
        },
        {
            content: "it is legit company , you get your deed in 3 to four weeks, I bought two lot from then excellent work.",
            author: "Wendy Smith",
            profile: "https://res.cloudinary.com/da3yl4ysb/image/upload/v1742901392/sandy_rappley_7790f00059.jpg",
            status: "House Wife"
        },
    ]
    return (
        <div className="py-20">
            <div className="w-full px-5 md:px-24">
            <div className="max-w-[800px] mx-auto text-center">
                <p className="text-green-700 uppercase bg-green-200 rounded-2xl inline-block px-2 font-HelveticaNeue">Testimonials</p>
                <h1 className="text-[32px] md:text-[52px] leading-[38px] md:leading-[56px] font-[800] font-CabinetGrotesk mt-[16px] text-center">We know testimonials drive trust — here’s why people trust us</h1>
            </div>
            
                <div className="relative mt-12">
                <style jsx global>{`
                        .testimonials-swiper .swiper-pagination-bullet {
                            width: 10px;
                            height: 10px;
                            background: rgba(0, 0, 0, 0.1);
                            opacity: 1;
                            margin: 0 6px !important;
                            transition: all 0.3s ease;
                        }
                        .testimonials-swiper .swiper-pagination-bullet-active {
                            background: #008C4B;
                            width: 24px;
                            border-radius: 8px;
                        }
                    `}</style>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView="auto"
                        pagination={{
                            clickable: true,
                            el: '.testimonials-pagination',
                            type: 'bullets',
                        }}
                        modules={[Pagination]}
                        className="testimonials-swiper pb-12"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="!w-[300px] md:!w-[400px] mb-12">
                                <div className="relative px-[24px] py-[20px] md:px-[32px] md:py-[32px] bg-white rounded-[12px] min-h-[400px] md:min-h-[500px] w-[300px] md:w-[372px] flex flex-col border-[2px] border-[#E4E6F5]">
                                    <div>{testimonial.content}</div>
                                    <div className="flex-grow"></div>
                                    <img src="https://landcurator.com/images/icons/quote-icon.svg" alt="quote" className="h-[118px] w-[118px]" />
                                    <div className="flex items-center gap-2">
                                        <img src={testimonial.profile} className="rounded-full w-[48px] md:w-[56px]" alt="profile" />
                                        <div>
                                            <p className="text-[16px] md:text-[18px] leading-[24px] font-[700] md:mb-[4px]">{testimonial.author}</p>
                                            {testimonial.status && <p className="text-[14px] md:text-[15px] leading-[20px] text-[#555555]">{testimonial.status}</p>}
                                            <div class="flex items-center md:mt-[4px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-[#ffa800] text-[16px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-[#ffa800] text-[16px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-[#ffa800] text-[16px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-[#ffa800] text-[16px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-[#ffa800] text-[16px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="testimonials-pagination flex justify-center mt-8"></div>
                </div>
                </div>
            </div>
    )
}

export default Testimonials
