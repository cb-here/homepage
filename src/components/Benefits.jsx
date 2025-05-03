const Benefits = () => {
    const benefits = [
        {
            imgUrl:"https://res.cloudinary.com/da3yl4ysb/image/upload/v1745379761/image_80adebb188.png",
            title: "Trusted land seller",
            content: "We make land ownership accessible, offering vacant properties with transparency, backed by our BBB accreditation and happy customers."
        },
        {
            imgUrl:"https://res.cloudinary.com/da3yl4ysb/image/upload/v1745379761/image_80adebb188.png",
            title: "Simplifying ownership",
            content: "We cut out agents, saving you money with fast, direct transactions and unbeatable prices passed on to our satisfied customers."
        },
        {
            imgUrl:"https://res.cloudinary.com/da3yl4ysb/image/upload/v1745379761/image_80adebb188.png",
            title: "Trusted land seller",
            content: "For over 10 years, LandXperte has helped people own peaceful, rural land with no hidden fees, making ownership fast and simple."
        },

    ]
    return (
       <div className="py-20">
         <div className="w-full px-5 md:px-24">
            <div className="max-w-[800px] mx-auto text-center">
                <p className="text-green-700 uppercase bg-green-200 rounded-2xl inline-block px-2 lveticaNeue">benefits</p>
                <h1 className="text-3xl md:text-[52px] leading-[38px] md:leading-[56px] font-[800] font-CabinetGrotesk mt-[16px]">Why choose Landcurator?</h1>
                <p className="text-[#333333] lveticaNeue mt-2 text-lg mb-2">
                    We make land ownership simple, accessible, and stress-free with prime locations, quick transactions, and a seamless process tailored to meet your needs
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[50px]">
            {
                benefits.map((benefit, index) => (
                    <div className="border border-t-0 rounded-2xl border-[#E4E6F5] text-center h-full" key={index}>
                        <img src={benefit.imgUrl} alt="benfit image" className="w-full" />
                        <div className="mb-12">
                            <div className="m-2 text-center p-4">
                                <h1 className="text-[18px] md:text-[22px] leading-[24px] md:leading-[28px] line-clamp-3 font-[700] mb-[12px]">{benefit.title}</h1>
                                <p className="text-black lveticaNeue font-normal mb-10">{benefit.content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
       </div>
    )
}

export default Benefits