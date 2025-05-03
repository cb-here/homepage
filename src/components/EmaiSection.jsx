const EmailSection = () => {
    return (
        <div className="bg-[#174924] py-10 md:py-20">
            <div className="px-5 md:px-20">
            <div className="max-w-[475px] mx-auto md:mx-0">
                <div className="text-2xl md:text-3xl leading-[32px] md:leading-[40px] text-white mb-[18px] font-[800] font-CabinetGrotesk text-center md:text-left">
                Subscribe to get updates on our latest offers and updates
                </div>
                <form className="flex items-center bg-white p-[4px] h-[56px] w-full rounded-[40px] overflow-hidden">
                    <input type="email" placeholder="Enter your e-mail" className="bg-white px-[20px] md:px-[30px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] placeholder:text-[#252424] w-full h-full focus:border-none outline-none" />
                    <button type="submit" className="flex-shrink-0 capitalize text-[14px] md:text-[15px] leading-[20px] md:leading-[24px] font-[500] bg-yellow-400 hover:bg-primary-light2 hover:bg-green-400 border-[2px] border-text-color px-[24px] h-full text-text-color rounded-[40px] flex items-center justify-center">Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default EmailSection