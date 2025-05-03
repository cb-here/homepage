import { NavLink } from "react-router-dom"


const Blogs = () => {
    const blogs = [
        {
            title: "Building Gains Into Housing Stocks & How To Trade The Sector",
            content: "Collaborate with us to expand opportunities for others, becoming an integral part of our mission to connect African students."
        },
        {
            title: "Building Gains Into Housing Stocks & How To Trade The Sector",
            content: "Collaborate with us to expand opportunities for others, becoming an integral part of our mission to connect African students."
        },
        {
            title: "Building Gains Into Housing Stocks & How To Trade The Sector",
            content: "Collaborate with us to expand opportunities for others, becoming an integral part of our mission to connect African students."
        },
    ]
    return (
        <div className="py-20">
            <div className="w-full px-5 md:px-24">
            <div>
                <h1 className="text-[32px] md:text-[52px] leading-[38px] md:leading-[56px] font-[800] font-CabinetGrotesk mt-[16px] text-center">Latest blogs & insights</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[50px]">
                {
                    blogs.map((blog, index) => (
                        <a href="/" className="group rounded-[12px] overflow-hidden hover:shadow-2xl transition duration-300" key={index}>
                            <img src="https://res.cloudinary.com/da3yl4ysb/image/upload/v1742983341/blog_3_d079a99b36.jpg" alt="blog image" />
                            <div className="mb-2">
                                <div className="m-2 text-justify">
                                    <h1 className="text-[18px] md:text-[22px] leading-[24px] md:leading-[28px] line-clamp-3 font-[700] mb-[12px]">{blog.title}</h1>
                                    <p className="text-[#555555] font-Helvetica Neue font-normal">{blog.content}</p>
                                </div>
                                <div className="flex items-center justify-between mx-3">
                                    <p className="font-[Helvetica Neue] font-[14px] text-[#888888]">Published, Nov 16, 2024</p>
                                    <button className="new-btn2 group-hover:bg-green-500">Read More</button>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Blogs